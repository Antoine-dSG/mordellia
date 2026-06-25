# Structure

The cluster has two main structures.

First, a smooth curve
\[
    z^2=F(x,y)
\]
with \(F\) a squarefree binary quartic is a genus-one curve. If it has a rational point, it is birational to an elliptic curve. Its binary quartic invariants determine the associated Weierstrass model. This is the structure behind `LEC-135`, `LEC-136`, and part of `LEC-145`.

Second, equations such as
\[
    x^4-Dy^4=\pm1,\qquad y^2=Dx^4\pm1
\]
embed into Pell equations in quadratic fields:
\[
    x^2+y^2\sqrt D \in \mathcal O_{\mathbf Q(\sqrt D)}^\times.
\]
Fundamental units and norm signs then determine severe restrictions on solutions. This is the structure behind `LEC-129`, `LEC-130`, and `LEC-140`.

The important distinction for the project is:

- rational quartic questions are usually genus-one/torsor/Mordell-Weil questions;
- integral quartic questions are often Thue, Pell-unit, or elliptic-logarithm questions;
- quartic obstructions can be local, unit-theoretic, or Selmer-theoretic.

This cluster should be used as the bridge between the Mordell/elliptic cluster and the binary forms/Thue cluster.

