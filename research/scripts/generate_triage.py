#!/usr/bin/env python3
"""Generate provisional research triage data from blueprint/src/content.tex.

The output is JSON syntax written to a .yaml file. JSON is valid YAML 1.2, and
this avoids adding a PyYAML dependency.
"""

from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
CONTENT = ROOT / "blueprint" / "src" / "content.tex"
EQUATIONS = ROOT / "blueprint" / "src" / "equations"
OUTPUT = ROOT / "research" / "equation-triage.yaml"


COMMENT_PREFIXES = (
    "No precise",
    "Index entry",
    "No statement",
    "Technical equation",
)


VERY_HIGH = {
    "LEC-041",
    "LEC-043",
    "LEC-060",
    "LEC-066",
    "LEC-096",
    "LEC-100",
    "LEC-108",
    "LEC-109",
    "LEC-114",
    "LEC-119",
    "LEC-122",
    "LEC-140",
    "LEC-145",
    "LEC-162",
    "LEC-165",
    "LEC-178",
    "LEC-179",
    "LEC-180",
    "LEC-181",
    "LEC-183",
    "LEC-188",
    "LEC-190",
    "LEC-191",
}

HIGH = {
    "LEC-050",
    "LEC-053",
    "LEC-054",
    "LEC-058",
    "LEC-059",
    "LEC-094",
    "LEC-097",
    "LEC-102",
    "LEC-103",
    "LEC-106",
    "LEC-110",
    "LEC-113",
    "LEC-120",
    "LEC-123",
    "LEC-124",
    "LEC-129",
    "LEC-130",
    "LEC-131",
    "LEC-135",
    "LEC-136",
    "LEC-142",
    "LEC-148",
    "LEC-151",
    "LEC-154",
    "LEC-158",
    "LEC-175",
}


def parse_braced_args(line: str, command: str) -> list[str]:
    start = line.index(command) + len(command)
    args: list[str] = []
    i = start
    while i < len(line):
        while i < len(line) and line[i].isspace():
            i += 1
        if i >= len(line) or line[i] != "{":
            break
        depth = 0
        arg_start = i + 1
        while i < len(line):
            ch = line[i]
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    args.append(line[arg_start:i])
                    i += 1
                    break
            i += 1
    return args


def statement_status(tag: str) -> str:
    path = EQUATIONS / tag / f"{tag}.tex"
    if not path.exists():
        return "missing"
    body = path.read_text().strip()
    if not body:
        return "empty"
    if body.startswith(COMMENT_PREFIXES):
        return "comment"
    if "\\begin{conjecture}" in body:
        return "conjecture"
    return "statement"


def add(clusters: set[str], *names: str) -> None:
    clusters.update(names)


def classify(tag: str, degree: int | None, equation: str, section: str | None) -> list[str]:
    e = equation.replace(" ", "")
    clusters: set[str] = set()

    if degree == 1:
        add(clusters, "linear_equations")

    if "\\equiv" in e or "\\pmod" in e:
        add(clusters, "congruences", "local_obstructions")

    if "x^2+y^2" in e or "\\sum" in e and "^2" in e:
        add(clusters, "sums_of_squares")

    if degree == 2:
        add(clusters, "quadratic_forms")
        if "y^2-Dx^2" in e or "Dx^2" in e and "\\pm1" in e:
            add(clusters, "pell_equations", "units")
        if "\\begin{cases}" in e:
            add(clusters, "intersections_of_quadrics")
        if section == "Inhomogeneous":
            add(clusters, "conics")

    if degree == 3:
        add(clusters, "cubic_equations")
        if "ax^3+3bx^2y+3cxy^2+dy^3" in e or "a_0x^n" in e:
            add(clusters, "binary_cubic_forms", "thue_equations")
        if "x^3+y^3" in e or "x_1^3+x_2^3" in e or "sumsofcubes" in e:
            add(clusters, "sums_of_cubes")
        if "y^2=x^3" in e or "z^2=" in e and "x^3" in e:
            add(clusters, "elliptic_curves")
        if "y^2=x^3+k" in e or re.search(r"y\^2=x\^3[+-]", e):
            add(clusters, "mordell_curves")
        if "x^2+y^2+z^2-axyz" in e or "xyz" in e:
            add(clusters, "markoff_type")
        if "w^3" in e or "x_4^3" in e:
            add(clusters, "cubic_surfaces")
        if "\\pmod" in e:
            add(clusters, "local_obstructions")

    if degree == 4:
        add(clusters, "quartic_equations")
        if "x^4+y^4" in e or "x_1^4" in e:
            add(clusters, "diagonal_quartics")
        if "y^2=" in e and "x^4" in e or "z^2" in e and "x^4" in e:
            add(clusters, "genus_one_quartics", "elliptic_curves")
        if "x_4^4" in e or "w^4" in e:
            add(clusters, "quartic_surfaces")
        if "Ax^4+Bx^3y" in equation:
            add(clusters, "binary_quartic_forms", "thue_equations")

    if degree and degree > 4:
        add(clusters, "higher_degree")
        if "x^n" in e and "y^n" in e:
            add(clusters, "binomial_equations", "fermat_catalan")
        if "N(" in equation:
            add(clusters, "norm_equations", "number_fields")
        if "f(x,y)" in equation or "a_0x^n" in equation:
            add(clusters, "thue_equations", "binary_forms")
        if "y^2=f(x)" in equation or "z^2=" in equation:
            add(clusters, "hyperelliptic_curves")
        if "x^m-y^n" in e or "y^m" in e:
            add(clusters, "catalan_type")

    if tag in {"LEC-183"}:
        add(clusters, "cluster_algebras", "mutation_dynamics")
    if tag in {"LEC-188"}:
        add(clusters, "egyptian_fractions", "erdos_straus")
    if tag in {"LEC-114", "LEC-116"}:
        add(clusters, "waring_type")
    if tag in {"LEC-179", "LEC-180"}:
        add(clusters, "norm_equations", "number_fields")
    if tag in {"LEC-096", "LEC-117", "LEC-118"}:
        add(clusters, "markoff_type", "mutation_dynamics")

    if not clusters:
        add(clusters, "unclassified")
    return sorted(clusters)


