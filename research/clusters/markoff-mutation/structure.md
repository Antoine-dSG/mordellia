# Structure

## Core Mechanism

The shared mechanism is mutation by replacing a variable with the other root of the same equation, viewed as a polynomial in that variable.

For `LEC-096`,
\[
    x^2+y^2+z^2-axyz=b
\]
is quadratic in each variable. Fixing \(y,z\), the two roots in \(x\) have sum \(ayz\), hence
\[
    x\longmapsto ayz-x
\]
preserves the equation. Together with permutations and sign changes, these are Mordell's elementary operations. This is the Markoff-Hurwitz/Vieta-involution structure.

For `LEC-117`,
\[
    x^2+y^2+1=xyz,
\]
fixing \(y,z\) gives
\[
    x\longmapsto yz-x.
\]
Thus integer solutions propagate by the same Vieta operation. Fixing \(z=3\) gives a second-order recurrence and produces the Fibonacci subsequence recorded by Mordell.

For `LEC-118`, the shifts
\[
    x^2+y^2\pm x\pm y+1=xyz
\]
again give integral Vieta moves in \(x,y\). The signs modify the recurrence but do not change the mutation principle.

For `LEC-183`,
\[
    g(x)+h(y)+c=zxy
\]
is not usually quadratic in \(x\) or \(y\). The structural remnant is the exchange relation
\[
    z=\frac{g(x)+h(y)+c}{xy}
\]
and the equivalent congruence
\[
    g(x)+h(y)+c\equiv0\pmod{xy}.
\]
When \(g,h\) are quadratic or compatible with a recurrence, this becomes a genuine mutation/divisibility mechanism. In modern terms this is closer to a Laurent phenomenon algebra than to a classical binomial cluster algebra.

## Geometric Interpretation

If \(a\ne0\), `LEC-096` becomes, after scaling \(X=ax\), \(Y=ay\), \(Z=az\),
\[
    X^2+Y^2+Z^2-XYZ=a^2b.
\]
Over \(\mathbb Q\), this is a Markoff-type cubic surface. The special fiber
\[
    X^2+Y^2+Z^2-XYZ=2
\]
is the \(\mathrm{SL}_2\)-character variety of the once-punctured torus after fixing the boundary trace, up to the standard Fricke normalization. The Vieta involutions are mapping-class/cluster mutations in this model.

This character-variety interpretation is not needed for Mordell's elementary generation result, but it explains why the same polynomial transformations recur in modern literature: they are automorphisms of a cubic moduli surface.

## Structural Consequences

`LEC-096`:

- Fundamental solutions are representatives modulo the mutation group.
- Infinite families arise when mutation can increase height indefinitely.
- Exceptional finite behavior occurs when the mutation orbit degenerates.

`LEC-117` and `LEC-118`:

- Divisibility conditions ensure that the exchange value remains integral.
- Once a seed solution is found, mutation or recurrence propagates solutions.
- The observed Fibonacci-type sequences are rank-two mutation recurrences in elementary form.

`LEC-183`:

- Mordell's congruence criterion is the integrality condition for the exchange value.
- The family contains the asymmetric quadratic cases `LEC-117` and `LEC-118`.
- The correct modern envelope is likely LP-algebra/cluster-adjacent, not only ordinary cluster algebra.

## Structural Ranks

- `LEC-096`: structure rank 3. The Vieta/Markoff-Hurwitz structure is known and visibly related.
- `LEC-117`: structure rank 2. The recurrence is elementary in Mordell, but the exchange/mutation interpretation connects it to a broader structure not visible from the statement alone.
- `LEC-118`: structure rank 2. Same reason as `LEC-117`.
- `LEC-183`: structure rank 2, provisional. Laurent phenomenon algebras give a known but not visibly Diophantine framework for the exchange-polynomial structure. The full rank depends on proving that the LP structure determines the relevant arithmetic behavior in the chosen subfamilies.

No rank-1 claim is made at this stage.

