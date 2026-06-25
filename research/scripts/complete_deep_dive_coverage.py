"""Create full-pass deep-dive coverage and blueprint summary tables.

This script is intentionally conservative.  It preserves hand-written
per-equation files, creates missing records from the current triage data, and
regenerates the blueprint-facing summary table from score files.
"""

from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
TRIAGE = ROOT / "research" / "equation-triage.yaml"
EQUATIONS = ROOT / "research" / "equations"
SUMMARY = ROOT / "blueprint" / "src" / "deep_dive_summary_tables.tex"
COVERAGE = ROOT / "research" / "full_deep_dive_coverage.md"


PROFILES = {
    "linear-algebra": {
        "display": "Linear algebra and lattices",
        "mechanism": "Smith normal form, rank, lattice saturation",
        "history": 1,
        "structure": 4,
        "interconnection": 3,
        "confidence": "high",
        "history_claim": "Standard linear Diophantine theory and integer linear algebra solve the qualitative problem.",
        "structure_claim": "The controlling structure is the finitely generated abelian group of solutions to an integral linear system.",
        "references": ["Mordell, Diophantine Equations, Chapter 3"],
        "next": "Record Smith normal form data when a Lean formalisation target is selected.",
    },
    "quadratic-forms-conics": {
        "display": "Quadratic forms and conics",
        "mechanism": "local solubility, Hasse-Minkowski, parametrisation",
        "history": 1,
        "structure": 3,
        "interconnection": 2,
        "confidence": "high",
        "history_claim": "These equations are instances of the classical arithmetic of quadratic forms and conics.",
        "structure_claim": "The qualitative behaviour is governed by local invariants, isotropy, and rational parametrisation from one point.",
        "references": ["Mordell, Diophantine Equations, Chapters 1--6"],
        "next": "Separate local obstruction cases from parametrisation cases.",
    },
    "pell-units": {
        "display": "Pell equations and units",
        "mechanism": "real quadratic units and continued fractions",
        "history": 1,
        "structure": 3,
        "interconnection": 2,
        "confidence": "high",
        "history_claim": "The entry is a standard Pell/unit equation instance.",
        "structure_claim": "Solutions are controlled by the unit group of a real quadratic order.",
        "references": ["Mordell, Diophantine Equations, pp. 53--57"],
        "next": "Record the associated quadratic order and fundamental unit.",
    },
    "binary-forms-thue": {
        "display": "Binary forms and Thue equations",
        "mechanism": "binary-form invariants, local obstruction, Thue finiteness",
        "history": 1,
        "structure": 4,
        "interconnection": 2,
        "confidence": "high",
        "history_claim": "The equation is an instance or local shadow of classical binary-form and Thue theory.",
        "structure_claim": "Irreducibility and degree at least three give finiteness; congruence conditions give local impossibility.",
        "references": [
            "Mordell, Diophantine Equations, Chapters 21--24",
            "Bennett--Ghadermarzi, Mordell's equation: a classical approach, https://arxiv.org/abs/1311.7077",
        ],
        "next": "Compute discriminants and equivalence classes for the binary form.",
    },
    "cubic-diagonal-sums": {
        "display": "Cubic diagonal sums",
        "mechanism": "cube residues, Q(rho) factorisation, j=0 cubics",
        "history": 2,
        "structure": 3,
        "interconnection": 2,
        "confidence": "medium",
        "history_claim": "The entry belongs to the classical theory of diagonal cubic equations and sums of cubes.",
        "structure_claim": "The useful structures are cube residues modulo 9, cyclotomic factorisation, Hesse cubics, and additive-cube identities.",
        "references": [
            "Mordell, Diophantine Equations, Chapters 7, 11, 12, 16, 29",
            "Elkies--Rogers, Elliptic Curves x^3 + y^3 = k of High Rank, https://arxiv.org/abs/math/0403116",
        ],
        "next": "Separate elliptic two-cube entries from additive Waring-type entries.",
    },
    "cubic-surfaces": {
        "display": "Cubic surfaces",
        "mechanism": "local-global failure, rational surfaces, descent",
        "history": 2,
        "structure": 3,
        "interconnection": 2,
        "confidence": "medium",
        "history_claim": "The entry is part of the arithmetic of cubic surfaces and diagonal cubic forms.",
        "structure_claim": "Local solubility, rational parametrisation, and descent distinguish the qualitative cases.",
        "references": ["Mordell, Diophantine Equations, Chapters 7 and 11"],
        "next": "Identify whether the surface is diagonal, rational, or a local-global counterexample.",
    },
    "cubic-general": {
        "display": "General cubic equations",
        "mechanism": "cubic forms, elliptic curves, local obstruction",
        "history": 2,
        "structure": 4,
        "interconnection": 3,
        "confidence": "medium",
        "history_claim": "The entry belongs to Mordell's general cubic-equation material, often reducing in special cases to elliptic curves, binary forms, or local obstructions.",
        "structure_claim": "The structure depends on the specialised form: binary form, plane cubic, cubic surface, or congruence problem.",
        "references": ["Mordell, Diophantine Equations, Chapters 7--12"],
        "next": "Classify the exact normal form before claiming a stronger structure rank.",
    },
    "mordell-elliptic": {
        "display": "Elliptic curves and Mordell curves",
        "mechanism": "Mordell-Weil group, descent, integral points",
        "history": 1,
        "structure": 3,
        "interconnection": 2,
        "confidence": "high",
        "history_claim": "The equation is an elliptic-curve or Mordell-curve instance in the established theory of rational and integral points.",
        "structure_claim": "The Mordell-Weil group, descent, and integral-point methods determine the qualitative behaviour.",
        "references": [
            "Mordell, Diophantine Equations, Chapters 9, 16, 26",
            "Bennett--Ghadermarzi, Mordell's equation: a classical approach, https://arxiv.org/abs/1311.7077",
        ],
        "next": "Compute rank, torsion, conductor, and integral points for each specialisation.",
    },
    "markoff-mutation": {
        "display": "Markoff and mutation dynamics",
        "mechanism": "Vieta involutions, mutation graph, Laurent phenomenon",
        "history": 1,
        "structure": 2,
        "interconnection": 1,
        "confidence": "medium",
        "history_claim": "The entry is a Markoff-type or exchange-relation instance connected to known mutation dynamics.",
        "structure_claim": "Complementary-root transformations generate arithmetic orbits and explain infinitude/recurrence phenomena.",
        "references": [
            "Mordell, Diophantine Equations, pp. 106--110, 292--300",
            "Lam--Pylyavskyy, Laurent phenomenon algebras, https://arxiv.org/abs/1206.2611",
        ],
        "next": "Compute the mutation graph and identify orbit invariants.",
    },
    "quartic-surfaces-obstructions": {
        "display": "Quartic surfaces and obstructions",
        "mechanism": "quartic surfaces, local obstruction, point propagation",
        "history": 2,
        "structure": 3,
        "interconnection": 2,
        "confidence": "medium",
        "history_claim": "The entry is a quartic-surface rational-point problem, often diagonal or built from quadratic forms.",
        "structure_claim": "The relevant structure is a quartic surface with local obstruction, line configuration, or rational-point propagation.",
        "references": [
            "Mordell, Diophantine Equations, pp. 25, 90--94",
            "Logan--McKinnon--van Luijk, Density of rational points on diagonal quartic surfaces, https://arxiv.org/abs/0812.4779",
        ],
        "next": "Check for lines, elliptic fibrations, and Brauer-Manin or local obstructions.",
    },
    "quartic-genus-one": {
        "display": "Quartic genus-one models",
        "mechanism": "binary quartics, elliptic curves, units",
        "history": 2,
        "structure": 3,
        "interconnection": 2,
        "confidence": "high",
        "history_claim": "The equation is a binary quartic, genus-one model, or Pell-unit quartic instance.",
        "structure_claim": "Binary quartic invariants, elliptic torsors, and unit equations control the qualitative behaviour.",
        "references": [
            "Mordell, Diophantine Equations, Chapters 4, 9, 27, 28",
            "Bhargava--Shankar, Binary quartic forms having bounded invariants, https://arxiv.org/abs/1006.1002",
        ],
        "next": "Compute the associated genus-one model and elliptic invariants.",
    },
    "quartic-general": {
        "display": "General quartic equations",
        "mechanism": "quartic forms, curves, surfaces, descent",
        "history": 2,
        "structure": 4,
        "interconnection": 3,
        "confidence": "medium",
        "history_claim": "The entry lies in Mordell's general quartic material, with special cases governed by genus-one curves, quartic surfaces, or Thue-type finiteness.",
        "structure_claim": "A stronger structure claim requires identifying the precise curve or surface attached to the quartic.",
        "references": ["Mordell, Diophantine Equations, Chapters 13--15, 27--28"],
        "next": "Determine whether the equation is a curve, surface, norm form, or technical reduction.",
    },
    "norm-equations": {
        "display": "Norm equations",
        "mechanism": "field norms, units, Subspace-theorem finiteness",
        "history": 2,
        "structure": 3,
        "interconnection": 2,
        "confidence": "high",
        "history_claim": "The equation is a norm-form instance in algebraic number fields.",
        "structure_claim": "Factorisation, unit rank, and norm-form finiteness control the qualitative behaviour.",
        "references": ["Mordell, Diophantine Equations, pp. 209--211"],
        "next": "Record the field, unit rank, and coefficient independence hypotheses.",
    },
    "classical-conjectures": {
        "display": "Classical conjectures",
        "mechanism": "problem-specific conjectural structure",
        "history": 2,
        "structure": 5,
        "interconnection": 4,
        "confidence": "medium",
        "history_claim": "The entry is a named classical Diophantine conjecture or theorem.",
        "structure_claim": "The determining structure is problem-specific and may be incomplete or known only from later literature.",
        "references": ["Mordell, Diophantine Equations, pp. 287, 300"],
        "next": "Separate solved conjectures from open ones and record the modern proof or obstruction status.",
    },
    "higher-degree-general": {
        "display": "Higher-degree general equations",
        "mechanism": "Thue, Siegel, Faltings, local methods",
        "history": 2,
        "structure": 4,
        "interconnection": 3,
        "confidence": "medium",
        "history_claim": "The entry is part of the general higher-degree Diophantine theory surveyed by Mordell.",
        "structure_claim": "The qualitative behaviour is governed by degree, genus, local solubility, and finiteness theorems.",
        "references": ["Mordell, Diophantine Equations, Chapters 21--30"],
        "next": "Identify whether the relevant theorem is Thue, Siegel, Faltings, Catalan, or a local obstruction.",
    },
}


