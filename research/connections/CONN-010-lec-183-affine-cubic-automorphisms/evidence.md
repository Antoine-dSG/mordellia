# Evidence

## Dictionary

| Mordell | Modern |
| --- | --- |
| \(xy\mid G(x,y)\) | integral point on \(xyz=G(x,y)\) |
| successive variable-modulus congruences | regular maps between companion cubic surfaces |
| recursive chain \(x_1,x_2,x_3,\ldots\) | orbit in the companion-surface groupoid |
| one full recurrence cycle | infinite-order surface automorphism |
| unbounded chain | infinite integral orbit |

## Direct Check

The congruence and surface formulations are equivalent:
\[
    G(x,y)\equiv0\pmod{xy}
    \quad\Longleftrightarrow\quad
    z=\frac{G(x,y)}{xy}\in\mathbb Z.
\]
Thus any integral transformation preserving the cubic equation preserves the
divisibility condition, and an infinite orbit yields infinitely many
solutions of Mordell's congruence.

Kollar--Villalobos-Paz prove that the relevant companion maps are regular
isomorphisms over the coefficient ring and that their composite has infinite
order.  Kollar--Li show that, in every cubic coefficient case, an integral
seed can be chosen whose orbit is infinite.  This upgrades Mordell's example
and Schinzel's partial completion to a geometric theorem for the full cubic
family.

## Further Test

Mordell's exponent sequences
\[
    0,1,3,8,21,\ldots,
    \qquad
    1,2,5,13,34,\ldots
\]
have Fibonacci growth.  The modern automorphism generators also have
Fibonacci-scale degree growth.  A termwise identification of Mordell's
exponent recursion with the pullback action on a compactification remains a
promising calculation; it is not asserted here.

## Limitation

The theorem gives infinitely many signed integral points.  Positivity is a
separate problem, and not every higher-degree \(G(x,y)\) has the same
automorphism behavior.
