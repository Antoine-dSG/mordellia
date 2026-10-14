# Closed geodesics and fixed-point index

Let $(S,h)$ be a smooth oriented Riemannian two-sphere of positive Gaussian curvature, and let $\gamma:\mathbb R/L\mathbb Z\to S$ be a simple closed unit-speed geodesic of length $L$. Along $\gamma$, write $e(s)=\dot\gamma(s)$ and let $n(s)$ be the unit normal in the tangent plane pointing into one chosen complementary disk. The crossing annuli of [§10](geodesic.html#annuli) are

$$
A^\pm=\{(\gamma(s),\cos\theta\,e(s)\pm\sin\theta\,n(s)):0\leq\theta\leq\pi\}.
$$

Their interiors contain transverse crossings. Use the smooth crossing maps $C=T_+:A^+\to A^-$ and $D=T_-:A^-\to A^+$, with their boundary extensions from §10. The first return to $A^+$ is $F=D\circ C$. Its return time $\tau:A^+\to(0,\infty)$ is the length of the corresponding unit-speed geodesic segment in the interior, extended by its boundary limit. Global existence and boundary regularity are the external inputs specified in §10.

## Length variation and preserved area

In local arclength coordinates write $F(s,\theta)=(s_1,\theta_1)$, and set $p=\cos\theta$ and $p_1=\cos\theta_1$. The symbols $s_1,\theta_1$ denote functions of the initial state.

<span id="proposition-length-variation"></span>

**Proposition.** The differential of the return length is

$$
d\tau=p_1\,ds_1-p\,ds.
$$

<span id="proof-length-variation"></span>

**Proof.** Vary the initial state smoothly, with variation parameter $a$, and let $\eta_a:[0,1]\to S$ be the resulting return segment parametrized with constant speed. The first variation of length is

$$
\frac{d}{da}\operatorname{length}(\eta_a)
=\langle v_1,\partial_a\eta_a(1)\rangle_h
-\langle v_0,\partial_a\eta_a(0)\rangle_h.
$$

The interior term is zero because each $\eta_a$ is a geodesic; no minimizing assumption is needed. Both endpoints lie on $\gamma$, so their variations are $e(s_1)\,ds_1/da$ and $e(s)\,ds/da$. Taking their scalar products with the endpoint unit velocities gives the asserted identity. The intermediate crossing is not an endpoint of the full segment and contributes no extra term. $\square$

For a direct calculus consequence, compare the mixed derivatives of $\tau$ with respect to $s$ and $\theta$. Since $p_\theta=-\sin\theta$, the result is

$$
\sin\theta_1\,
\det\frac{\partial(s_1,\theta_1)}{\partial(s,\theta)}
=\sin\theta.
$$

Thus $F$ preserves the positive measure

$$
\mu(E)=\int_E\sin\theta\,ds\,d\theta,
\qquad \mu(A^+)=2L.
$$

The density vanishes on the boundary, but every nonempty open subset has positive measure. The coordinate change $(s,\theta)\mapsto(s,p)$ identifies the closed annulus with $(\mathbb R/L\mathbb Z)\times[-1,1]$ and turns this into ordinary unsigned area $ds\,dp$. This change is a homeomorphism up to the boundary; its inverse need not be differentiable there.

<details><summary>The differential-form formulation <span>Exactness and its scope</span></summary><div class="detail-body">

The one-form $\lambda=\cos\theta\,ds$ assigns $\cos\theta\,\delta s$ to a tangent variation $(\delta s,\delta\theta)$. Its pullback is $(F^*\lambda)_z(\xi)=\lambda_{F(z)}(DF_z\xi)$. Length variation says $F^*\lambda-\lambda=d\tau$. Taking exterior derivatives gives $F^*(d\lambda)=d\lambda$, where $d\lambda=\sin\theta\,ds\wedge d\theta$. In the convention of §8, $\omega=ds\wedge dp=-d\lambda$ is therefore also preserved.

This is the same identity as $T^*\lambda-\lambda=d\ell$ for a billiard chord of length $\ell$. Here $\tau$ is a function of the initial state. Conjugate points and multiple geodesic segments between the same endpoints can prevent a single global endpoint generating function $H(s,s_1)$; the identity does not supply one or prove a twist condition.

</div></details>

## A closed geodesic from boundary twist

A lift of $F$ is a map $\widetilde F:\mathbb R\times[0,\pi]\to\mathbb R\times[0,\pi]$ projecting to $F$ and satisfying $\widetilde F(s+L,\theta)=\widetilde F(s,\theta)+(L,0)$. Write its first component as $X(s,\theta)$.

**Twist hypothesis.** Fix one lift for which

$$
X(s,0)-s>0,\qquad X(s,\pi)-s<0
\quad\text{for every }s.
$$

This is an additional hypothesis, not a consequence of area preservation or positive curvature. The [pinched case in §10](geodesic.html#twist) gives a sufficient route: for $\min K/\max K>1/4$, the centered lift has displacements $c_2^+(s)-L$ and $L-c_2^-(s)$, so $c_2^\pm(s)>L$ suffices. The round sphere has equality and fails strict twist.

**External theorem ([Poincaré–Birkhoff](periodic.html#existence)).** An orientation-preserving annulus homeomorphism preserving ordinary area, preserving each boundary component, and having a lift with these opposite strict boundary displacements has at least two distinct interior fixed points in the zero-displacement class of that lift.

The change $p=\cos\theta$ makes the preserved measure ordinary area, so this theorem applies to $F$. A fixed point $z\in\operatorname{int}A^+$ gives a unit-speed geodesic returning to its starting position and velocity after time $\tau(z)$; it is therefore closed. It crosses $\gamma$ twice during its least period, once into each disk. An earlier full period would give an earlier return to $A^+$. Crossings here are counted along the parametrized curve; simplicity of the new geodesic is not asserted.

Two fixed points already guarantee at least one closed geodesic different from $\gamma$. Counting two different geometric curves requires an additional argument.

## Reversal pairs two states of one curve

Let $J:A^+\to A^-$ reverse velocity: $J(q,v)=(q,-v)$. In angle coordinates it sends $(s,\theta)$ to $(s,\pi-\theta)$ on the other annulus. Reversing a geodesic segment gives

$$
C^{-1}=J^{-1}CJ^{-1},\qquad
D^{-1}=JDJ.
$$

Define $R=J^{-1}\circ C:A^+\to A^+$: follow the first crossing segment, then reverse its terminal velocity. Composition acts from right to left.

<span id="proposition-reversal"></span>

**Proposition.** In the interior, $R^2=\mathrm{id}$, $RFR=F^{-1}$, and $R$ has no fixed points.

<span id="proof-reversal"></span>

**Proof.** The first identity follows from $J^{-1}CJ^{-1}=C^{-1}$. For the second, use $CJ^{-1}C=J$:

$$
RFR=J^{-1}CDCJ^{-1}C
=J^{-1}CDJ=C^{-1}D^{-1}=F^{-1}.
$$

If $Rz=z$, the first crossing segment $\eta:[0,b]\to S$ would start at $(q,v)$ and end at $(q,-v)$. Its reversal $t\mapsto\eta(b-t)$ has the same initial position and velocity as $\eta$, so uniqueness gives $\eta(t)=\eta(b-t)$. Differentiating at $t=b/2$ gives $\dot\eta(b/2)=0$, contradicting unit speed. $\square$

Consequently $Fz=z$ implies $F(Rz)=Rz$, with $Rz\ne z$. These states describe the same closed curve in opposite orientations. Each closed geodesic with two crossings per least period gives exactly this pair of states in $A^+$.

On the unit round sphere, taking $\gamma$ to be the equator, $C(s,\theta)=(s+\pi,\theta)$ and $F=\mathrm{id}$. Hence

$$
R(s,\theta)=(s+\pi,\pi-\theta)
\quad(s\bmod 2\pi).
$$

Even the orthogonal state $\theta=\pi/2$ has a distinct partner at the antipodal equatorial point. All interior states are fixed by $F$, so this example has infinitely many closed geodesics but no isolated fixed-point indices.

## Equal indices and two different geodesics

For an isolated fixed point $z$ of a smooth map of an oriented surface, its **fixed-point index** is the winding number of the displacement $x-F(x)$ around zero as $x$ traverses a sufficiently small positively oriented loop enclosing only $z$. A fixed point is **nondegenerate** if $I-DF_z$ is invertible; then

$$
\operatorname{ind}(F,z)=\operatorname{sign}\det(I-DF_z).
$$

At a fixed point, preservation of the positive interior density implies $\det DF_z=1$. Put $A=DF_z$. Differentiating the reversal identity shows that $DF_{Rz}$ is conjugate to $A^{-1}$. Since

$$
\det(I-A^{-1})=\frac{\det(I-A)}{\det A}=\det(I-A),
$$

nondegenerate reversal partners have equal indices. Opposite indices must therefore belong to different geometric curves.

<span id="proposition-two-geodesics"></span>

**Proposition (nondegenerate case).** Under the preceding return-map and strict-twist hypotheses, assume additionally that every fixed point in the chosen lift's zero-displacement class is nondegenerate. Then there are at least two geometrically distinct closed geodesics other than $\gamma$, each crossing $\gamma$ twice per least period.

<span id="proof-two-geodesics"></span>

**Proof.** Poincaré–Birkhoff supplies zero-displacement fixed points. Their indices sum to zero, by the boundary-displacement argument below. Nondegeneracy makes each index $+1$ or $-1$, so at least one of each sign occurs. Each has a distinct reversal partner of the same index, and the two pairs cannot coincide. Thus there are at least four fixed states representing at least two curves. $\square$

<details><summary>Why the indices sum to zero <span>A boundary winding calculation</span></summary><div class="detail-body">

On the covering strip set $G(s,\theta)=\widetilde F(s,\theta)-(s,\theta)$. Its zeros stay away from both horizontal boundaries by strict twist. Nondegeneracy makes them isolated, so there are finitely many modulo $L$. Choose a vertical cut avoiding their first coordinates and consider a fundamental rectangle of width $L$.

On each horizontal side, $G$ is a nonzero horizontal vector with constant sign, hence has no angular variation. The images under $G$ of the vertical sides coincide by periodicity and are traversed in opposite directions. The total boundary winding is therefore zero. The planar degree formula identifies this winding with the sum of the local indices of the zeros. Using $G$ instead of $-G$ does not change winding in dimension two.

This counts exactly $\widetilde F(s,\theta)=(s,\theta)$, not fixed points satisfying $\widetilde F(s,\theta)=(s+kL,\theta)$ for a nonzero integer $k$. No assumption about the indices in those other classes is needed.

</div></details>

<!--INDEX_EXPLORER-->

At a degenerate fixed point, the determinant formula is insufficient. An isolated degenerate point may still have an index defined by winding; a nonisolated point does not have an individual index of this kind. The proposition above does not settle the full degenerate case of Birkhoff's stronger assertion.

## Iterates and reflection symmetry

A point of least period $q$ under $F$ gives a closed geodesic with $2q$ crossings per least period. Its $q$ states in $A^+$ are one oriented periodic orbit, not $q$ different curves. Applying a fixed-point theorem to $F^q$ requires checking its boundary rotation and excluding smaller periods, as in [§9](periodic.html#winding); merely taking higher powers does not establish new geodesics.

Suppose further that $S$ has a reflection isometry $\sigma:S\to S$ fixing $\gamma$ pointwise and exchanging its two sides. If a geodesic segment $\eta:[0,b]\to S$ has endpoints on $\gamma$ and is perpendicular to $\gamma$ at both, concatenate it with $t\mapsto\sigma(\eta(2b-t))$, $b\leq t\leq2b$. At each endpoint, $d\sigma$ fixes the tangent to $\gamma$ and reverses its normal. Positions and velocities therefore match at the joins. Geodesic uniqueness gives a smooth closed geodesic. This reduces the symmetric construction to finding an orthogonal return segment; it does not by itself prove that such a segment exists.

## Relation to the source

Birkhoff's flux argument on pp. 185–186 obtains invariant area from conservation of volume in a tube of geodesic trajectories. The length-variation argument gives the same invariant measure and also identifies its exact primitive, linking this problem to the billiard calculation of §8. The modern identity appears in Abbondandolo, Bramham, Hryniewicz and Salomão, [Proposition 2.6](https://arxiv.org/pdf/1410.7790#page=22).

On pp. 186–188 Birkhoff explicitly pairs opposite orientations by an involution and proves equality of their indices. His two-geodesic assertion uses an extended fixed-point theorem yielding opposite indices, under his minimax and conjugate-point hypotheses. Here the strict boundary twist is assumed explicitly, and the opposite-index step is proved with an additional nondegeneracy hypothesis. Neither the minimax input nor the full degenerate extension is proved here.

The final remarks on p. 188 concern iterates, nearby periodic motions around stable geodesics, more general surfaces, and reflection symmetry. The iterate bookkeeping and the reflection construction above are developed; stable-orbit accumulation and the proposed generality are not established by these arguments.
