# Structure

The governing structure is Diophantine approximation to algebraic numbers. For an irreducible binary form \(F(x,y)\) of degree \(n\ge3\), a large solution to
\[
    F(x,y)=m
\]
would give an exceptional rational approximation to a root of \(F(t,1)\). Thue's theorem rules out infinitely many such approximations, giving finiteness of integer solutions.

For binary cubics, this finiteness interacts with reduction theory of forms, discriminants, and congruence obstructions. Mordell's mod \(9\) conditions in `LEC-038` and `LEC-051` are not instances of Thue finiteness; they are local obstructions that can rule out solutions before the global finiteness problem starts.

The structural decomposition is therefore:

- local layer: congruences modulo \(9\), cubic residues, and descent-type filters;
- global layer: irreducibility of \(F\), Diophantine approximation, and Thue finiteness;
- effective layer: Baker-type lower bounds, \(p\)-adic methods, and lattice reduction;
- form-theoretic layer: discriminants, equivalence classes of binary forms, and reduction theory.

For this project, the actionable insight is that every equation reducible to a binary form should be classified twice: by its local obstruction pattern and by the global Thue form it produces.