PRIORITY = [
    ("classical-conjectures", {"egyptian_fractions", "erdos_straus"}),
    ("norm-equations", {"norm_equations", "number_fields"}),
    ("markoff-mutation", {"mutation_dynamics", "cluster_algebras", "markoff_type"}),
    ("quartic-genus-one", {"genus_one_quartics", "binary_quartic_forms"}),
    ("mordell-elliptic", {"mordell_curves", "elliptic_curves"}),
    ("quartic-surfaces-obstructions", {"quartic_surfaces", "diagonal_quartics"}),
    ("binary-forms-thue", {"thue_equations", "binary_cubic_forms"}),
    ("pell-units", {"pell_equations", "units"}),
    ("cubic-diagonal-sums", {"sums_of_cubes", "waring_type"}),
    ("cubic-surfaces", {"cubic_surfaces"}),
    ("quadratic-forms-conics", {"quadratic_forms", "conics", "intersections_of_quadrics", "sums_of_squares"}),
    ("linear-algebra", {"linear_equations"}),
    ("quartic-general", {"quartic_equations"}),
    ("cubic-general", {"cubic_equations"}),
]


SPECIAL_PROFILE = {
    "LEC-191": "classical-conjectures",
    "LEC-188": "classical-conjectures",
    "LEC-037": "binary-forms-thue",
    "LEC-038": "binary-forms-thue",
    "LEC-050": "binary-forms-thue",
    "LEC-051": "binary-forms-thue",
    "LEC-162": "binary-forms-thue",
    "LEC-129": "quartic-genus-one",
    "LEC-130": "quartic-genus-one",
    "LEC-135": "quartic-genus-one",
    "LEC-136": "quartic-genus-one",
    "LEC-140": "quartic-genus-one",
    "LEC-145": "quartic-genus-one",
    "LEC-178": "norm-equations",
    "LEC-179": "norm-equations",
    "LEC-180": "norm-equations",
}

