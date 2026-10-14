# Periodic billiard orbits

## The closed annulus and its lift

Use the [collision map and reflection convention](index.html#identity) for a bounded strictly convex plane table with regular analytic boundary and strictly positive curvature. Let $L$ be the boundary length, $s\in\mathbb R/L\mathbb Z$ counterclockwise arclength, and $\theta\in(0,\pi)$ the outgoing angle measured from the positive tangent toward the interior. Define normalized coordinates by

$$x=s/L\pmod 1,\qquad y=\frac{1-\cos\theta}{2}.$$

The physical state space becomes $\mathcal A^\circ=(\mathbb R/\mathbb Z)\times(0,1)$. In these coordinates denote the billiard map by $f$. Its continuous extension to $\mathcal A=(\mathbb R/\mathbb Z)\times[0,1]$ fixes both boundary circles pointwise: a chord becomes tangent and its two endpoints coalesce as $\theta\to0$ or $\theta\to\pi$. The extension is a homeomorphism, by the same argument for the inverse map. Boundary points are limiting states, not physical flights.

The [invariant measure](index.html#identity) takes the form

$$d\mu=\sin\theta\,d\theta\,ds=2L\,dx\,dy.$$

Thus $f$ preserves ordinary area on this closed annulus. It preserves orientation in the interior, hence globally, and preserves each boundary component.

<span id="definition-lift"></span>

**Definition (lift).** Let $\pi:\widetilde{\mathcal A}=\mathbb R\times[0,1]\to\mathcal A$ send $(x,y)$ to $(x\bmod1,y)$. A lift of $f$ is a continuous map $F:\widetilde{\mathcal A}\to\widetilde{\mathcal A}$ with $\pi F=f\pi$. Choose its first coordinate $F_1$ so that every interior flight satisfies

$$0<F_1(x,y)-x<1.$$

This selects the positive boundary arc from the starting collision to the next collision. It determines a unique lift, with $F(x+1,y)=F(x,y)+(1,0)$. Near $\theta=0$ that arc shrinks; near $\theta=\pi$ its complement shrinks. Consequently,

$$F(x,0)=(x,0),\qquad F(x,1)=(x+1,1).$$

Both circles are fixed on the annulus, but their lifts differ by one full turn. The distinction is essential to counting winding.

## Winding, periodic states, and periodic orbits

A state $z\in\mathcal A^\circ$ is periodic if $f^n(z)=z$ for some positive integer $n$. Its **least period** is the smallest such integer. Its **orbit** is the finite set of its successive states, with the cyclic order supplied by $f$. Choosing another starting state on that orbit does not give a different orbit.

If $w\in\widetilde{\mathcal A}$ lifts a state fixed by $f^n$, there is a unique integer $k$ such that

$$F^n(w)=w+(k,0).$$

Call $k$ the boundary winding over these $n$ collisions, and $k/n$ their mean boundary advance. Equivalently, $k$ is the sum of the $n$ positive boundary-arc advances, divided by $L$. It is independent of the chosen lift of the state and of the starting collision. Each normalized advance lies strictly between zero and one, so $0<k<n$. This boundary winding does not require choosing a point inside a possibly self-intersecting polygon.

<span id="lemma-least-period"></span>

**Lemma (least period).** If $\gcd(k,n)=1$ and $F^n(w)=w+(k,0)$, then $z=\pi(w)$ has least period $n$.

<span id="proof-least-period"></span>

**Proof.** Let $d$ be its least period. Division with remainder in $n$ shows that $d$ divides $n$. Write $F^d(w)=w+(r,0)$ for an integer $r$. Equivariance under integer translation gives $k=(n/d)r$. The integer $n/d$ divides both $k$ and $n$, so it equals one. Thus $d=n$. Without coprimality, the displayed equation alone does not establish the least period.

## The periodic-orbit theorem

The following form of the **Poincaré–Birkhoff theorem** is used as an external theorem. Its conclusion counts distinct orbits, not merely distinct fixed points of an iterate; see [Franks, *Rotation Numbers and Instability Sets*, Theorem 4.1 and its billiard application, pp. 7–8](https://arxiv.org/pdf/math/0303292).

**Theorem (rigid boundary case).** Suppose $g:\mathcal A\to\mathcal A$ is an orientation-preserving, area-preserving homeomorphism preserving each boundary component. Suppose it has a lift $G$ commuting with integer horizontal translations and, for real constants $a<b$, satisfying

$$G(x,0)=(x+a,0),\qquad G(x,1)=(x+b,1),\qquad a<b.$$

For relatively prime integers $k,n$, with $n>0$ and $a<k/n<b$, there are at least two distinct periodic orbits of $g$, with lifts satisfying $G^n(w)=w+(k,0)$. Each has least period $n$.

<span id="proposition-periodic-billiards"></span>

**Proposition (periodic billiards).** Under the table hypotheses above, every reduced fraction $k/n$ with $0<k<n$ is realized by at least two distinct periodic billiard orbits of least period $n$.

<span id="proof-periodic-billiards"></span>

**Proof.** The preceding annulus construction verifies the theorem's topological and area hypotheses. The canonical lift has $a=0$ and $b=1$. Apply the theorem to $k/n$. The resulting states are interior, since boundary mean advances are zero and one. The least-period lemma applies to each orbit. Every state on each orbit satisfies the reflection law by the definition of $f$, so the corresponding $n$ flights form a closed billiard trajectory. Taking $k=1$ and $n=2,3,\ldots$ gives infinitely many periodic orbits with unbounded least period.

<details><summary>The shifted iterate and the counting issue <span>Source calculation</span></summary><div class="detail-body">

For fixed $k,n$, define $D_{-k}(x,y)=(x-k,y)$ and $F_{k,n}=D_{-k}\circ F^n$. Its boundary displacements are

$$F_{k,n}(x,0)-(x,0)=(-k,0),\qquad F_{k,n}(x,1)-(x,1)=(n-k,0).$$

They have opposite signs precisely when $0<k<n$. Multiplication by $2\pi$ recovers the rotations in Birkhoff's pp. 176–177. The integer shift is invisible on the annulus; it selects a particular winding class in its covering space.

The familiar two-fixed-point statement applied to this shifted iterate gives periodic states. Two such states could be successive collisions on a single orbit. The distinct-orbit conclusion above uses the stronger periodic-orbit formulation explicitly. Birkhoff separates the orbits by opposite fixed-point indices. An isolated fixed-point index is the winding of the nonzero displacement vector along a small surrounding loop; no such isolating loop exists for a point on a continuous circle of fixed points. The theorem stated above also covers that degeneracy, without assigning individual indices there.

</div></details>

## Reversal and the number of trajectories

An involution is a map whose square is the identity. In angle coordinates the reversal involution is $R(s,\theta)=(s,\pi-\theta)$: reverse the incoming velocity at a collision to obtain the outgoing velocity for the reversed trajectory. In normalized annulus coordinates, $R(x,y)=(x,1-y)$. The reflection law gives

$$R\circ f\circ R=f^{-1}.$$

Indeed, starting from the reversed state and making one flight reaches the preceding collision with its reversed state. Thus $fR=Rf^{-1}$. Also $I=R\circ f$ satisfies $I^2=\mathrm{id}$, and $f=R\circ I$: the map is a product of two involutions, as in the source.

On an $n$-periodic trajectory, reversal replaces each positive boundary advance $\delta$ by $1-\delta$, in reverse order. It therefore replaces $k$ by $n-k$. Call two closed collision sequences equivalent as **unoriented trajectories** when they differ by a cyclic change of starting collision or by reversal.

For coprime $k,n$ with $n>2$ and $k<n/2$, the two orbits supplied at winding $k$ cannot be reversals of one another, since reversal has winding $n-k\ne k$. They give at least two unoriented trajectories, and their reversals give two further oriented orbits. This is the precise sense of the source's two harmonic polygons and four periodic motions. Here a harmonic polygon means a closed polygonal trajectory satisfying the reflection law; it need not be simple.

For $k/n=1/2$ in lowest terms, $n=2$. Each orbit is a segment traversed back and forth. Reversal fixes these normal-incidence states and does not create a new orbit. There are at least two such trajectories. For the ellipse $x(t)=(a\cos t,b\sin t)$ with $a>b>0$, the major and minor axes give explicit distinct examples: their endpoints have normals parallel to the corresponding axis, and normal incidence reverses the velocity.

## Example: a five-collision star in a circle

For a circle of radius $r>0$, the [explicit circle map](index.html#circle) has $s_1=s+2r\theta\pmod{2\pi r}$ and $\theta_1=\theta$. Its canonical lift therefore advances $x=s/(2\pi r)$ by $\theta/\pi$ at every collision. Choose $\theta=2\pi/5$. Five steps advance $x$ by two; coprimality gives least period five. The reversed orbit has angle $3\pi/5$ and winding three.

<a class="text-button" href="index.html?orbit=2-5#geometry">Show the five-collision star in the billiard diagram ↗</a>

There is a continuum of starting positions at this angle, partitioned into five-state orbits. This illustrates why isolated fixed-point indices are not a general substitute for the periodic-orbit theorem. By contrast, if $\theta/\pi$ is irrational, the orbit is recurrent but never periodic: the [recurrence theorem](index.html#recurrence) alone cannot supply the rational winding conclusion.

## Near-grazing motion and a curvature-weighted invariant

Let $\kappa:\mathbb R/L\mathbb Z\to(0,\infty)$ be the curvature, defined by $\tau'(s)=\kappa(s)n(s)$, and let $\kappa'=d\kappa/ds$. For $\theta>0$ small, choose the next arclength lift $s_1=s+h$ with $h>0$ small. The notation $O(\theta^j)$ below means a remainder bounded by a constant times $\theta^j$, uniformly in $s$, as $\theta\to0^+$.

<span id="proposition-grazing-expansion"></span>

**Proposition (grazing expansion).** The collision map satisfies

$$h=\frac{2\theta}{\kappa}-\frac{4\kappa'}{3\kappa^3}\theta^2+O(\theta^3),\qquad
\theta_1-\theta=\frac{2\kappa'}{3\kappa^2}\theta^2+O(\theta^3),$$

where the curvature and its derivative on the right are evaluated at $s$.

<details><summary>Derivation from the tangent and normal frame <span>Proof</span></summary><div class="detail-body">

The Frenet equations $\tau'=\kappa n$ and $n'=-\kappa\tau$ give

$$\gamma(s+h)-\gamma(s)=\left(h-\frac{\kappa^2h^3}{6}\right)\tau(s)+\left(\frac{\kappa h^2}{2}+\frac{\kappa'h^3}{6}\right)n(s)+O(h^4).$$

The angle of this chord with $\tau(s)$ is therefore $\theta=\kappa h/2+\kappa'h^2/6+O(h^3)$. Inversion gives the stated formula for $h$. The tangent turns through $\int_s^{s+h}\kappa(u)\,du$ between the endpoints. Reflection gives

$$\theta_1=\int_s^{s+h}\kappa(u)\,du-\theta=\kappa h+\tfrac12\kappa'h^2-\theta+O(h^3).$$

Substituting $h$ proves the second formula.

</div></details>

Define $J(s,\theta)=\theta\kappa(s)^{-1/3}$. This is an **approximate invariant**, in the following precise one-step sense:

$$J(s_1,\theta_1)-J(s,\theta)=O(\theta^3).$$

To verify it, put $c(s)=\kappa(s)^{-1/3}$. Taylor expansion gives $c(\theta_1-\theta)+c'\theta h+O(\theta^3)$. Its quadratic coefficient is

$$\frac{2}{3}\kappa'\kappa^{-7/3}-\frac{2}{3}\kappa'\kappa^{-7/3}=0.$$

More generally, replacing $c$ by a positive twice continuously differentiable weight gives the equation $c'/c=-\kappa'/(3\kappa)$ for cancellation. This determines the curvature exponent, up to a constant factor. The formal differential equation $d\theta/ds=(\kappa'/3\kappa)\theta$ on Birkhoff's p. 179 expresses the same cancellation, with approximate level curves $\theta=J\kappa^{1/3}$.

**Lazutkin coordinates.** Set

$$C_\kappa=\int_0^L\kappa(u)^{2/3}\,du.$$

$$X(s)=\frac{1}{C_\kappa}\int_0^s\kappa(u)^{2/3}\,du\pmod1,$$

$$Y(s,\theta)=\frac{4}{C_\kappa}\kappa(s)^{-1/3}\sin(\theta/2).$$

These coordinates are defined on a sufficiently small collar $0\le\theta<\varepsilon$ of the grazing boundary. The leading relation $Y=2J/C_\kappa+O(\theta^3)$ identifies the approximate invariant with a modern transverse coordinate. Using the increasing real lift of $X$ along the short boundary arc, $X(s_1)-X(s)=2J/C_\kappa+O(\theta^2)$: the same choice makes the leading horizontal advance independent of position. Thus the source's two powers of curvature serve complementary purposes: one cancels transverse drift, the other normalizes longitudinal speed.

Writing $(X_1,Y_1)$ for the coordinates of the next collision, the fuller Lazutkin normal form is $X_1=X+Y+O(Y^3)$, $Y_1=Y+O(Y^4)$; see [Zhang, equations (4)–(6), p. 3](https://arxiv.org/pdf/1610.00317), with his radius variable $\rho=1/\kappa$. These sharper orders are invoked from that normal form, not established by the second-order calculation above. The coordinates preserve a weighted area: direct differentiation gives $Y\,dX\wedge dY=(4/C_\kappa^3)\sin\theta\,ds\wedge d\theta$; ordinary $dX\,dY$ is not the original invariant measure.

<details><summary>The approximate collision count <span>Differential model</span></summary><div class="detail-body">

Treat the collision index as a continuous variable $m$ and keep $J>0$ constant in the leading approximation. The model is

$$\frac{ds}{dm}=2J\kappa(s)^{-2/3},\qquad \Delta m=\frac{1}{2J}\int_0^L\kappa(s)^{2/3}\,ds=\frac{C_\kappa}{2J}.$$

Here $\Delta m$ is the modeled number of collisions for one circuit. If $K=\max_s\kappa(s)$, then $C_\kappa\le LK^{2/3}$. This recovers the source's curvature bound after its boundary-length normalization. The computation concerns the differential model; error accumulation for the actual discrete orbit requires an additional argument.

</div></details>

A one-step remainder estimate does not itself prove the existence of an exactly invariant curve or control arbitrarily many iterations. In particular, the formal calculation does not prove the source's proposed accumulation of periodic motions near the boundary. It identifies the approximate invariant and the coordinate system in which such questions can be studied.

## Relation to the source

Birkhoff's pp. 176–179 pass from annulus dynamics to periodic billiard trajectories and then to a formal near-boundary calculation. The reconstruction makes the lift and winding conventions explicit, separates least period from the number of geometrically distinct trajectories, and spells out the effect of reversal. This requires the language of annulus lifts and an external periodic-point theorem; the existence theorem itself is not proved here.

The grazing expansion explains the two curvature powers in the source's differential model: one cancels the leading transverse drift, the other normalizes longitudinal advance. Lazutkin coordinates make this relationship explicit, at the cost of additional coordinate changes and asymptotic notation. The calculation establishes a one-step approximate invariant, not an invariant curve or long-time control. The sharper normal form is cited separately, and the source's stability cross-reference and proposed periodic accumulation remain untreated.
