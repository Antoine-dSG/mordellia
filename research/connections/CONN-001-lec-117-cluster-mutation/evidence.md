# Evidence

## Dictionary

| Mordell | Modern |
| --- | --- |
| \(x^2+y^2+1=xyz\) | extremal MS surface \(Y_{2,2}\) |
| positive integer point | frieze of the rank-two cluster algebra |
| positive case \(z=3\) | affine rank-two specialization |
| replacing one term by the other root | cluster mutation |
| \(1,1,2,5,13,\ldots\) | all-ones specialization of cluster variables |
| infinitely many positive solutions | infinite cluster/frieze set for \(mn=4\) |

## Proof Sketch

The MS-surface manuscript gives the structural statement:
\[
    Y_{m,n}(\mathbb Z_{>0})
    \longleftrightarrow
    \operatorname{Frieze}(\mathcal A_{m,n}),
\]
where \(\mathcal A_{m,n}\) is the rank-two cluster algebra with mutation
matrix
\[
    \begin{pmatrix}0&m\\-n&0\end{pmatrix}.
\]
For the extremal surface \(Y_{m,n}=(xyz=x^m+y^n+1)\), this set is finite if
and only if \(mn\le3\). The equation `LEC-117` is \(Y_{2,2}\), so \(mn=4\).
This places Mordell's example exactly on the affine/infinite boundary.

Start with the rank-two recurrence
\[
    X_{n-1}X_{n+1}=X_n^2+1,\qquad X_0=X_1=1.
\]
It gives
\[
    1,1,2,5,13,34,\ldots.
\]
The first three terms satisfy
\[
    X_0^2+X_1^2+1=3X_0X_1.
\]
If a consecutive pair \((X_{n-1},X_n)\) satisfies
\[
    X_{n-1}^2+X_n^2+1=3X_{n-1}X_n,
\]
then the complementary-root transformation gives
\[
    X_{n+1}=3X_n-X_{n-1}.
\]
This is equivalent to
\[
    X_{n-1}X_{n+1}=X_n^2+1.
\]
Thus each consecutive pair gives a positive solution of
\[
    x^2+y^2+1=3xy,
\]
hence of `LEC-117`.

The associated rank-two exchange matrix has \(mn=4\), so the cluster algebra is
outside finite type. Therefore the mutation/frieze set is infinite. This
explains why Mordell's root-replacement process produces infinitely many
positive solutions rather than a finite orbit.

## Computation

The all-ones mutation sequence begins:

\[
    1,1,2,5,13,34,89.
\]

The consecutive pairs
\[
    (1,1),(1,2),(2,5),(5,13),(13,34)
\]
all satisfy \(x^2+y^2+1=3xy\).

## Failure Modes

This dossier concerns Mordell's positive branch and method. It does not claim
that every variant of \(x^2+y^2+c=xyz\) is an ordinary cluster algebra.
