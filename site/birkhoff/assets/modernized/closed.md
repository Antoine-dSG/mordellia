<!-- passage:volume -->
## Invariant volume on an energy level

The geodesic flow is Hamiltonian. With $H$ normalized as squared speed, it preserves the four-dimensional phase volume

$$dp_1\,dq_1\,dp_2\,dq_2.$$

Birkhoff invokes the energy-coordinate construction of §3: on $H=h$, in its adapted coordinates and parametrization, the reduced volume integral is written

$$\iiint dq_1\,dp_2\,dq_2.$$

Fixing $H$ fixes the speed. The displayed reduced volume is tied to that coordinate construction; it is not asserted to have unit density in arbitrary coordinates on an energy surface.

<!-- passage:flux -->
## Flux through the crossing annulus

The annulus $R$ of positive crossings of the reference geodesic $g$ appears as a transverse surface $\bar R$ in the energy level. Its boundary consists of the two oriented motions along $g$. The two-crossing return $F=TT^*$ follows a flow line until its next intersection with $\bar R$.

Consider a thin flow tube with bases of areas $\Delta\sigma_1,\Delta\sigma_2$ in $\bar R$. Let $\alpha_1,\alpha_2$ be the angles between the flow lines and these surface elements, using the source's flow parametrization $q_1$. The volumes leaving and entering during $\Delta q_1$ are, to first order,

$$\sin\alpha_1\,\Delta\sigma_1\,\Delta q_1,
\qquad\sin\alpha_2\,\Delta\sigma_2\,\Delta q_1.$$

Volume preservation equates the fluxes. Hence the return preserves the positive area integral $\int\sin\alpha\,d\sigma$. This is the source's flow-tube proof, with “flux” naming the quantity it already computes.

<!-- passage:existence -->
## From fixed points to closed geodesics

Together with the twist conclusion of §10, the preserved area supplies the hypotheses for Poincaré's geometric theorem. Birkhoff obtains two fixed points of $F$ and first concludes the existence of a closed geodesic meeting $g$ twice.

His assumptions are: a convex analytic surface; a simple closed geodesic $g$ of minimax type; and no point of $g$ whose second conjugate point occurs after precisely one full circuit. He then strengthens the conclusion to two geometrically distinct closed geodesics, each meeting $g$ twice. Two fixed points alone do not give this: the two orientations of one curve already produce a pair. The remaining argument uses involutions and fixed-point indices.

<!-- passage:involutions -->
## Involutions and paired fixed points

Keep Birkhoff's convention of writing successive operations in the order performed. Reversing a one-crossing geodesic segment gives

$$T(s,\beta)=(s_1^*,\beta_1^*),\qquad
T(s_1^*,\pi-\beta_1^*)=(s,\pi-\beta).$$

Define the angle reflection $U(s,\beta)=(s,\pi-\beta)$. Then $TUTU=I$. Consequently $V=TU$ is an involution and $T=VU$. Similarly $T^*=V^*U$ with $(V^*)^2=I$, so $F=VUV^*U$.

If $F(P)=P$, inversion gives $UV^*UV(P)=P$, and hence $F(V(P))=V(P)$. The fixed points of the return are therefore paired by $V$.

<!-- passage:pair -->
## Why the two states differ

If $V(P)=P$, then $TU(P)=P$, which in coordinates means

$$s_1^*=s,\qquad \pi-\beta_1^*=\beta.$$

The next intersection would occur at the starting point with the reversed velocity. Uniqueness and reversal of a geodesic exclude such a segment: the reversed segment would have the same initial state, forcing the segment to retrace itself with opposite velocity at its midpoint. Thus $P$ and $V(P)$ differ. They represent opposite orientations of the same closed curve.

<!-- passage:index -->
## Equal indices and distinct curves

The factorization gives the conjugacy identity

$$VFV=F^{-1}.$$

Thus the return near one member of a pair is conjugate to its inverse near the other. Birkhoff uses invariance of the local fixed-point index under coordinate changes and under inversion for this orientation-preserving planar map. The two members of a reversal pair therefore have equal indices.

The extended geometric theorem invoked by Birkhoff supplies fixed points of opposite index. They cannot belong to the same reversal pair. Hence there are two geometrically distinct closed geodesics meeting $g$ twice, as claimed. This retains the source's external index-theorem input and its general index argument; it does not replace them with a nondegenerate matrix calculation.

<!-- passage:extensions -->
## Iterates and the stable case

Birkhoff proposes applying the same theorem to higher iterates of $F$ to obtain other types of closed geodesic. He invokes §1 for infinitely many closed geodesics near one of stable type in the general case. He also expects the two-geodesic conclusion to remain valid for much more general surfaces. These remain, respectively, an indicated application, a cross-reference and a proposed extension; this section supplies no additional proof of them.

<!-- passage:symmetry -->
## Reflection symmetry

If the convex surface is symmetric about a plane containing $g$, Birkhoff asserts the existence of closed geodesics meeting $g$ twice orthogonally and points to methods analogous to those used for symmetric orbits in the restricted three-body problem. Under the side identification induced by this symmetry, $T$ and $T^*$ coincide. Thus $F=T^2$ is the square of a product of two involutions. The factorization is the structural observation here; the source does not develop the promised symmetric-orbit construction in this passage.