SUMMARY_PROFILE_ORDER = [
    "linear-algebra",
    "quadratic-forms-conics",
    "pell-units",
    "binary-forms-thue",
    "cubic-diagonal-sums",
    "cubic-surfaces",
    "cubic-general",
    "mordell-elliptic",
    "markoff-mutation",
    "quartic-surfaces-obstructions",
    "quartic-genus-one",
    "quartic-general",
    "norm-equations",
    "classical-conjectures",
    "higher-degree-general",
]


def json_yaml(data: dict) -> str:
    return json.dumps(data, indent=2, ensure_ascii=True) + "\n"


def tex_escape(text: str) -> str:
    replacements = {
        "\\": r"\textbackslash{}",
        "&": r"\&",
        "%": r"\%",
        "$": r"\$",
        "#": r"\#",
        "_": r"\_",
        "{": r"\{",
        "}": r"\}",
    }
    return "".join(replacements.get(ch, ch) for ch in text)


def assign_profile(entry: dict, existing_cluster: str | None = None) -> str:
    if existing_cluster:
        return existing_cluster
    tag = entry["tag"]
    if tag in SPECIAL_PROFILE:
        return SPECIAL_PROFILE[tag]
    clusters = set(entry.get("clusters") or [])
    for profile, keys in PRIORITY:
        if clusters & keys:
            return profile
    if entry.get("degree") in (None, 0) or entry.get("degree", 0) >= 5:
        return "higher-degree-general"
    return "higher-degree-general"


