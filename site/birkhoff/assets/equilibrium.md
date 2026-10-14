# Periodic points near an elliptic equilibrium

## The time-period map

Let $H(p,q,t)$ be real analytic, $2\pi$-periodic in $t$, and satisfy $H_p(0,0,t)=H_q(0,0,t)=0$. The equations are $\dot p=-H_q$, $\dot q=H_p$. For a sufficiently small neighborhood of the origin, their time-$2\pi$ map $T$ is an analytic local diffeomorphism fixing the origin. The neighborhood may depend on the finite time interval under consideration. A solution with $T^nz=z$ closes after $2\pi n$ units of time; its least period may be smaller.

The suspended vector field on $(p,q,t\bmod2\pi)$ is $(-H_q,H_p,1)$. Its section $t=0$ identifies a periodically forced problem with a return-map problem. This is a local section, not a claim that every trajectory in the energy manifold crosses it.

## Hamiltonian area preservation

Set $\omega=dq\wedge dp$. A two-form assigns an alternating bilinear quantity to two tangent vectors; here it is oriented area. The Hamiltonian vector field $X_t$ satisfies $\iota_{X_t}\omega=d_{p,q}H$. Here $\iota_X\omega$ means the one-form $v\mapsto\omega(X,v)$, and $d_{p,q}$ differentiates only in the state variables. Therefore

$$\mathcal L_{X_t}\omega=d(\iota_{X_t}\omega)+\iota_{X_t}d\omega=d^2H=0.$$

The Lie derivative $\mathcal L_X$ measures the infinitesimal change of a form along a flow. Thus the flow, and in particular $T$, preserves $\omega$. This is the differential-form version of Birkhoff’s incompressible-tube calculation. In coordinates it is simply

$$\operatorname{div}(-H_q,H_p)=-H_{qp}+H_{pq}=0,\qquad\det DT=1.$$

A noncanonical change of variables can change the coordinate area element. What survives is a smooth positive invariant density, sufficient for the intersection argument below.

## The finite normal-form input

An elliptic fixed point has linear eigenvalues $e^{\pm i\sigma}$ on the unit circle. Assume $\sigma/(2\pi)$ is irrational and that the first twist coefficient $s$ is nonzero. The finite-order normal-form input from Birkhoff’s earlier chapters gives, after a local analytic change of coordinates,

$$\rho_1=\rho+O(\rho^{\mu+1}),\qquad\theta_1=\theta+\sigma+s\rho+O(\rho^\mu),\qquad\rho=r^2,$$

with differentiated remainder estimates as in [§2](twist-estimates.html?mode=reinterpreted). The normalization is to arbitrarily high finite order; it does not assert convergence of an infinite normalizing series. Reverse the angular orientation if needed to take $s>0$.

Ellipticity alone is insufficient. The condition $s\ne0$ produces a radial variation of rotation, while area preservation prevents the resonant curve from escaping its image. This argument does not assert nonlinear stability solely from irrational linear eigenvalues.

## Resonant curves and intersections

**Lemma input.** For arbitrarily small $\varepsilon>0$, choose an integer $n$ so that all iterates through $n$ stay in $r<2\varepsilon$, and the lifted angular displacement

$$D_n(r,\theta)=\theta_n(r,\theta)-\theta$$

strictly increases with $r>0$, from $n\sigma$ at $r=0$ to more than $n\sigma+2\pi$ at $r=\varepsilon$. Section 2 supplies these finite-time estimates.

Let $k$ be the smallest integer with $2\pi k>n\sigma$. Irrationality makes this inequality strict. On each ray there is exactly one solution of $D_n(r,\theta)=2\pi k$. The implicit-function theorem gives a closed radial graph $C:r=R(\theta)>0$. Every point of $C$ is carried by $T^n$ to the same ray.

**Proposition.** The curves $C$ and $T^nC$ intersect, and every intersection yields a fixed point of $T^n$ on $C$.

**Proof.** Both curves are simple and surround the origin. If disjoint, one bounds a disk strictly contained in the other. The intervening open annulus has positive measure for the smooth invariant density. This contradicts equality of the two disk measures under $T^n$. Choose $Q=T^nP\in C\cap T^nC$, with $P\in C$. The angular equation puts $P,Q$ on the same ray. A radial graph has only one point on a ray, so $P=Q$. ∎

The resulting nonzero periodic points approach the origin as $\varepsilon\to0$. A finite collection of periodic orbits cannot do this, since each has finitely many nonzero points. Hence there are infinitely many distinct periodic orbits near the origin. Their periods are unbounded: for each fixed $n$, $DT^n(0)-I$ is invertible by nonresonance, so the origin is an isolated zero of $T^n-I$.

## Relation to the source

Birkhoff’s pp. 150–154 separate a return map, preserved area, a normal-form lemma and an intersection argument. The reinterpretation makes this dependency explicit and distinguishes finite-order normalization from an infinite convergent normal form. The new language of a preserved two-form costs differential forms; the final intersection proof needs only a positive invariant density and elementary planar topology. The normal-form construction remains an external input from Chapter III. The $2\pi$ normalization issue in the historical lemma is recorded in the edition notes.
