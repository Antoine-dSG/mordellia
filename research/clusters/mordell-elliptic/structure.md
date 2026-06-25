# Structure

For \(k\ne0\), the curve
\[
    E_k:\quad y^2=x^3+k
\]
is a \(j=0\) elliptic curve. Over \(\overline{\mathbf Q}\) these curves are isomorphic after scaling, and over \(\mathbf Q\) the sixth-power-free part of \(k\) controls the twist class: replacing \(x=u^2X\), \(y=u^3Y\) changes \(k\) by a sixth power. Thus Mordell's reduction to sixth-power-free \(k\) is structural, not cosmetic.

The qualitative behaviour splits by the arithmetic question.

Rational points:

\[
    E_k(\mathbf Q)\simeq E_k(\mathbf Q)_{\mathrm{tors}}\oplus \mathbf Z^r.
\]

The rank \(r\) determines whether there are infinitely many rational points. `LEC-060` gives finite generation. `LEC-190` gives the BSD prediction for \(r\) from the analytic side. Fueter's theorem for `LEC-066` is a concrete \(j=0\) instance: except for torsion-type exceptional cases, one nonzero rational point forces infinitely many.

Integer points:

Integral points form a finite set. Mordell's proof route passes through binary cubic forms and Thue equations; modern computations still use this link. The direct structural package is:

\[
    \text{integral points on }E_k
    \longleftrightarrow
    \text{representations of }1\text{ by binary cubic forms}
\]

with discriminant proportional to \(k\), up to normalization. This explains why integer solubility is finite but computationally hard.

Non-solubility:

Mordell's no-solution criteria for special \(k\) are descent obstructions expressed through quadratic/cubic fields, class numbers, units, and congruences. The repeated appearance of congruence conditions mod \(9\), fundamental units, and class-number divisibility by \(3\) is explained by the \(j=0\) cubic-twist structure and the natural \(3\)-descent.

Analytic structure:

The \(j=0\) family has complex multiplication after base change. Mordell already points to Hecke \(L\)-series in related cubic examples. This makes the cluster a natural bridge between elementary descent, explicit computation, and analytic rank.

No originality claim is made at this stage. The strong candidate for deeper work is not "elliptic curves explain Mordell curves", which is known and visible, but the more refined obstruction graph: local obstruction, class-group \(3\)-torsion, binary cubic form class, Mordell--Weil rank, and BSD analytic signal may form a reusable template for other genus-one entries.