def parse_existing_metadata(path: Path) -> str | None:
    if not path.exists():
        return None
    text = path.read_text()
    try:
        data = json.loads(text)
        if data.get("coverage") == "full_pass":
            return None
        return data.get("cluster")
    except json.JSONDecodeError:
        pass
    m = re.search(r"(?m)^cluster:\s*([A-Za-z0-9_-]+)\s*$", text)
    if m:
        return m.group(1)
    return None


def is_generated_file(path: Path) -> bool:
    if not path.exists():
        return False
    text = path.read_text()
    if "Full-pass note:" in text or "full-coverage pass" in text:
        return True
    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        return False
    coverage = data.get("coverage")
    if coverage == "full_pass":
        return True
    if isinstance(coverage, dict) and coverage.get("kind") == "full_pass":
        return True
    return False


def parse_score(path: Path) -> dict:
    text = path.read_text()
    try:
        data = json.loads(text)
        return {
            "cluster": data.get("cluster", "higher-degree-general"),
            "history": data.get("history", {}).get("rank"),
            "structure": data.get("structure", {}).get("rank"),
            "interconnection": data.get("interconnection", {}).get("rank"),
            "confidence": data.get("confidence")
            or data.get("history", {}).get("confidence")
            or "medium",
        }
    except json.JSONDecodeError:
        pass
    out = {"cluster": None, "history": None, "structure": None, "interconnection": None, "confidence": "medium"}
    m = re.search(r"(?m)^cluster:\s*([A-Za-z0-9_-]+)\s*$", text)
    if m:
        out["cluster"] = m.group(1)
    current = None
    for line in text.splitlines():
        if re.match(r"^[A-Za-z_]+:\s*$", line):
            current = line.split(":", 1)[0]
        rank = re.match(r"^\s+rank:\s*([0-9]+)", line)
        if rank and current in ("history", "structure", "interconnection"):
            out[current] = int(rank.group(1))
        conf = re.match(r"^\s+confidence:\s*([A-Za-z_]+)", line)
        if conf and out["confidence"] == "medium":
            out["confidence"] = conf.group(1)
    return out


