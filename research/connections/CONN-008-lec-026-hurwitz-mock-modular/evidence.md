# Evidence

## Dictionary

| Mordell | Modern |
| --- | --- |
| determinant-\(-d\) form \(AX^2+2BXY+CY^2\) | discriminant-\(-4d\) quadratic form |
| weighted class number \(G(d)\) | Hurwitz class number \(H(4d)\) |
| weight \(1/2\) when \(xyz=0\) | stabilizer weight for an ambiguous form |
| \(3G(d)\) solutions of `LEC-026` | coefficient \(3H(4d)\) |
| three-square count in `LEC-024` | Gauss coefficient formula using the same \(H(N)\) |

## Direct Check

The determinant identity gives
\[
    B^2-AC=-d
    \quad\Longleftrightarrow\quad
    (2B)^2-4AC=-4d.
\]
The special forms \([a,0,a]\) and \([a,a,a]\) have the extra automorphisms
responsible for Hurwitz weights \(1/2\) and \(1/3\). Hence Mordell's definition
of \(G(d)\) is exactly \(H(4d)\), not merely proportional to it.

For \(d=1\), the three permutations of \((0,1,1)\) each have weight \(1/2\),
so \(R(1)=3/2\). Since \(H(4)=1/2\), this verifies
\(R(1)=3H(4)\). Also \(r_3(1)=6=12H(4)\).

## Arithmetic Consequence

Modular-form methods can now be applied simultaneously to averages,
congruences, and extreme values of both representation functions.  The
identity also supplies an interconnection-rank-1 edge between `LEC-026` and
`LEC-024`: their arithmetic counts stem from the same coefficient system.

## Limitation

Mock modularity organizes and constrains the counts.  By itself it does not
classify exactly when `LEC-026` has a strictly positive solution; that sharper
question is handled by `CONN-009`.
