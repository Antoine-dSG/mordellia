# Claim

## Precise Claim

Let
\[
    R(d)=\sum_{\substack{x,y,z\geq 0\\xy+yz+zx=d}}w(x,y,z),
    \qquad
    w(x,y,z)=
    \begin{cases}
      \tfrac12,&xyz=0,\\
      1,&xyz\neq0.
    \end{cases}
\]
Mordell proves that \(R(d)=3G(d)\), where \(G(d)\) is the weighted class
number of positive binary quadratic forms of determinant \(-d\). Such a form
\[
    AX^2+2BXY+CY^2
\]
has discriminant \(-4d\), and Mordell's exceptional weights are precisely the
Hurwitz weights.  Therefore
\[
    G(d)=H(4d),
    \qquad
    R(d)=3H(4d).
\]

The generating series
\[
    -\frac1{12}+\sum_{N\geq1}H(N)q^N
\]
is the holomorphic part of Zagier's weight-\(3/2\) harmonic Maass form. Thus
the weighted representation numbers for `LEC-026` form the \(4d\)-coefficient
subsequence of a canonical mock modular form.

The same coefficients control the three-square specialization of `LEC-024`.
For example, if \(d\equiv1,2\pmod4\), Gauss's formula gives
\[
    r_3(d)=12H(4d)=4R(d),
\]
where \(r_3(d)\) counts ordered signed representations by three squares.

## Mordell Atom

- Atom ids: `ATOM-LEC-026-WEIGHTED-REPRESENTATIONS`,
  `ATOM-LEC-024-THREE-SQUARES`.
- Type: weighted representation count / quadratic-form correspondence.
- LEC tags: `LEC-026`, `LEC-024`.
- Mordell pages: pp. 4, 175, 291--292.

## Modern Object

Hurwitz class numbers and Zagier's weight-\(3/2\) class-number mock modular
form.

## Qualitative Behavior Explained

One coefficient system simultaneously determines the exact weighted count for
`LEC-026` and the three-square representation count in `LEC-024`. This turns
two unlike-looking equations into different coefficient interpretations of
the same half-integral-weight modular object.