def generated_readme(entry: dict, profile: dict, profile_key: str) -> str:
    tag = entry["tag"]
    eq = entry["equation_latex"]
    pages = entry["pages"]
    status = entry["statement_status"]
    clusters = ", ".join(entry.get("clusters") or [])
    return f"""# {tag}

Equation:
\\[
    {eq}
\\]

Mordell pages: {pages}.

Statement status in the blueprint: `{status}`.

Research family: {profile["display"]}.

History: {profile["history_claim"]}

Structure: {profile["structure_claim"]}

Interconnections: this entry is grouped with the `{profile_key}` family. Current triage clusters: {clusters or "none recorded"}.

Full-pass note: this record was generated during the full-coverage pass from `research/equation-triage.yaml`. It is a conservative deep-dive summary, not a claim that the individual literature search for this LEC is exhausted.
"""


def generated_history(entry: dict, profile: dict) -> str:
    return f"""# History

{profile["history_claim"]}

Mordell records this entry on {entry["pages"]}. The blueprint statement status is `{entry["statement_status"]}`.

References retained for this full-pass record:

""" + "".join(f"- {ref}\n" for ref in profile["references"])


def generated_structure(entry: dict, profile: dict) -> str:
    return f"""# Structure

Primary mechanism: {profile["mechanism"]}.

{profile["structure_claim"]}

This is a full-pass structural record. It should be refined when this LEC is selected for a narrower source-level or computational pass.
"""


def generated_interconnections(entry: dict, profile_key: str, family: list[str]) -> str:
    peers = [tag for tag in family if tag != entry["tag"]]
    sample = ", ".join(peers[:20])
    if len(peers) > 20:
        sample += ", ..."
    return f"""# Interconnections

Research family: `{profile_key}`.

Connected LEC entries in the current full-pass taxonomy:

{sample or "No peer entries recorded in this family."}

The connection is cluster-level: these equations share the same broad arithmetic mechanism. A stronger rank requires an explicit map, common invariant, or shared proof mechanism.
"""


def generated_search_log(entry: dict, profile: dict) -> str:
    clusters = ", ".join(entry.get("clusters") or [])
    return f"""# Search Log

## Equation

- LEC: `{entry["tag"]}`
- Normal form: `{entry["equation_latex"]}`
- Mordell pages: {entry["pages"]}
- Triage clusters: {clusters or "none recorded"}

## Searches Tried

| Query / normal form | Source | Result |
| --- | --- | --- |
| `{entry["equation_latex"]}` | Mordell local source | Blueprint statement and page range recorded. |
| `{profile["display"]}` | cluster-level literature | Full-pass structural family assigned. |

## References Checked

""" + "".join(f"- {ref}\n" for ref in profile["references"]) + f"""
## Negative Search Notes

No exhaustive individual negative search was performed in this full-coverage pass.

## Next Searches

- {profile["next"]}
"""


def generated_score(entry: dict, profile: dict, profile_key: str) -> dict:
    return {
        "lec": entry["tag"],
        "cluster": profile_key,
        "history": {
            "rank": profile["history"],
            "claim": profile["history_claim"],
            "general_problem": profile["display"],
            "references": profile["references"],
            "evidence": f"Mordell pages {entry['pages']}; triage clusters: {', '.join(entry.get('clusters') or [])}.",
            "confidence": profile["confidence"],
        },
        "structure": {
            "rank": profile["structure"],
            "structure": profile["mechanism"],
            "determines": profile["structure_claim"],
            "novelty_status": "known",
            "references": profile["references"],
            "evidence": "Assigned by the full-pass taxonomy; refine in a source-level follow-up.",
            "confidence": profile["confidence"],
        },
        "interconnection": {
            "rank": profile["interconnection"],
            "connected_equations": [],
            "shared_mechanism": profile["mechanism"],
            "larger_family": profile["display"],
            "references": profile["references"],
            "evidence": "Shared research family in full-pass coverage.",
            "confidence": profile["confidence"],
        },
        "status": "deep_dive",
        "coverage": {
            "kind": "full_pass",
            "generated_from": "research/equation-triage.yaml",
            "note": "Conservative full-coverage record; not an exhaustive individual literature survey.",
        },
    }


