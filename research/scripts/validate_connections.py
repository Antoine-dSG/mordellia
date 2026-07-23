#!/usr/bin/env python3
"""Validate connection dossiers."""

from __future__ import annotations

import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
CONNECTIONS = ROOT / "research" / "connections"
ATOMS = CONNECTIONS / "atoms.json"
GRAPH = ROOT / "research" / "graph" / "connections.json"

REQUIRED_FILES = {
    "claim.md",
    "mordell-source.md",
    "literature.md",
    "evidence.md",
    "score.yaml",
    "search-log.md",
}

REQUIRED_SCORE_FIELDS = {
    "connection_id",
    "title",
    "status",
    "distance",
    "confidence",
    "novelty_status",
    "blueprint_promoted",
    "lec_tags",
    "mordell_atoms",
    "signatures",
    "modern_objects",
    "references",
    "explains",
    "non_obvious_reason",
    "next_steps",
}

VALID_DISTANCES = {"D1", "D2", "D3", "D4", "D5"}
VALID_STATUSES = {
    "candidate",
    "mapped",
    "tested",
    "referenced",
    "structural",
    "candidate_original",
    "rejected",
    "blocked",
}


def fail(errors: list[str], message: str) -> None:
    errors.append(message)


def main() -> None:
    errors: list[str] = []
    atoms_data = json.loads(ATOMS.read_text())
    atom_ids = {atom["id"] for atom in atoms_data["atoms"]}

    connection_dirs = sorted(CONNECTIONS.glob("CONN-*"))
    if not connection_dirs:
        fail(errors, "no connection dossiers found")

    seen_ids: set[str] = set()
    for directory in connection_dirs:
        present = {path.name for path in directory.iterdir() if path.is_file()}
        missing = REQUIRED_FILES - present
        if missing:
            fail(errors, f"{directory.relative_to(ROOT)} missing files: {sorted(missing)}")
            continue
        score_path = directory / "score.yaml"
        try:
            score = json.loads(score_path.read_text())
        except json.JSONDecodeError as err:
            fail(errors, f"{score_path.relative_to(ROOT)} is not JSON-compatible YAML: {err}")
            continue
        missing_fields = REQUIRED_SCORE_FIELDS - set(score)
        if missing_fields:
            fail(errors, f"{score_path.relative_to(ROOT)} missing fields: {sorted(missing_fields)}")
        cid = score.get("connection_id")
        if cid in seen_ids:
            fail(errors, f"duplicate connection id: {cid}")
        seen_ids.add(cid)
        if score.get("distance") not in VALID_DISTANCES:
            fail(errors, f"{cid} has invalid distance {score.get('distance')!r}")
        if score.get("status") not in VALID_STATUSES:
            fail(errors, f"{cid} has invalid status {score.get('status')!r}")
        for atom_id in score.get("mordell_atoms", []):
            if atom_id not in atom_ids:
                fail(errors, f"{cid} references unknown atom {atom_id}")

    if GRAPH.exists():
        graph = json.loads(GRAPH.read_text())
        graph_nodes = {node["id"] for node in graph.get("nodes", [])}
        for cid in seen_ids:
            if cid not in graph_nodes:
                fail(errors, f"graph missing connection node {cid}")

    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        raise SystemExit(1)
    print(f"validated {len(connection_dirs)} connection dossiers")


if __name__ == "__main__":
    main()

