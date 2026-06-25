# Mordellia Research Layer

This directory contains the research workflow for the equation survey.

Core files:

- `ranking.md`: ordinal ranking definitions for history, structure, and interconnection.
- `protocol.md`: research workflow, guardrails, and deep-dive criteria.
- `equation-triage.yaml`: generated provisional triage data for all displayed LEC entries.
- `triage-summary.md`: human-readable summary of the first triage pass.
- `scripts/generate_triage.py`: regenerates `equation-triage.yaml` from `blueprint/src/content.tex`.
- `templates/score.yaml`: per-equation score template.
- `templates/search-log.md`: per-equation search log template.
- `equations/LEC-xxx/`: per-equation deep-dive notes, scores, and search logs.

Deep dives:

- `clusters/markoff-mutation/`: Markoff/Vieta mutation cluster.
- `clusters/mordell-elliptic/`: Mordell curves, Mordell-Weil, integral points, and BSD cluster.
- `clusters/binary-forms-thue/`: binary forms, congruence obstructions, and Thue finiteness.
- `clusters/quartic-genus-one/`: binary quartics, genus-one models, and quartic Pell equations.
- `clusters/norm-equations/`: Gaussian and higher-degree norm-form equations.
- `clusters/cubic-diagonal-sums/`: diagonal/Hesse cubics, sums of cubes, and four-cubes material.
- `clusters/quartic-surfaces-obstructions/`: quartic surfaces, local obstruction, and diagonal quartic point propagation.
- `clusters/classical-conjectures/`: Erdos--Straus and Catalan/Mihailescu bookkeeping cluster.

Graphs:

- `graph/markoff-mutation.json`
- `graph/mordell-elliptic.json`
- `graph/binary-forms-thue.json`
- `graph/quartic-genus-one.json`
- `graph/norm-equations.json`
- `graph/cubic-diagonal-sums.json`
- `graph/quartic-surfaces-obstructions.json`
- `graph/classical-conjectures.json`

Regenerate triage after changing `content.tex` or statement/comment status:

```bash
python3 research/scripts/generate_triage.py
```
