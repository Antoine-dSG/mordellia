# Evidence

## Dictionary

| Mordell | Modern |
| --- | --- |
| \(4xyz=n(xy+xz+yz)\) | singular affine log K3 surface \(U_n\) |
| Legendre--Jacobi/Kronecker character | local invariant of a quaternion Brauer class |
| reciprocity across primes dividing \(n\) | Brauer reciprocity for adelic points |
| restrictions on positive solutions | Brauer--Manin obstruction to strong approximation |
| positive versus signed solutions | two real connected components with opposite invariants |

## Exact Structural Result

Bright--Loughran prove
\[
    \operatorname{Br}U_n/\operatorname{Br}\mathbb Q
    =\langle\alpha\rangle\cong\mathbb Z/2\mathbb Z,
    \qquad
    \alpha=\left(-\frac{x}{z},-\frac{y}{z}\right).
\]
For an odd \(n\) and a positive integral point,
\[
    \prod_{p\mid n}\operatorname{inv}_p\alpha(x,y,z)=-1.
\]
When \(n=p\) is an odd prime, two coordinates have \(p\)-adic unit ratio and
the corresponding ratio has a prescribed quadratic non-residue sign.  This
is the conceptual form of the quadratic-reciprocity restrictions in Mordell,
pp. 289--290.

## Cross-Equation Test

The equations
\[
    4xyz=n(xy+xz+yz)
\]
and
\[
    x^2+y^2+z^2-xyz=m
\]
are not similar under Mordell's presentation.  Nevertheless both define
affine cubic log K3 surfaces, and in both cases the Brauer group detects
failures of integral strong approximation.  This is an interconnection of
different-looking equations through the same arithmetic-geometric mechanism.

## Limitation

The Brauer--Manin set in the positive component is non-empty for every \(n\).
Consequently the Brauer class cannot by itself prove or disprove the
Erdos--Straus conjecture.  It determines distributional restrictions, not
existence in every fibre.
