#!/usr/bin/env python3
"""Build the connection index and graph from connection score files.

Scores are JSON syntax written to .yaml files, matching the existing research
convention in this repository.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
CONNECTIONS = ROOT / "research" / "connections"
ATOMS = CONNECTIONS / "atoms.json"
INDEX = CONNECTIONS / "index.md"
GRAPH = ROOT / "research" / "graph" / "connections.json"


def slug(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "unknown"


def load_scores() -> list[dict]:
    scores = []
    for path in sorted(CONNECTIONS.glob("CONN-*/score.yaml")):
        data = json.loads(path.read_text())
        data["_path"] = path.parent.relative_to(CONNECTIONS).as_posix()
        scores.append(data)
    return scores


def load_atoms() -> dict[str, dict]:
    data = json.loads(ATOMS.read_text())
    return {atom["id"]: atom for atom in data["atoms"]}


def render_index(scores: list[dict]) -> str:
    lines = [
        "# Connection Index",
        "",
        "Generated from `research/connections/CONN-*/score.yaml`.",
        "",
        "| ID | Distance | Status | Confidence | LEC tags | Title |",
        "| --- | --- | --- | --- | --- | --- |",
    ]
    for score in scores:
        lecs = ", ".join(f"`{tag}`" for tag in score.get("lec_tags", []))
        lines.append(
            f"| `{score['connection_id']}` | {score['distance']} | "
            f"{score['status']} | {score['confidence']} | {lecs} | "
            f"[{score['title']}]({score['_path']}/claim.md) |"
        )
    promoted = [score for score in scores if score.get("blueprint_promoted")]
    lines.extend(["", "## Blueprint-Promoted Connections", ""])
    if promoted:
        for score in promoted:
            lines.append(f"- `{score['connection_id']}`: {score['title']}")
    else:
        lines.append("None.")
    lines.extend(["", "## Distance Counts", ""])
    counts: dict[str, int] = {}
    for score in scores:
        counts[score["distance"]] = counts.get(score["distance"], 0) + 1
    for distance in sorted(counts):
        lines.append(f"- `{distance}`: {counts[distance]}")
    return "\n".join(lines) + "\n"


def render_graph(scores: list[dict], atoms: dict[str, dict]) -> str:
    nodes: dict[str, dict] = {}
    edges: list[dict] = []

    def add_node(node_id: str, node_type: str, **extra: str) -> None:
        nodes.setdefault(node_id, {"id": node_id, "type": node_type, **extra})

    for atom_id, atom in atoms.items():
        add_node(atom_id, "mordell_atom", label=atom["mordell_object"])
        for lec in atom.get("lec_tags", []):
            add_node(lec, "lec")
            edges.append({"source": atom_id, "target": lec, "relation": "attached_to"})

    for score in scores:
        cid = score["connection_id"]
        add_node(cid, "connection", label=score["title"], distance=score["distance"], status=score["status"])
        for lec in score.get("lec_tags", []):
            add_node(lec, "lec")
            edges.append({"source": cid, "target": lec, "relation": "connects_lec"})
        for atom_id in score.get("mordell_atoms", []):
            add_node(atom_id, "mordell_atom")
            edges.append({"source": cid, "target": atom_id, "relation": "uses_atom"})
        for obj in score.get("modern_objects", []):
            oid = "structure:" + slug(obj)
            add_node(oid, "modern_structure", label=obj)
            edges.append({"source": cid, "target": oid, "relation": "maps_to"})
        for sig in score.get("signatures", []):
            sid = "signature:" + slug(sig)
            add_node(sid, "signature", label=sig)
            edges.append({"source": cid, "target": sid, "relation": "has_signature"})

    graph = {
        "generated_from": "research/connections/CONN-*/score.yaml",
        "nodes": list(nodes.values()),
        "edges": edges,
    }
    return json.dumps(graph, indent=2, ensure_ascii=True) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="write index and graph")
    args = parser.parse_args()

    scores = load_scores()
    atoms = load_atoms()
    index = render_index(scores)
    graph = render_graph(scores, atoms)

    if args.write:
        INDEX.write_text(index)
        GRAPH.write_text(graph)
        print(f"wrote {INDEX.relative_to(ROOT)}")
        print(f"wrote {GRAPH.relative_to(ROOT)}")
    else:
        print(index)


if __name__ == "__main__":
    main()
