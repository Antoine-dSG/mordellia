# Mordellia Connection Layer

This directory records relations between Mordell atoms and modern mathematical
objects, methods, theorems, or structures.

A Mordell atom is any equation, transformation, recurrence, descent argument,
parametrisation, obstruction, or structural statement in Mordell's book. This is
deliberately broader than the displayed LEC equations.

The aim is to find distant connections. Obvious identifications are useful as
anchors, but they are not treated as discoveries.

The focused corpus audit for variable-modulus and denominator problems is
recorded in `divisibility-pass.md`.

## Dossiers

Each connection dossier lives in `CONN-*/` and contains:

- `claim.md`: precise mathematical claim.
- `mordell-source.md`: exact Mordell location and atom.
- `literature.md`: modern object and references.
- `evidence.md`: dictionary, proof sketch, computation, or obstruction.
- `score.yaml`: JSON-compatible YAML score.
- `search-log.md`: positive and negative searches.

## Distance Scores

Use the connection distance scale in `research/ranking.md`.

- `D1`: same named object or theorem.
- `D2`: same general theory after standard normalization.
- `D3`: same mechanism in different language.
- `D4`: known structure from another area explains Mordell's method.
- `D5`: candidate original structure after negative search.

## Current Seed Dossiers

- `CONN-001-lec-117-cluster-mutation`: calibration example; Mordell's
  positive-solution recurrence for `LEC-117` is the \((m,n)=(2,2)\) extremal
  Mordell--Schinzel surface case of the rank-two cluster/frieze
  correspondence.
- `CONN-002-markoff-vieta-character-variety`: Markoff-Hurwitz/Vieta mutation
  anchor for the symmetric Markoff-type equations.
- `CONN-003-lec-183-lp-algebra-envelope`: candidate LP-algebra envelope for
  Mordell's general exchange-polynomial equation.
- `CONN-004-quadratic-root-replacement`: Mordell's quadratic root-replacement
  method as a mutation engine behind several examples.
- `CONN-005-ms-surfaces-generalized-cluster-friezes`: the broader
  Mordell--Schinzel surface/frieze correspondence behind the calibration
  example.
- `CONN-006-lec-188-cayley-universal-torsor`: Mordell's two divisibility
  parametrisations for the Erdos--Straus equation as universal-torsor charts
  on Cayley's cubic surface.
- `CONN-007-lec-188-brauer-manin`: the transcendental Brauer class of the
  Erdos--Straus log K3 surface as the conceptual source of reciprocity
  restrictions and failure of strong approximation.
- `CONN-008-lec-026-hurwitz-mock-modular`: Mordell's weighted count for
  \(xy+yz+zx=d\), and the three-square count, as coefficients of Zagier's
  weight-\(3/2\) class-number mock modular form.
- `CONN-009-lec-026-idoneal-class-groups`: strict-positive nonrepresentation
  for \(xy+yz+zx=d\) as an exponent-two imaginary quadratic class-group
  condition.
- `CONN-010-lec-183-affine-cubic-automorphisms`: Mordell's cubic
  variable-modulus recurrence as an orbit of an infinite-order automorphism
  of an affine cubic surface.

## Maintenance

Regenerate the index and graph after editing a connection score:

```bash
python3 research/scripts/build_connection_index.py --write
python3 research/scripts/validate_connections.py
```
