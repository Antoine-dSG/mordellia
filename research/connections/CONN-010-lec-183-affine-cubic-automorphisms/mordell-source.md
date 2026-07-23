# Mordell Source

## Location

- Mordell, `Diophantine Equations`, pp. 293--295.
- LEC tag: `LEC-183`.
- Mordell's original paper: Acta Math. 88 (1952), 77--83.

## Atoms

For coprime \(x,y\), Mordell rewrites
\[
    g(x)+h(y)+c=zxy
\]
as
\[
    g(x)+h(y)+c\equiv0\pmod{xy},
\]
or as the pair of variable-modulus congruences
\[
    g(x)+c\equiv0\pmod y,
    \qquad
    h(y)+c\equiv0\pmod x.
\]

For
\[
    ax_1^3+bx_2^3+c\equiv0\pmod{x_1x_2},
\]
he constructs a recursive sequence \(x_1,x_2,x_3,\ldots\) satisfying
successive congruences.  This produces infinitely many integral points on
\[
    xyz=ax^3+by^3+c.
\]
The exponents in his polynomial solutions follow shifted sequences of
alternate Fibonacci numbers.

## Modern Reading

The variables \((x,y,z)\) are coordinates on one affine cubic surface. The
successive congruence transformations are integral birational formulas that
become regular isomorphisms between companion surfaces.  A full circuit in
the companion diagram returns to the original surface and gives an
infinite-order automorphism.
