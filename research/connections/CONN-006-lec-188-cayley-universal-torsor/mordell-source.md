# Mordell Source

## Location

- Mordell, `Diophantine Equations`, pp. 287--289.
- LEC tag: `LEC-188`.
- Blueprint statement:
  `blueprint/src/equations/LEC-188/LEC-188.tex`.

## Atoms

Mordell first writes the two sufficient identities
\[
    a+n(b+c)=4abcd,
    \qquad
    na+b+c=4abcd,
\]
which give, respectively,
\[
    (x,y,z)=(bcdn,acd,abd)
\]
and
\[
    (x,y,z)=(bcd,nabd,nacd).
\]

For a prime \(p>3\), Mordell then proves that every solution falls into one
of two cases: exactly one denominator is divisible by \(p\), or exactly two
denominators are divisible by \(p\).  Theorem 1 on p. 289 gives the converse
parametrisations, with pairwise coprimality conditions on \(a,b,c\).

## Normal Forms

- Unit fractions:
  \[
      4/n=1/x+1/y+1/z.
  \]
- Affine cubic:
  \[
      4xyz=n(xy+xz+yz).
  \]
- Cayley cubic point:
  \[
      (-n,4x,4y,4z),
      \qquad \sum_{i=0}^3 X_i^{-1}=0.
  \]