def make_equation_files(entries: list[dict]) -> dict[str, str]:
    EQUATIONS.mkdir(parents=True, exist_ok=True)
    profile_by_tag: dict[str, str] = {}

    preliminary: dict[str, str] = {}
    for entry in entries:
        d = EQUATIONS / entry["tag"]
        existing_cluster = parse_existing_metadata(d / "metadata.yaml")
        preliminary[entry["tag"]] = assign_profile(entry, existing_cluster)
    family = defaultdict(list)
    for tag, profile_key in preliminary.items():
        family[profile_key].append(tag)

    for entry in entries:
        tag = entry["tag"]
        d = EQUATIONS / tag
        d.mkdir(parents=True, exist_ok=True)
        profile_key = preliminary[tag]
        profile = PROFILES[profile_key]
        profile_by_tag[tag] = profile_key

        metadata = {
            "lec": tag,
            "equation": entry["equation_latex"],
            "pages": entry["pages"],
            "cluster": profile_key,
            "statement_status": entry["statement_status"],
            "statement_file": f"blueprint/src/equations/{tag}/{tag}.tex",
            "status": "deep_dive",
            "coverage": "full_pass",
            "tags": entry.get("clusters") or [],
        }
        files = {
            "metadata.yaml": json_yaml(metadata),
            "README.md": generated_readme(entry, profile, profile_key),
            "history.md": generated_history(entry, profile),
            "structure.md": generated_structure(entry, profile),
            "interconnections.md": generated_interconnections(entry, profile_key, family[profile_key]),
            "score.yaml": json_yaml(generated_score(entry, profile, profile_key)),
            "search-log.md": generated_search_log(entry, profile),
        }
        for name, text in files.items():
            path = d / name
            if path.exists() and not is_generated_file(path):
                continue
            path.write_text(text)
    return profile_by_tag


def score_for(tag: str, fallback_profile: str) -> dict:
    path = EQUATIONS / tag / "score.yaml"
    if path.exists():
        data = parse_score(path)
    else:
        p = PROFILES[fallback_profile]
        data = {
            "cluster": fallback_profile,
            "history": p["history"],
            "structure": p["structure"],
            "interconnection": p["interconnection"],
            "confidence": p["confidence"],
        }
    data["cluster"] = data.get("cluster") or fallback_profile
    p = PROFILES.get(data["cluster"], PROFILES[fallback_profile])
    for key in ("history", "structure", "interconnection"):
        if data.get(key) is None:
            data[key] = p[key]
    data["confidence"] = data.get("confidence") or p["confidence"]
    return data


def table_rows(entries: list[dict], profile_by_tag: dict[str, str]) -> list[dict]:
    rows = []
    for e in entries:
        score = score_for(e["tag"], profile_by_tag[e["tag"]])
        profile_key = score["cluster"]
        profile = PROFILES.get(profile_key, PROFILES[profile_by_tag[e["tag"]]])
        rows.append(
            {
                "tag": e["tag"],
                "status": e["statement_status"],
                "family": profile["display"],
                "mechanism": profile["mechanism"],
                "ranks": f"{score['history']}/{score['structure']}/{score['interconnection']}",
                "confidence": score["confidence"],
                "cluster": profile_key,
            }
        )
    return rows


