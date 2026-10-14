<!-- passage:map -->
## Collision states and the annulus map

Let $C$ be the analytic convex boundary of the billiard table considered in the preceding section. Normalize its length to $2\pi$ and let $s\in\mathbb R/2\pi\mathbb Z$ be positively oriented arclength. A departing state is specified by $(\theta,s)$, where $0<\theta<\pi$ is the angle from the positive tangent to the outgoing velocity. The space of states is an open annulus; adding $\theta=0,\pi$ gives its two grazing boundary circles.

The next collision and reflection define $T(\theta,s)=(\theta_1,s_1)$. The correspondence is one-to-one and analytic in the interior. A nearly tangent chord ends near its starting point with a nearly tangent reflected direction. Thus the map extends to each boundary circle as the identity.

This reduction to an annulus map permits the use of Poincaré's geometric theorem. Birkhoff contrasts its applicability to the restricted three-body problem with the maximum–minimum method, whose applicability there had not then been established.

<!-- passage:lift -->
## The boundary displacements

Choose a continuous real lift of the endpoint coordinate $s_1$ for which the displacement on $\theta=0$ is zero. Fixing the initial point and increasing $\theta$ from $0$ to $\pi$ makes the next endpoint traverse the boundary once positively. Consequently the displacement on $\theta=\pi$ is $2\pi$. A radial segment of the annulus is therefore taken to an arc winding once while crossing the annulus. Both boundary maps are the identity modulo $2\pi$, but their lifted displacements differ by one full turn.

<!-- passage:cycles -->
## Periodic trajectories and cycles

A harmonic triangle, traversed in one direction, gives three collision states cyclically permuted by $T$ and fixed by $T^3$. Conversely, a three-cycle describes such a trajectory. The preceding variational argument supplied at least four oriented three-cycles. There are no interior fixed points of $T$, since each lifted advance lies strictly between $0$ and $2\pi$.

More generally, a harmonic polygon corresponds to distinct states $P_1,\ldots,P_n$ cyclically permuted by $T$, with $T^n(P_i)=P_i$. Questions about billiard motion can thus be studied through iterates of the annulus map.

<!-- passage:area -->
## The invariant measure

Write $T(\theta,s)=(f(\theta,s),g(\theta,s))$. The assertion of §8 is that

$$\mu(E)=\iint_E\sin\theta\,d\theta\,ds$$

has the same value for a region $E$ and its image $T(E)$. This is area preservation after a change of coordinates.

<!-- passage:recurrence -->
## The recurrence argument

The whole annulus has measure $4\pi$. If a region $E$ has positive measure, its images cannot all be disjoint: each has measure $\mu(E)$, whereas their union has measure at most $4\pi$. Thus $T^i(E)$ and $T^j(E)$ overlap for some $i>j$. Applying $T^{-j}$ shows that $T^{i-j}(E)$ meets $E$.

In billiard language, initial position and direction can be chosen arbitrarily close to a prescribed state so that the motion later returns close to that state. Birkhoff invokes Poincaré's elaboration for the stronger assertion that almost every state returns infinitely often to every neighborhood of itself. The historical name is “stability in the sense of Poisson.” The cited reference is Poincaré, *Méthodes nouvelles de la Mécanique céleste*, vol. 3, chapter 26; the overlap argument alone is not the full almost-everywhere proof.

<!-- passage:jacobian -->
## Reduction to the Jacobian

Let

$$J=\det\frac{\partial(\theta_1,s_1)}{\partial(\theta,s)}.$$

For a density $M$, change of variables gives

$$\iint_{T(E)}M(\theta_1,s_1)\,d\theta_1\,ds_1
=\iint_E M(\theta_1,s_1)J\,d\theta\,ds.$$

For the orientation-preserving map considered here, invariance for every region is equivalent to

$$M(\theta_1,s_1)J=M(\theta,s).$$

It therefore suffices to prove $J=\sin\theta/\sin\theta_1$. This retains the source's change-of-variables proof.

<!-- passage:angles -->
## Chord and tangent angles

Write the boundary as $\gamma(s)=(x(s),y(s))$, parametrized by arclength. Let $\tau(s)$ and $\tau(s_1)$ be continuous local choices of the tangent angles, and let $\alpha$ be the angle of the chord $\gamma(s_1)-\gamma(s)$. The reflection law gives

$$\theta=\alpha-\tau(s)=L(s,s_1),\qquad
\theta_1=\tau(s_1)-\alpha=M(s,s_1).$$

The source computes these angles from

$$\tau(s)=\arctan\frac{y'(s)}{x'(s)},\qquad
\alpha=\arctan\frac{y(s_1)-y(s)}{x(s_1)-x(s)},$$

using local angle branches. The second tangent angle uses the first formula with $s_1$ in place of $s$. These are local formulas for angle differences, not a single principal-arctangent convention around the whole curve.

<!-- passage:determinant -->
## Differentiation and cancellation

Differentiating the two angle identities gives

$$d\theta=L_s\,ds+L_{s_1}\,ds_1,\qquad
d\theta_1=M_s\,ds+M_{s_1}\,ds_1.$$

Solving for the output differentials,

$$ds_1=\frac{d\theta}{L_{s_1}}-\frac{L_s}{L_{s_1}}\,ds,$$

$$d\theta_1=\frac{M_{s_1}}{L_{s_1}}\,d\theta+
\left(M_s-\frac{M_{s_1}L_s}{L_{s_1}}\right)ds.$$

The terms involving $L_sM_{s_1}$ cancel in the determinant, leaving

$$J=-\frac{M_s}{L_{s_1}}
=-\frac{\Delta x\,y'(s)-\Delta y\,x'(s)}{\Delta x\,y'(s_1)-\Delta y\,x'(s_1)},$$

where $\Delta x=x(s_1)-x(s)$ and $\Delta y=y(s_1)-y(s)$. If the chord length is $r$, then $(\Delta x,\Delta y)=r(\cos\alpha,\sin\alpha)$, while $\gamma'(s)=(\cos\tau,\sin\tau)$ and $\gamma'(s_1)=(\cos\tau_1,\sin\tau_1)$. Substitution yields

$$J=\frac{\sin(\alpha-\tau)}{\sin(\tau_1-\alpha)}
=\frac{\sin\theta}{\sin\theta_1}.$$

This proves preservation of $\mu$ by the same coordinate calculation as Birkhoff's.
