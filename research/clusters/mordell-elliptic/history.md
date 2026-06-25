# History

Mordell's Chapter 9 presents the Bachet tangent construction for
\[
    y^2=x^3+k,
\]
including the classical case \(k=-2\). Chapter 16 proves the finite-basis theorem for rational points on a nonsingular plane cubic in Weierstrass form. Chapter 26 returns to the Mordell curve \(y^2=x^3+k\), separating integer solutions, rational solutions, and non-solubility criteria.

For integer solutions, Mordell records two main structural routes. One route uses quadratic and cubic fields, class numbers, and descent. The other uses the association with binary cubic forms and Thue equations. Mordell explicitly notes that this gives finiteness of integer solutions and that detailed computations for small \(k\) require substantial arithmetic input.

For rational solutions, Mordell records Fueter's theorem: if \(k\) is sixth-power-free and a rational solution \((p,q)\) with \(pq\ne0\) exists, then generally infinitely many rational solutions follow, with the exceptional cases \(k=-432\) and \(k=1\).

The modern literature confirms that Mordell's binary-cubic route remains central. Bennett--Ghadermarzi solve \(Y^2=X^3+k\) for all nonzero \(|k|\le 10^7\) using the classical connection with cubic Thue equations, linear forms in logarithms, and lattice reduction. Their introduction also identifies the historical chain from Bachet, Mordell, Thue, Baker, Gebel--Petho--Zimmer, Cassels, Selmer, and Birch--Swinnerton-Dyer.

The rank side is represented by `LEC-060` and `LEC-190`. Mordell's finite-basis theorem gives finite generation of \(E(\mathbf Q)\). Birch--Swinnerton-Dyer predicts the rank from the behaviour at \(s=1\) of the curve's \(L\)-function; Mordell states this in the older reciprocal-zeta-function language. The Clay Mathematics Institute summary describes BSD as relating rational points on an elliptic curve to the zeta-function near \(s=1\).

Recent work adds three useful modern directions for this project:

- explicit Mordell--Weil structure in infinite families of Mordell curves;
- density and distribution questions for integral points on cubic twists;
- formalized class-group computations for concrete Mordell equations in Lean.

Conclusion: historically this is a rank-1 history target for integer-point and finite-generation questions, and a rank-2/5 mixed target for BSD, depending on whether one treats BSD as a known general framework or as an unsolved problem.

