# Mordell Source

## Location

- Mordell, `Diophantine Equations`, p. 299.
- LEC tag: `LEC-117`.
- Blueprint statement:
  `blueprint/src/equations/LEC-117/LEC-117.tex`.

## Atom

As an equation, `LEC-117` is the positive Mordell--Schinzel surface
\[
    Y_{2,2}=(xyz=x^2+y^2+1).
\]

Mordell applies the sequence method developed for quadratic rational equations
linear in one unknown. In the special case
\[
    x^2+y^2+1=xyz,
\]
he orders a positive sequence \(u_0,u_1,u_2,\ldots\), chooses \(u_1\) minimal,
and obtains
\[
    u_1=1,\qquad u_0u_2=2,\qquad z=3.
\]
The resulting sequence is
\[
    \ldots,5,2,1,1,2,5,13,\ldots,
\]
so \(x,y\) are consecutive alternate Fibonacci terms.

## Normal Forms

- \(x^2+y^2+1=xyz\).
- \(Y_{2,2}=(xyz=x^2+y^2+1)\).
- For the positive sequence: \(x^2+y^2+1=3xy\).
- Exchange recurrence:
  \[
      X_{n-1}X_{n+1}=X_n^2+1.
  \]
- Linear recurrence along the positive branch:
  \[
      X_{n+1}=3X_n-X_{n-1}.
  \]
