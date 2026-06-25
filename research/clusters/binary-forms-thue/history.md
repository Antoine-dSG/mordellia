# History

Mordell treats binary forms in two roles. First, binary cubics provide explicit local obstructions, especially modulo \(9\), for equations of the form
\[
    ax^3+3bx^2y+3cxy^2+dy^3=z^3
\]
and the corresponding congruence with right-hand side \(1\). Second, irreducible binary forms of degree at least \(3\) give Thue equations
\[
    F(x,y)=m,
\]
which have only finitely many integer solutions.

`LEC-162` is the general theorem; `LEC-050` is the binary cubic case; `LEC-037`, `LEC-038`, and `LEC-051` are concrete cubic/congruence instances.

The modern computational route remains close to Mordell's. Bennett--Ghadermarzi use the classical connection between Mordell equations and cubic Thue equations, together with lower bounds for linear forms in logarithms and lattice reduction, to solve \(Y^2=X^3+k\) for all nonzero \(|k|\le 10^7\). This confirms that Mordell's binary-cubic layer is not historical residue; it is still an effective computational engine.

Conclusion: this is a rank-1 history target. The general problem has a classical solution for finiteness, and modern algorithms give effective solutions in many cases. It is not, by itself, a likely source of a new structure claim; its value is as a reusable finiteness and obstruction module.

