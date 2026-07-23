# Search Log

## Equation

- LEC: `LEC-188`
- Normal forms: `4/n=1/x+1/y+1/z`; polynomial form \(4xyz=n(xy+xz+yz)\).
- Parameters: integer \(n>3\), positive integers \(x,y,z\).

## Mordell Source

- Pages: 287.
- Statement: Erdos--Straus conjecture.

## Searches Tried

| Query / normal form | Source | Result |
| --- | --- | --- |
| `Erdos Straus equation unit fractions Elsholtz Tao` | arXiv | Counting paper retained. |
| `Erdos Straus conjecture verified 10^17 Salez` | arXiv | Computational verification paper retained. |
| `Erdos Straus congruence classes polynomial identities` | arXiv | Recent congruence-system work found, not needed for first pass. |
| `Erdos Straus Cayley cubic universal torsor` | Primary literature | Elsholtz--Tao Remark 2.10 identifies the Type I/II factor coordinates with the universal-torsor classification of Cayley's cubic. |
| `Brauer Manin Erdos Straus surfaces` | arXiv / BLMS | Bright--Loughran compute the transcendental Brauer class and its obstruction to strong approximation. |
| `Markoff surface Brauer Manin strong approximation` | arXiv | A shared log-K3 obstruction mechanism with the Markoff subfamily of `LEC-096` was confirmed. |

## References Checked

| Reference | Relevant result | Outcome |
| --- | --- | --- |
| Elsholtz--Tao, https://arxiv.org/abs/1107.1010 | Defines \(f(n)\), notes it suffices to check prime \(n\), gives average bounds. | Retained. |
| Salez, https://arxiv.org/abs/1406.6307 | Modular equations and checking to \(10^{17}\). | Retained. |
| Heath-Brown, https://arxiv.org/abs/math/0210333 | Primitive points on Cayley's cubic via universal-torsor factor coordinates. | Retained structurally. |
| Bright--Loughran, https://arxiv.org/abs/1908.02526 | Brauer group and strong approximation for Erdos--Straus surfaces. | Retained structurally. |
| Colliot-Thelene--Wei--Xu, https://arxiv.org/abs/1808.01584 | Brauer--Manin obstruction for Markoff surfaces. | Retained as an interconnection. |

## Negative Search Notes

No structure found that forces a positive integral point for every \(n\). The
universal torsor controls parametrisation and counting; the Brauer class
controls distribution but gives no obstruction to existence.