def render_summary(entries: list[dict], profile_by_tag: dict[str, str]) -> str:
    rows = table_rows(entries, profile_by_tag)
    counts = Counter(r["cluster"] for r in rows)
    cluster_lines = []
    for key in SUMMARY_PROFILE_ORDER:
        if key not in counts:
            continue
        p = PROFILES[key]
        cluster_lines.append(
            f"{tex_escape(p['display'])} & {counts[key]} & {tex_escape(p['mechanism'])} & "
            f"{p['history']}/{p['structure']}/{p['interconnection']} \\\\\n"
        )

    chunks = []
    chunk_size = 24
    for start in range(0, len(rows), chunk_size):
        chunk = rows[start : start + chunk_size]
        label = f"{chunk[0]['tag']}--{chunk[-1]['tag']}"
        body = []
        for r in chunk:
            body.append(
                f"\\LECLink{{{r['tag']}}} & {tex_escape(r['status'])} & "
                f"{tex_escape(r['family'])} & {tex_escape(r['mechanism'])} & "
                f"{r['ranks']} & {tex_escape(r['confidence'])} \\\\\n"
            )
        chunks.append(
            "\\subsection*{"
            + label
            + "}\n"
            + "\\begin{center}\n"
            + "\\begin{tabular}{@{}p{0.11\\textwidth}p{0.10\\textwidth}p{0.22\\textwidth}p{0.33\\textwidth}p{0.08\\textwidth}p{0.10\\textwidth}@{}}\n"
            + "\\toprule\n"
            + "LEC & Type & Research family & Mechanism & H/S/I & Conf. \\\\\n"
            + "\\midrule\n"
            + "".join(body)
            + "\\bottomrule\n"
            + "\\end{tabular}\n"
            + "\\end{center}\n"
        )

    return (
        "\\section*{Deep-dive summary tables}\n\n"
        "Ranks are listed as \\(H/S/I\\), for history, structure, and interconnection. "
        "Rank \\(1\\) is strongest and rank \\(5\\) is weakest. "
        "These tables summarise the current full-pass research layer; low-confidence rows should be treated as search targets rather than final mathematical judgements.\n\n"
        "\\providecommand{\\LECLink}[1]{\\hyperlink{eq:#1}{\\texttt{#1}}}\n\n"
        "\\begingroup\n"
        "\\scriptsize\n"
        "\\renewcommand{\\arraystretch}{1.05}\n"
        "\\setlength{\\tabcolsep}{3pt}\n\n"
        "\\subsection*{Coverage by research family}\n"
        "\\begin{center}\n"
        "\\begin{tabular}{@{}p{0.26\\textwidth}p{0.08\\textwidth}p{0.44\\textwidth}p{0.12\\textwidth}@{}}\n"
        "\\toprule\n"
        "Research family & Count & Mechanism & H/S/I \\\\\n"
        "\\midrule\n"
        + "".join(cluster_lines)
        + "\\bottomrule\n"
        "\\end{tabular}\n"
        "\\end{center}\n\n"
        "\\subsection*{Full deep-dive index}\n\n"
        + "\n".join(chunks)
        + "\\endgroup\n"
    )


def render_coverage(entries: list[dict], profile_by_tag: dict[str, str]) -> str:
    rows = table_rows(entries, profile_by_tag)
    counts = Counter(r["cluster"] for r in rows)
    missing = [e["tag"] for e in entries if not (EQUATIONS / e["tag"] / "score.yaml").exists()]
    lines = [
        "# Full Deep-Dive Coverage",
        "",
        f"Entries in `content.tex`: {len(entries)}.",
        f"Entries with score files: {len(entries) - len(missing)}.",
        "",
        "This is a full-pass coverage layer. Generated records are conservative and cluster-level; hand-written records retain their existing evidence.",
        "",
        "## Coverage By Family",
        "",
    ]
    for key in SUMMARY_PROFILE_ORDER:
        if key in counts:
            lines.append(f"- `{key}`: {counts[key]}")
    lines.extend(["", "## Remaining Missing Score Files", ""])
    if missing:
        lines.extend(f"- {tag}" for tag in missing)
    else:
        lines.append("None.")
    return "\n".join(lines) + "\n"


def main() -> None:
    triage = json.loads(TRIAGE.read_text())
    entries = triage["entries"]
    profile_by_tag = make_equation_files(entries)
    SUMMARY.write_text(render_summary(entries, profile_by_tag))
    COVERAGE.write_text(render_coverage(entries, profile_by_tag))
    print(f"covered {len(entries)} entries")
    print(f"wrote {SUMMARY.relative_to(ROOT)}")
    print(f"wrote {COVERAGE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
