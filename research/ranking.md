# Mordellia Research Ranking

Ranks are ordinal. Rank `1` is best. Do not average ranks. The project should optimize for isolated rank-1 or rank-2 findings, especially in structure and interconnection.

All ranks are provisional until supported by a search log and a written evidence section.

## History Rank

Rank the quality of the historical/literature identification.

1. The problem is correctly identified as a special case of a more general problem which has been solved.
2. The problem is correctly identified as an instance of a general problem, with other instances solved in the literature.
3. The problem is correctly identified as a generalisation of a problem solved in the literature.
4. Related-looking problems are found.
5. No other occurrence is identified in the literature.

Required evidence:

- exact search terms and normal forms tried;
- references checked;
- precise statement of the general problem, related problem, or failure mode;
- distinction between Mordell's statement and later literature.

## Structure Rank

Rank the quality of the structural explanation of the equation's qualitative arithmetic behavior.

1. A new original underlying mathematical structure is identified, not found in the literature, and it determines the nature of the answer.
2. A known but seemingly unrelated structure is identified, with reference, and it determines the nature of the answer.
3. A known and visibly related structure is identified, with reference, and it determines the qualitative nature of the answer.
4. The underlying structure is found directly in the literature.
5. No determining underlying structure is identified.

Rank 1 is not assigned directly. Use `candidate_original` until a negative literature search and a precise mathematical argument have been recorded.

Required evidence for rank 1:

- precise mathematical statement;
- proof or strong computational evidence;
- negative search log for nearby known structures;
- comparison with adjacent theories and normal forms;
- explicit reason the structure determines the qualitative behavior.

## Interconnection Rank

Rank the quality of the connection to other equations.

1. Equations which do not look alike have arithmetic properties stemming from the same idea.
2. Equations presented by Mordell as different are part of a larger family with common arithmetic properties.
3. The equation is a special case of a general form for which the same methods work.
4. Related-looking equations are found, but no common mechanism is established.
5. No meaningful interconnection is found.

Required evidence:

- list of connected LEC tags;
- shared mechanism or larger family;
- map between equations when available;
- reference or proof for the shared mechanism.

## Connection Distance

Connection distance ranks how non-obvious a relation is between a Mordell atom
and a modern object, theorem, method, or structure. It is independent of the
history, structure, and interconnection ranks above.

D1. Same named object or theorem, in essentially the same language. This is an
anchor, not a discovery.

D2. Same general theory, visible after a standard normalization.

D3. Same mechanism, but Mordell and the modern literature use different
language.

D4. A known structure from a different mathematical area explains Mordell's
method or qualitative conclusion.

D5. Candidate new structure, not found after a targeted negative literature
search.

Required evidence for D4:

- exact Mordell atom and source location;
- exact modern object or theorem;
- explicit dictionary between Mordell's variables or operations and the modern
  structure;
- explanation of the qualitative arithmetic behavior determined by the
  structure;
- reason the connection is not merely terminological.

D5 is never assigned directly. Use `candidate_original` until a negative search
log and a precise mathematical argument have been recorded.

## Evidence Status

Use these statuses independently of rank:

- `unsearched`: no literature search yet.
- `searched`: direct and normal-form searches done.
- `surveyed`: history summary written with references.
- `structurally_analyzed`: structural mechanism written and checked.
- `deep_dive`: equation or cluster selected for sustained work.
- `candidate`: plausible connection, not yet mapped.
- `mapped`: explicit dictionary between Mordell and modern language written.
- `tested`: examples, computations, or transformations checked.
- `referenced`: literature supports the modern side.
- `structural`: the connection explains qualitative arithmetic behavior.
- `candidate_original`: possible new structure; novelty not yet established.
- `rejected`: attractive but mathematically non-determining.
- `blocked`: missing source, computation, or reference access.

## Confidence

Use `low`, `medium`, or `high`.

- `low`: heuristic or partial search.
- `medium`: several searches and source checks agree.
- `high`: references or computations directly support the claim.
