# Geodesic return maps

## Crossing annuli

Let $(S,h)$ be a smooth oriented Riemannian surface diffeomorphic to the two-sphere, with Gaussian curvature $K:S\to(0,\infty)$. Let $\gamma:\mathbb R/L\mathbb Z\to S$ be a simple closed unit-speed geodesic of length $L>0$. A geodesic has zero covariant acceleration, $\nabla_{\dot\gamma}\dot\gamma=0$, where $\nabla$ is the Levi-Civita connection of the metric $h$. The existence of this chosen simple closed geodesic is an input. These intrinsic hypotheses replace the source’s analytic convex surface; strict positivity of $K$ is explicit.

Write $e(s)=\dot\gamma(s)$ and let $n(s)$ be its positive perpendicular unit vector in the tangent plane of $S$. The embedded curve $\gamma$ separates $S$ into two disks; label the side toward $n$ by $+$.

The **unit tangent bundle** is $T^1S=\{(q,v):q\in S,\ v\in T_qS,\ h_q(v,v)=1\}$. A state records position and velocity. For $\sigma\in\{+1,-1\}$ define

$$\iota_\sigma(s,\theta)=\bigl(\gamma(s),\cos\theta\,e(s)+\sigma\sin\theta\,n(s)\bigr),\qquad 0\leq\theta\leq\pi.$$

Its image $A_\sigma$ is a closed annulus in $T^1S$. The interiors $A_\sigma^\circ$ consist of states crossing into the corresponding side. Their shared boundary consists of the two directed tangent orbits $(\gamma(s),\pm e(s))$. In particular, $\theta$ on $A_-$ is a positive angle toward $-n$, not the signed angle toward $n$.

