# Billiards as a discrete variational problem

## Collision polygons and perimeter

Let $C$ be a smooth strictly convex closed plane curve, with a counterclockwise arclength parametrization $\gamma(s)$ of period $L$. A billiard path moves along straight segments and reflects by preserving the tangential velocity component and reversing the normal component. At unit speed, each segment’s length equals its flight time.

For a cyclic list of boundary positions with consecutive vertices distinct, define the discrete action

$$\mathcal A(s_0,\ldots,s_{n-1})=\sum_{j=0}^{n-1}H(s_j,s_{j+1}),\qquad H(s,r)=|\gamma(r)-\gamma(s)|,\quad s_n=s_0.$$

The term “discrete action” here means the sum of chord lengths, with no prescribed common flight time. It is the fixed-energy length functional, not a time-step approximation to a kinetic-energy action.

## Stationarity is the reflection law

Write $u_j=(\gamma(s_{j+1})-\gamma(s_j))/H(s_j,s_{j+1})$ for the unit vector along segment $j$, and $\tau_j=\gamma'(s_j)$. Differentiating with respect to one vertex gives

$$\frac{\partial\mathcal A}{\partial s_j}=(u_{j-1}-u_j)\cdot\tau_j.$$

Thus stationarity says that incoming and outgoing tangential components agree. Because both segments join points of a strictly convex boundary, their normal components have opposite signs; unit length then forces equal magnitudes. This is precisely specular reflection. Conversely, every non-grazing closed billiard polygon is a critical point of $\mathcal A$.

This calculation links §6 to §8: there the same endpoint derivatives, $p=-H_s$ and $p_1=H_r$, define an exact symplectic map; here their matching at adjacent chords is the discrete Euler–Lagrange equation

$$H_r(s_{j-1},s_j)+H_s(s_j,s_{j+1})=0.$$

## Extremal chords

A maximum of $H(s,r)$ exists by compactness and has distinct endpoints. Its two endpoint derivatives vanish, so the chord is normal to $C$ at both ends. Traversing it back and forth is a two-collision periodic orbit.

For a second construction assume strictly positive curvature. Let $h(\phi)$ be the support function relative to a fixed origin: the supporting line with outward unit normal $n(\phi)=(\cos\phi,\sin\phi)$ has equation $x\cdot n(\phi)=h(\phi)$. Its contact point is

$$x(\phi)=h(\phi)n(\phi)+h'(\phi)t(\phi),\qquad t(\phi)=(-\sin\phi,\cos\phi).$$

The width is $w(\phi)=h(\phi)+h(\phi+\pi)$. The opposite contact points satisfy

$$x(\phi)-x(\phi+\pi)=w(\phi)n(\phi)+w'(\phi)t(\phi).$$

At an extremum of width, $w'=0$, so the joining chord is normal at both endpoints. A minimum-width direction supplies a periodic chord. If width is nonconstant, its minimum and maximum directions give distinct chords; if width is constant, every direction does. This proves existence of at least two geometric two-bounce trajectories under the stated curvature assumption, without the source’s informal path-of-chords minimax construction.

## Maximal polygons and the minimax limit

For $n\geq3$, consider ordered vertices around $C$, allowing collisions of adjacent vertices in the compact closure. Perimeter attains a maximum. Such a maximum cannot have a repeated adjacent vertex: with a redundant vertex one can insert a new point on a boundary arc between two distinct neighbors, and strict convexity makes the sum of the two new chords strictly longer than the old chord. A configuration with all vertices equal has zero perimeter and cannot maximize. Therefore a maximum lies in the interior of the ordered configuration space and satisfies the reflection law at every vertex.

This establishes a winding-one stationary $n$-gon. Reversing its orientation gives the opposite directed orbit, not a second polygon. Finding a second geometric polygon, or imposing another winding class, requires a further minimax or twist argument. Birkhoff sketches the minimax route; [§9](periodic.html?mode=reinterpreted) treats the periodic-orbit consequence of the annulus theorem. We do not identify a reversed orbit with the second orbit supplied by that theorem without a separate counting argument.

A variational maximum does not by itself prove strict dynamical instability. On a circular table, all rotated copies of a regular polygon are stationary, and the linearized return has neutral directions. The broad stability sentence in the historical text needs nondegeneracy qualifications; it is retained in Original and Modernized and is not asserted here in that unrestricted form.

## Relation to the source

Pages 169–171 motivate billiards as a limiting geodesic problem, then discuss chords, triangles and general polygons. The discrete action makes the shared mechanism with the symplectic proof in §8 visible. The support-function argument supplies a precise alternative to the chord minimax sketch but assumes positive curvature and introduces convex-geometric notation. The flattening motivation is not promoted to a proved convergence theorem. Existence of a maximal ordered polygon is proved here; the second-polygon minimax argument and unrestricted stability assertions retain their explicit proof limits.
