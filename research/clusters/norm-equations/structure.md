# Structure

The basic structure is:
\[
    \text{Diophantine equation}
    \quad\longrightarrow\quad
    \text{norm equation in a number field}.
\]

For `LEC-178`, the field is \(\mathbf Q(i)\):
\[
    x^2+y^2=N_{\mathbf Q(i)/\mathbf Q}(x+iy).
\]
When \((x,y)=1\), unique factorization forces \(x+iy\) to be a unit times an \(n\)-th power.

For `LEC-179` and `LEC-180`, the norm equation is higher-dimensional:
\[
    N_{K/\mathbf Q}(\alpha x+\beta y+\gamma z)=A
    \quad\text{or}\quad
    N_{K/\mathbf Q}(\alpha x+\beta y+\gamma z)=f(x,y,z).
\]
Finiteness depends on preventing the variables from moving along positive-rank unit orbits. Mordell's conditions involving the unit rank
\[
    r=r_1+r_2-1
\]
are exactly this issue.

The project-level insight is that norm-form equations create two opposite behaviours:

- parametrisation when the relevant ring has unique factorization and the right-hand side is a pure power;
- finiteness when the norm form and the unit rank leave too little room for infinite unit families.

This cluster should be connected to every equation whose proof uses Gaussian integers, quadratic fields, cubic fields, or fundamental units.

