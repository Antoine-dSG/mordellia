# Divisibility Connection Pass

## Scope

This pass distinguishes variable-modulus and variable-denominator equations
from ordinary fixed-modulus congruence obstructions.

| LEC | Divisibility atom | Outcome |
| --- | --- | --- |
| `LEC-188` | the denominators in \(4/n=1/x+1/y+1/z\) and Mordell's Type I/II factorizations | promoted in `CONN-006` and `CONN-007`: universal-torsor charts and a Brauer--Manin obstruction |
| `LEC-026` | \((x+z)(y+z)=d+z^2\), obtained from \(xy+yz+zx=d\) | promoted in `CONN-008` and `CONN-009`: Hurwitz coefficients and idoneal class groups |
| `LEC-183` | \(xy\mid G(x,y)\), equivalently \(xyz=G(x,y)\) | promoted in `CONN-010`: integral orbits of affine-cubic companion maps and infinite-order automorphisms |
| `LEC-024` | no variable modulus; linked through its representation count | connected to `LEC-026` in `CONN-008` through the common coefficient system \(H(4d)\) |
| `LEC-001` | \(\gcd(a_1,\ldots,a_n)\mid a\) | not promoted: the lattice/Smith-normal-form interpretation is exact but distance `D1` |
| `LEC-103` | the coefficient hypothesis \(p\mid(\ell,m)\) inside a cubic construction | not promoted: this is an integrality hypothesis in an auxiliary construction, not a determining divisibility structure |

## Candidate Retained

The linear specialization of `LEC-183`,
\[
    ax+by+c=zxy,
\]
admits the factorization
\[
    (zx-b)(zy-a)=cz+ab.
\]
This resembles an integral model of a Danielewski-type surface, but no
qualitative arithmetic consequence has yet been proved from that
identification. It remains in the backlog rather than being assigned a
connection score.

## Excluded Hits

Entries whose only divisibility content is a congruence modulo a fixed
constant were not promoted. Their determining structure is a local
obstruction, and calling them divisibility connections would not add a
distant modern explanation.