def priority(tag: str, clusters: list[str], status: str) -> str:
    if tag in VERY_HIGH:
        return "very_high"
    if tag in HIGH:
        return "high"
    if status == "comment":
        return "low"
    if any(c in clusters for c in ["elliptic_curves", "norm_equations", "markoff_type", "thue_equations"]):
        return "high"
    if any(c in clusters for c in ["quadratic_forms", "linear_equations", "congruences"]):
        return "medium"
    return "medium"


def target_ranks(priority_value: str, clusters: list[str], status: str) -> dict[str, int | None]:
    if status == "comment":
        return {"history": 4, "structure": 5, "interconnection": 4}
    if priority_value == "very_high":
        return {"history": 2, "structure": 2, "interconnection": 2}
    if priority_value == "high":
        return {"history": 2, "structure": 3, "interconnection": 2}
    if "linear_equations" in clusters or "quadratic_forms" in clusters:
        return {"history": 1, "structure": 4, "interconnection": 3}
    return {"history": 3, "structure": 4, "interconnection": 3}


def reason_for(priority_value: str, clusters: list[str], status: str) -> str:
    if status == "comment":
        return "Comment-only entry; use mainly as context for nearby equations."
    if priority_value == "very_high":
        return "High chance of nontrivial structure or interconnection."
    if priority_value == "high":
        return "Promising standard structure; worth cluster-level survey."
    return "Useful for baseline coverage or known-theory comparison."


def main() -> None:
    entries = []
    cluster_index: dict[str, list[str]] = defaultdict(list)
    degree: int | None = None
    section: str | None = None

    for line in CONTENT.read_text().splitlines():
        degree_match = re.search(r"\\DegreeChapter\{Degree (\d+)\}", line)
        if degree_match:
            degree = int(degree_match.group(1))
            section = None
            continue
        section_match = re.search(r"\\section\*\{([^}]+)\}", line)
        if section_match:
            section = section_match.group(1)
            continue
        if "\\PrimaryEquation" not in line:
            continue
        args = parse_braced_args(line, "\\PrimaryEquation")
        if len(args) != 4:
            raise ValueError(f"Could not parse PrimaryEquation line: {line}")
        tag, equation, pages, note = args
        status = statement_status(tag)
        clusters = classify(tag, degree, equation, section)
        priority_value = priority(tag, clusters, status)
        for cluster in clusters:
            cluster_index[cluster].append(tag)
        entries.append(
            {
                "tag": tag,
                "equation_latex": equation,
                "pages": pages,
                "degree": degree,
                "section": section,
                "content_note": note,
                "statement_status": status,
                "clusters": clusters,
                "research_priority": priority_value,
                "triage_target_ranks": target_ranks(priority_value, clusters, status),
                "final_ranks": {
                    "history": None,
                    "structure": None,
                    "interconnection": None,
                },
                "confidence": "low",
                "reason": reason_for(priority_value, clusters, status),
                "next_action": "deep_dive" if priority_value == "very_high" else "cluster_survey",
            }
        )

    data = {
        "generated_from": "blueprint/src/content.tex",
        "note": "Provisional triage. triage_target_ranks are expected research targets, not final ranks.",
        "entry_count": len(entries),
        "deep_dive_shortlist": [e["tag"] for e in entries if e["research_priority"] == "very_high"],
        "cluster_index": {k: v for k, v in sorted(cluster_index.items())},
        "entries": entries,
    }

    OUTPUT.write_text(json.dumps(data, indent=2) + "\n")


if __name__ == "__main__":
    main()

