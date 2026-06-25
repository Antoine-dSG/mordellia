# Structure

The local layer is common: cubes modulo \(9\) are \(0,\pm1\). This gives the obstruction \(n\equiv\pm4\pmod9\) for `LEC-100`, and the same residue arithmetic explains why `LEC-114` is naturally split into the \(n\equiv\pm4\pmod9\) residue classes and their complement.

The elliptic layer is stronger. The affine curve
\[
    x^3+y^3=k
\]
is a \(j=0\) elliptic curve when \(k\ne0\). This controls `LEC-041` after dehomogenising by \(z\), and it is also the natural environment for the two-cube pieces behind `LEC-108` and `LEC-109`. The factorization
\[
    x^3+y^3=(x+y)(x+\rho y)(x+\rho^2y)
\]
over \(\mathbf Q(\rho)\) is the descent mechanism visible in Mordell's formulation.

The Hesse layer controls `LEC-043`. The family
\[
    X^3+Y^3+Z^3+\lambda XYZ=0
\]
is a Hesse pencil of plane cubics. Away from singular parameters, each member is an elliptic curve with the chord-tangent group law. Mordell's alternatives between no rational points, finitely many special rational points, and infinitely many points are consequences of genus-one geometry plus the existence or non-existence of a rational base point.

The additive layer for `LEC-100` and `LEC-114` is weaker. Known congruences and identities explain many positive cases and all obvious negative cases, but they do not yet determine the qualitative answer in the way the elliptic/descent structure does for the two-cube and Hesse entries.

Structure ranks:

- rank 3 for `LEC-041`, `LEC-043`, `LEC-108`, `LEC-109`: known and visibly related structures determine the stated behavior.
- rank 5 for `LEC-100` and `LEC-114`: no determining structure for the full qualitative problem is known here.

