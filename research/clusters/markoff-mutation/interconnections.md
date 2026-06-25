# Interconnections

## Main Connection

The main interconnection is:

\[
    \text{Vieta involution}
    \quad\leftrightarrow\quad
    \text{mutation}
    \quad\leftrightarrow\quad
    \text{integrality of an exchange relation}.
\]

This connects equations that look different:

- `LEC-096` is a symmetric affine cubic surface.
- `LEC-117` and `LEC-118` are asymmetric equations linear in \(z\).
- `LEC-183` is a general divisibility/exchange relation.

The shared arithmetic feature is that solutions are not isolated accidents: once an integral seed is found, the equation often carries an operation that produces further integral solutions.

## Direct Containments

`LEC-117` is contained in `LEC-183` by
\[
    g(x)=x^2,\qquad h(y)=y^2,\qquad c=1.
\]

`LEC-118` is contained in `LEC-183` by
\[
    g(x)=x^2\pm x,\qquad h(y)=y^2\pm y,\qquad c=1,
\]
with the signs chosen as in the equation.

`LEC-096` is not literally contained in `LEC-183`, because it has a symmetric \(z^2\) term. It is connected by the same mutation principle: replacing a coordinate by the other root of the equation in that coordinate.

## Larger Families

1. Markoff-Hurwitz:
\[
    x_1^2+\cdots+x_n^2=ax_1\cdots x_n+k.
\]
This contains `LEC-096` after normalization and explains the symmetric mutation group.

2. Barnes/Mordell:
\[
    x^2+y^2+c=xyz
\]
and shifted variants. This contains `LEC-117` and `LEC-118`.

3. Exchange-polynomial/Laurent-phenomenon family:
\[
    x_{new}x_{old}=P(\text{other variables}).
\]
This contains the arithmetic mechanism of `LEC-183` when the exchange value is integral.

## Interconnection Rank

Cluster rank: 1.

Reason: equations with different visible forms have arithmetic behavior governed by the same operation: mutation by replacing one variable with the complementary root or exchange value.

Per entry:

- `LEC-096`: rank 1 connection to `LEC-117`, `LEC-118`, `LEC-183` by mutation.
- `LEC-117`: rank 2, directly part of the larger `LEC-183` family and mutation-connected to `LEC-096`.
- `LEC-118`: rank 2, same as `LEC-117`.
- `LEC-183`: rank 1, because it is the envelope making the asymmetric equations visibly part of an exchange family and points back to the Markoff-Hurwitz mutation principle.

