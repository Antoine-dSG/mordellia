# The Poincaré–Birkhoff annulus theorem

## Annulus, lift and boundary twist

Let $A=(\mathbb R/2\pi\mathbb Z)\times[a,b]$ be a closed annulus, and let $F:A\to A$ be an orientation-preserving, area-preserving homeomorphism preserving each boundary component. Choose a lift $\widetilde F=(X,Y):\mathbb R\times[a,b]\to\mathbb R\times[a,b]$ with

$$\widetilde F(x+2\pi,y)=\widetilde F(x,y)+(2\pi,0).$$

Assume, for this single chosen lift,

$$X(x,a)-x>0,\qquad X(x,b)-x<0\qquad\text{for every }x.$$

**Poincaré–Birkhoff theorem (external theorem).** Under these hypotheses there are at least two distinct points modulo deck translation with $\widetilde F(x,y)=(x,y)$. Their projections are distinct fixed points of $F$.

The boundary signs refer to the same lift; choosing different full turns at the two boundaries would destroy the meaning of the condition. A fixed point of $F$ need not be fixed by an arbitrary lift. No monotonicity of $X$ in the interior radial variable is assumed in this theorem.

## What area contributes to Birkhoff’s construction

For a plane annulus with polar radius $r$, the change $x=\theta$, $y=r^2$ converts positive area $r\,dr\,d\theta$ to half the rectangular area density. Birkhoff perturbs the lifted map by $S_\varepsilon(x,y)=(x,y+\varepsilon)$ and iterates a narrow strip next to the lower boundary. As long as the construction remains in the domain, successive strata have equal positive area in a fundamental period. They cannot all remain disjoint inside the finite-area annulus.

That finite-area obstruction forces the constructed arc to reach the upper edge. The delicate part of the source proof is then topological: it controls the rotation of the nonzero displacement vector along this arc and transfers the result to other boundary-to-boundary paths. Applying the same construction to the inverse produces an incompatible rotation. The figure and this argument are retained in Modernized.

The brief historical account does not supply every extension, separation and limiting argument needed for a full proof for arbitrary homeomorphisms. We therefore invoke the theorem as stated, rather than treating a few area inequalities as its complete proof. Birkhoff’s cited [1926 paper](https://doi.org/10.1007/BF02559515) supplies the extended treatment.

## The displacement index explains the second point

For a differentiable map and an isolated zero $z$ of $\widetilde F-\mathrm{id}$, the fixed-point index is the winding number of

$$\frac{\widetilde F(w)-w}{|\widetilde F(w)-w|}$$

as $w$ traverses a small positively oriented circle around $z$. If $\det(D\widetilde F(z)-I)\ne0$, linearization gives

$$\operatorname{ind}_z(F)=\operatorname{sign}\det(D\widetilde F(z)-I).$$

Choose a fundamental rectangle with no zero on its vertical edges. On its lower horizontal edge the displacement points right; on its upper edge it points left. The two vertical edges contribute opposite winding because of periodicity. The total boundary degree is consequently zero. Additivity of degree implies

$$\sum_z\operatorname{ind}_z(F)=0$$

for finitely many interior fixed points in this lift class. If a first point exists and all points are nondegenerate, there must be at least one of each sign. This proves the two-point conclusion in that case once existence is known.

A degenerate isolated point can have index zero. Thus index cancellation alone does not prove two distinct points in the general case. That remaining conclusion belongs to the full Poincaré–Birkhoff theorem, exactly where the source refers to the longer treatment.

## Rational rotation gives periodic points

Suppose a lift has constant boundary displacements $2\pi\alpha$ and $2\pi\beta$, with $\alpha<\beta$. For any rational $k/n$ strictly between them, apply the theorem, with reversed boundary signs if needed, to

$$G=\widetilde F^n-(2\pi k,0).$$

A zero of $G-\mathrm{id}$ projects to an $n$-periodic point with winding $k$. If $\gcd(k,n)=1$, its least period is $n$: a smaller return period $d$ would divide $n$, and the total winding would be $(n/d)$ times an integer, contradicting coprimality. This is the mechanism used for the billiard and geodesic applications. Boundary behavior must be verified for those particular maps.

For the integrable shear $F(x,y)=(x+\tau(y),y)$, with strictly increasing $\tau$, a rational target is attained on a whole circle. The theorem guarantees at least two points, not exactly two and not necessarily isolated points. The normal-form argument of §1 extracts periodic points without assuming invariant circles in the perturbed problem.

## Relation to the source

The source sketch occupies pp. 165–169. The modern formulation names the lift, displacement map and degree, separates first-point existence from multiplicity, and identifies the degenerate case where index counting is insufficient. These notions clarify what the geometric construction achieves but cost basic covering-space and degree theory. The general theorem remains an external input; neither the source sketch nor a numerical shear example is represented as a complete proof of it.
