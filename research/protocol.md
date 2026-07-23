# Mordellia Research Protocol

Objective: for Mordell's equations, identify historical context, structural explanations, and interconnections. Depth is prioritized over breadth. The project is successful if one equation or cluster yields a new and interesting algebraic or geometric structure.

## Operating Principles

- Treat `content.tex` as the current source of displayed equations and LEC tags.
- Never change a LEC tag during research.
- Keep research artifacts outside `blueprint/src` unless they are meant to appear in the blueprint.
- Separate four claim types: Mordell statement, literature theorem, computation, speculation.
- Do not claim novelty without a negative literature search log.
- Prefer clusters over isolated equations when searching for structure.
- Record failed searches briefly; they reduce duplicated work.
- Treat a method, transformation, recurrence, parametrisation, obstruction, or
  structural statement as a first-class Mordell atom, not merely as supporting
  prose for an equation.
- Promote only stable connections to the blueprint. Keep speculative or
  low-confidence material in `research/connections/`.

## Per-Equation Research Files

For a deep-dive equation, create:

```text
blueprint/src/equations/LEC-xxx/
  metadata.yaml
  history.md
  structure.md
  interconnections.md
  score.yaml
  search-log.md
```

The existing statement/proof files remain the concise blueprint-facing layer. The research files may be longer and evidence-heavy.

## Research Workflow

1. Normalize the equation.
   - Identify variables, parameters, coefficient assumptions, and equivalent forms.
   - Record all normal forms tried.

2. Identify the modern object type.
   - Examples: linear equation, quadratic form, conic, Pell equation, genus-one curve, elliptic curve, hyperelliptic curve, Thue equation, norm equation, Markoff-type surface, cubic surface, Waring-type equation, local congruence problem.

3. Perform the literature search.
   - Search exact form.
   - Search normalized forms.
   - Search object type plus qualitative behavior.
   - Check Mordell's references.
   - Check modern references/databases when relevant.

4. Explain the qualitative behavior.
   - No solutions: local obstruction, descent, parity/congruence, class group, Brauer-Manin, etc.
   - Finite solutions: genus, Thue-Siegel, Mordell-Weil, Faltings, reduction theory.
   - Infinite solutions: parametrization, positive rank, group action, units, automorphisms, recurrence.
   - Conjectural behavior: state the conjectural mechanism separately.

5. Search for interconnections.
   - Same object under transformation.
   - Same descent.
   - Same local obstruction.
   - Same norm/unit/class-group mechanism.
   - Same curve, surface, Jacobian, cluster mutation, or group action.

6. Assign ranks.
   - Use `research/ranking.md`.
   - Mark confidence separately.
   - Record evidence before improving a rank.

## Connection Discovery Workflow

1. Extract Mordell atoms.
   - Record displayed equations, transformations, recurrences, descent steps,
     parametrisations, congruence sieves, factorisations, and root-replacement
     operations.
   - Attach each atom to LEC tags, page ranges, and statement files when
     available.

2. Assign structural signatures.
   - Examples: complementary-root involution, exchange relation, Laurent
     phenomenon, continued-fraction or unit recurrence, norm-form
     factorisation, torsor/descent, local-global obstruction,
     Brauer-Manin-looking obstruction, mutation graph, Coxeter/Weyl reflection,
     character variety, reduction theory, tropical or valuation dynamics.

3. Search from the modern structure backward.
   - Search for the signature and normal form, not only for Mordell's equation.
   - Use literature from cluster algebras, character varieties, Coxeter groups,
     arithmetic dynamics, toric geometry, descent, tori, and related structures
     when the signature points there.

4. Build a dictionary.
   - Map Mordell variables, operations, and qualitative statements to modern
     variables, mutations, theorems, and structural consequences.
   - Reject candidates where the modern structure is only aesthetic.

5. Add a connection dossier.
   - Use `research/connections/templates/`.
   - Record the distance score from `research/ranking.md`.
   - Add a graph edge only after the dictionary is written.

## Triage Strategy

Run broad triage only to select deep dives. Do not attempt equal-depth treatment of all equations.

High priority signals:

- Mordell treats many special cases of one form.
- The equation appears in several places.
- The statement involves exceptional congruence classes.
- Mordell says little is known, defers to references, or gives only examples.
- The equation is naturally a genus-one curve, elliptic curve, norm equation, Markoff-type equation, cubic surface, or Thue equation.
- Different-looking LEC entries share a visible invariant or method.

Low priority signals:

- Standard linear algebra or elementary parametrization explains the behavior.
- The equation is already a direct textbook instance of a classical theorem.
- The entry is a technical step with no independent arithmetic behavior.

## Deep-Dive Selection

Select 10-20 equations or clusters after triage. Prefer clusters with high structure/interconnection potential.

Initial likely clusters:

- Mordell curves and elliptic-curve forms.
- Markoff-type equations and mutation dynamics.
- Binary cubic forms and Thue equations.
- Quartic genus-one equations.
- Norm equations and units.
- Cubic surfaces and local-global failures.
- Waring-type sums of powers.
- Binomial and Catalan-type equations.

Initial connection targets:

- `LEC-117`, `LEC-118`, `LEC-183`: cluster mutation, Laurent phenomenon,
  exchange-polynomial structure.
- `LEC-096`, `LEC-094`, `LEC-098`: Markoff-Hurwitz surfaces, character
  varieties, Vieta mutation.
- Quartic genus-one entries: torsors and descent hidden behind quartic
  manipulations.
- Norm-equation entries: algebraic tori, unit lattices, and hidden group
  actions.
- Cubic and quartic surface entries: local-global and Brauer-Manin candidates.

## Output Standard

Each deep dive should end with:

- concise history summary;
- structural mechanism;
- interconnection graph entries;
- rank file with evidence;
- open questions and failed paths.