Let $\Phi^t:T^1S\to T^1S$ denote unit-speed geodesic flow: $\Phi^t(q,v)=(\eta(t),\dot\eta(t))$, where $\eta(0)=q$ and $\dot\eta(0)=v$. Compactness of $S$ makes this flow defined for every real $t$. Unlike the [billiard map](billiard.html#identity), a crossing does not reflect velocity.

## Two crossings make one return

For $z\in A_\sigma^\circ$ define the next-crossing time

$$\tau_\sigma(z)=\inf\{t>0:\Phi^t(z)\in A_{-\sigma}^\circ\},$$

with value $+\infty$ if there is no crossing. Positive curvature supplies the essential global input.

**Theorem (Birkhoff, invoked).** Under the hypotheses above, both next-crossing times are finite on their entire open annuli. They extend smoothly and positively to the closed annuli, as do the crossing maps, which are diffeomorphisms. The boundary times are specified by conjugate points below. See [Abbondandolo, Bramham, Hryniewicz and Salomão, Theorem 2.1, Proposition 2.2 and Corollary 2.3](https://arxiv.org/pdf/1410.7790#page=14).

Define $T_\sigma:A_\sigma^\circ\to A_{-\sigma}^\circ$ and the same-side return map $F:A_+^\circ\to A_+^\circ$ by

$$T_\sigma(z)=\Phi^{\tau_\sigma(z)}(z),\qquad F=T_-\circ T_+.$$

The elapsed time of this return is the function $\tau:A_+^\circ\to(0,\infty)$ given by

$$\tau(z)=\tau_+(z)+\tau_-(T_+(z)),\qquad F(z)=\Phi^{\tau(z)}(z).$$

The composition is written in modern right-to-left order. It is the same-side operation denoted $TT^*$ in the source, rather than a single crossing.

**Local proof of smoothness.** Near an intersection, take a signed normal coordinate $r$ with $\gamma=\{r=0\}$. The arrival condition is $r(\eta_z(t))=0$. Its time derivative is nonzero: a geodesic tangent to $\gamma$ at an intersection would coincide with $\gamma$ by uniqueness of the geodesic equation, contradicting the initial transverse state. The implicit function theorem therefore determines the arrival time smoothly near each interior state. Tracing the geodesic backward supplies the inverse. This argument explains regularity once a crossing exists; it does not prove that a crossing must occur.

<details><summary>The curvature mechanism in the global return theorem</summary><div class="detail-body">

For a disk $D$ with smooth boundary, Gauss–Bonnet reads $\int_D K\,dA_h+\int_{\partial D}k_g\,ds=2\pi$, where $dA_h$ is metric area and $k_g$ is signed geodesic curvature. Each disk bounded by $\gamma$ consequently has total curvature $2\pi$.

For a disk bounded by a simple geodesic $m$-gon with interior angles $\alpha_1,\ldots,\alpha_m$, the corresponding formula is

$$\int_D K\,dA_h=\sum_{i=1}^m\alpha_i-(m-2)\pi.$$

Thus angles at most $\pi$ give a curvature budget at most $2\pi$. Birkhoff’s contradiction constructs a polygon around a hypothetical limiting geodesic avoiding $\gamma$; the disk on the appropriate side contains a full $\gamma$-hemisphere and additional positive curvature, exceeding that budget. The compactness argument and construction around the possibly nonsmooth limiting set are the global part of the theorem, not consequences of the local implicit-function calculation. The original argument occupies [pp. 180–181](assets/source/scan-192.png); the global theorem above is used as an external input.

</div></details>

Since the extended times are continuous on compact annuli, there is a uniform finite upper bound for their values. This is stronger than merely having a return for each fixed transverse state.

## Conjugate points and tangent limits

For $s\in\mathbb R/L\mathbb Z$ and $\varepsilon\in\{+1,-1\}$, the tangent geodesic is $t\mapsto\gamma(s+\varepsilon t)$. Define $j_s^\varepsilon:\mathbb R\to\mathbb R$ by the scalar initial-value problem

$$\ddot j_s^\varepsilon(t)+K(\gamma(s+\varepsilon t))j_s^\varepsilon(t)=0,\qquad j_s^\varepsilon(0)=0,\quad\dot j_s^\varepsilon(0)=1.$$

A dot denotes differentiation in elapsed arclength $t$. This is the **normal Jacobi equation**: if nearby unit-speed geodesics start at the same point with a small change of initial angle, their first-order normal separation is the angle change multiplied by $j_s^\varepsilon(t)$. It follows by differentiating the geodesic equation with respect to that initial angle; in a parallel normal frame, the curvature term becomes multiplication by Gaussian curvature.

Let $c_1^\varepsilon(s)<c_2^\varepsilon(s)$ be its first two positive zeros. Their endpoints are the first and second **conjugate points** to the starting point along this directed geodesic. Zeros are simple: a simultaneous zero of $j$ and $\dot j$ would force the whole solution to vanish. Since $K$ has a positive minimum, Sturm comparison with a positive constant-curvature equation ensures that these zeros exist.

<span id="proposition-boundary-formulas"></span>

**Proposition (boundary formulas).** In the annulus coordinates $(s,\theta)$, both $T_+$ and $T_-$ extend at their respective boundaries as

$$T_\sigma(s,0)=\bigl(s+c_1^+(s)\pmod L,0\bigr),$$

$$T_\sigma(s,\pi)=\bigl(s-c_1^-(s)\pmod L,\pi\bigr).$$

The full return extends as

$$F(s,0)=\bigl(s+c_2^+(s)\pmod L,0\bigr),$$

$$F(s,\pi)=\bigl(s-c_2^-(s)\pmod L,\pi\bigr).$$

To see the first-zero mechanism, let $r(t,\theta)$ be the signed normal displacement of a nearby geodesic. Near the positively directed tangent orbit, $r(t,\theta)=\theta j_s^+(t)+O(\theta^2)$ on a fixed compact time interval. Divide the crossing equation by $\theta$ before taking $\theta\to0$. At $c_1^+(s)$ its limiting time derivative is nonzero, so the implicit function theorem locates a nearby zero. Positivity before that zero excludes an earlier crossing; near $t=0$ use $r(t,\theta)=t\sin\theta+O(t^2\sin\theta)$. The other side and direction follow in the same way.

After the first crossing the normal Jacobi solution has negative derivative. Restarting it with a nonzero rescaling does not change its next zero, so two successive crossings reach $c_2$, rather than $2c_1$ in general. This also explains the boundary-time formulas $\tau(s,0)=c_2^+(s)$ and $\tau(s,\pi)=c_2^-(s)$.

At a tangent state the geodesic stays on $\gamma$ for all time. The displayed boundary map is therefore a limit of transverse returns, not the infimum of positive times at which that tangent orbit lies on $\gamma$.

<details><summary>Why a conjugate endpoint moves monotonically</summary><div class="detail-body">

Lift arclength to $\mathbb R$ and put $k(r)=K(\gamma(r))$. For each real $s$, let $u(s,r)$ solve $u_{rr}+k(r)u=0$ with $u(s,s)=0$ and $u_r(s,s)=1$. Let $C(s)>s$ be a fixed successive zero, so $u(s,C(s))=0$.

Let $a(s,r)$ solve the same equation with initial data $(a,a_r)=(1,0)$ at $r=s$. Differentiating the initial data shows $u_s=-a$. The Wronskian $a u_r-a_r u$ is constantly $1$. At $r=C(s)$, it gives $a(s,C(s))u_r(s,C(s))=1$. Implicit differentiation now yields

$$C'(s)=-\frac{u_s(s,C(s))}{u_r(s,C(s))}=\frac{1}{u_r(s,C(s))^2}>0.$$

Thus the first and second conjugate-endpoint maps preserve circular order. Reversing the arclength coordinate gives the same conclusion for the negatively directed boundary. This proves boundary monotonicity, not opposite boundary displacement.

</div></details>

## Lifts and the boundary twist condition

Use the [annulus-lift convention](periodic.html#annulus): a lift $\widetilde F=(X,Y)$ acts on $\mathbb R\times[0,\pi]$ and satisfies $X(s+L,\theta)=X(s,\theta)+L$. Any other lift adds the same integer multiple of $L$ to $X$ everywhere. Define its two boundary displacements by

$$d_0(s)=X(s,0)-s,\qquad d_\pi(s)=X(s,\pi)-s.$$

<span id="definition-boundary-twist"></span>

**Definition.** Strict opposite boundary twist means $d_0(s)>0>d_\pi(s)$ for every $s$, or the reversed pair of inequalities, for one and the same lift. This differs from requiring a nonzero derivative $\partial X/\partial\theta$ throughout the annulus.

The modulo-$L$ endpoint formulas alone do not determine these displacements. In general they give

$$d_0(s)=c_2^+(s)+m_0L,\qquad d_\pi(s)=-c_2^-(s)+m_\pi L,$$

for integers $m_0,m_\pi$ fixed by a continuous lift. Changing that lift shifts both integers equally; they cannot be chosen independently to manufacture opposite signs.

In [pp. 183–184](assets/source/scan-195.png), the signed number $i$ of transverse self-crossings of a geodesic segment corrects its positive endpoint arc $a\in[0,L)$ to $a+iL$. A positive crossing is one at which the later traversal crosses the earlier arc from its left side to its right side. When an endpoint passes a crossing, the jump in the representative arc is offset by the integer correction. This supplies the missing full turns. The source’s topological continuation argument, including limiting nongeneric configurations, is distinct from the differential equation for conjugate points.

<details><summary>An explicit normalization when crossing arcs are simple</summary><div class="detail-body">

Assume additionally that $\min K/\max K>1/4$. Under this pinching hypothesis, each crossing segment is embedded with distinct endpoints and its boundary limits satisfy $c_1^\pm<L$; these facts are the additional input of [Lemma 2.9 and the proof of Theorem 2.8](https://arxiv.org/pdf/1410.7790#page=23). They permit a direct construction without counting self-crossings.

For $z\in A_\sigma$, let $a_\sigma(z)\in(0,L)$ be the positively directed arclength on $\gamma$ from the starting point to the next-crossing point. Define $\rho(z)=a_+(z)+a_-(T_+z)$ on $A_+$. Then

$$X(s,\theta)=s+\rho(s,\theta)-L$$

is the first component of a continuous lift of $F$. At the positive tangent, each arc length is the forward conjugate travel time. At the negative tangent, it is $L$ minus the backward travel time. Therefore

$$d_0(s)=c_2^+(s)-L,\qquad d_\pi(s)=L-c_2^-(s).$$

In this normalization, $c_2^\pm(s)>L$ for all $s$ is sufficient for strict opposite twist. Equality gives zero displacement and fails the strict condition. These formulas use the stated extra hypothesis for the elementary lift construction; positive curvature by itself has not supplied a twist inequality.

</div></details>

The source uses additional information about a geodesic obtained by a minimax construction, and explicitly excludes an equality case on [p. 185](assets/source/scan-197.png). That Chapter V input is not part of the crossing-map construction. Orientation preservation and existence of the return map alone do not establish strict twist.

## The round sphere

Take $S=\{q\in\mathbb R^3:|q|=R\}$ with its induced metric, where $R>0$, and use the equator

$$\gamma(s)=R(\cos(s/R),\sin(s/R),0),\qquad L=2\pi R.$$

Its positive tangent is $e(s)=(-\sin(s/R),\cos(s/R),0)$ and choose $n=(0,0,1)$. For $0<\theta<\pi$, start from $q=\gamma(s)$ with velocity $v=\cos\theta\,e(s)+\sin\theta\,n$. The unit-speed geodesic and its normal coordinate are exactly

$$\eta(t)=q\cos(t/R)+Rv\sin(t/R),\qquad z(t)=R\sin\theta\sin(t/R).$$

The first crossing is at $t=\pi R$, with position $-q$ and velocity $-v$. Relative to the negative-side convention this gives

$$T_+(s,\theta)=(s+\pi R\pmod L,\theta).$$

The same formula holds for $T_-$. Consequently $F(s,\theta)=(s,\theta)$ on the annulus and $\tau=2\pi R$. Meanwhile $K=R^{-2}$ and

$$j(t)=R\sin(t/R),\qquad c_1=\pi R,\qquad c_2=2\pi R=L.$$

This is the exceptional equality case: the centered lift in the preceding calculation is the identity, so both boundary displacements are zero. A different lift adds the same whole turn at both boundaries and still cannot give strict opposite signs.

<!--GEODESIC_EXPLORER-->

## Relation to the source

The crossing annuli separate a global question—whether every transverse state returns—from the local calculation of the return map. The Jacobi equation explains the tangent limit and provides an explicit scalar computation; the Wronskian explains circular order. Lifted displacement then isolates the additional condition required for a boundary-twist argument.

The self-crossing index in the original calculation has an operational role: it retains full turns when endpoint coordinates wrap around the circle. It cannot be replaced by a principal-value angle without losing information. The round sphere shows why conjugate points, full turns, and strict twist must be kept distinct. The invariant-measure and fixed-point applications are developed in [§11](closed-geodesics.html).
