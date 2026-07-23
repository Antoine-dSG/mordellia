# Evidence

## Dictionary

| Mordell | Modern |
| --- | --- |
| \(4xyz=n(xy+xz+yz)\) | affine Erdos--Straus surface \(U_n\) |
| projective homogenisation | Cayley's four-nodal cubic surface |
| prime solution \((p,x,y,z)\) | primitive point \((-p,4x,4y,4z)\) on the Cayley cubic |
| exactly one denominator divisible by \(p\) | Type I torsor chart |
| exactly two denominators divisible by \(p\) | Type II torsor chart |
| coprime factors \(a,b,c,d\) | universal-torsor factor coordinates |

## Direct Check

From
\[
    \frac4n=\frac1x+\frac1y+\frac1z
\]
one obtains
\[
    \frac1{-n}+\frac1{4x}+\frac1{4y}+\frac1{4z}=0.
\]
Thus \((-n,4x,4y,4z)\) lies on Cayley's reciprocal cubic.  Conversely, a
point of this form with positive last three coordinates gives an
Erdos--Straus solution.

Mordell's condition
\[
    a+n(b+c)=4abcd
\]
gives
\[
    \frac1{bcdn}+\frac1{acd}+\frac1{abd}
    =\frac{a+n(b+c)}{abcd n}=\frac4n.
\]
The second condition \(na+b+c=4abcd\) is checked identically.  Elsholtz--Tao
Propositions 2.2, 2.6, and Remark 2.10 identify the complete prime cases with
the Cayley universal-torsor classification and explicitly compare them with
Mordell's classification.

## Arithmetic Consequence

The torsor factorisation explains why divisor functions govern the number of
solutions.  Elsholtz--Tao obtain
\[
    N(\log N)^2
    \ll \sum_{p\le N} f(p)
    \ll N(\log N)^2\log\log N,
\]
while the unrestricted primitive-point problem on Cayley's cubic has order
\(B(\log B)^6\).  The discrepancy records the thin divisibility slices relevant
to prime denominators rather than a failure of the geometric dictionary.

## Limitation

Universal-torsor coordinates classify and count points; they do not by
themselves force a positive point in every integral model \(U_n\).
