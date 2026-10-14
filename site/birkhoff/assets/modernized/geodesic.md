<!-- passage:interception -->
## A uniform bound before crossing

Let $S$ be a closed convex analytic surface, and let $g$ be the closed geodesic of minimax type supplied by Chapter V, §6. Assume $g$ is simple. Birkhoff asserts that there is $L>0$ such that every geodesic arc longer than $L$ either intersects $g$ or lies along it.

Suppose otherwise. There are arcs $g_n$ of lengths $L_n\to\infty$ avoiding $g$. Nearby geodesics cross $g$ repeatedly with bounded spacing, so these avoiding arcs cannot remain nearly coincident with $g$. The source invokes a variational fact: from any $P\in g$, the arc to the second conjugate point $P''$ covers at least one circuit of $g$. The reference is Birkhoff, *Dynamical Systems with Two Degrees of Freedom* (1917), §19.

Take midpoints of $g_n$. Compactness gives a convergent subsequence of points and tangent directions. Its limiting complete geodesic $h$ neither meets nor approaches $g$. In the component of $S\setminus g$ containing $h$, consider the region $s$ between $g$ and the boundary $\gamma$ made from $h$ and its limit points. The curve $g$ has geodesic curvature zero.

<!-- passage:polygon -->
## The geodesic-polygon contradiction

Choose nearby accessible points $N_1,N_2$ of $\gamma$, join them through the interior of $s$ by a short arc $N_1AN_2$, and also join them by the short geodesic $N_1GN_2$. If an interior point of the latter belongs to $\gamma$, the source argues that the whole short geodesic belongs to $\gamma$: otherwise $h$ would cross it and hence cross the chosen interior arc. If there is no such interior point, the geodesic lies in $s$ apart from its endpoints.

A cyclic chain $N_1,\ldots,N_n$ therefore produces a geodesic polygon lying in $s$ or on $\gamma$, with the side toward $\gamma$ on the left. Its angles on the $s$ side are at most $\pi$. Indeed, if the angle at $N_{i+1}$ exceeded $\pi$, the short chord $N_iN_{i+2}$ would still leave $\gamma$ to the left, enclosing $N_{i+1}$ by points outside $\gamma$, a contradiction.

The curvature formula used here is the geodesic-polygon case of Gauss–Bonnet: total curvature equals the sum of interior angles minus $(n-2)\pi$. Birkhoff concludes that the polygon construction gives curvature less than $2\pi$, in contradiction with the value $2\pi$ for either region bounded by the simple closed geodesic $g$. He thereby concludes the uniform-crossing assertion. This preserves his limiting-boundary and polygon argument; its boundary regularity is not replaced by an independent proof here.

<!-- passage:crossings -->
## The two crossing maps

Normalize the length of $g$ to $2\pi$. Write $s\in\mathbb R/2\pi\mathbb Z$ for arclength and $\beta\in(0,\pi)$ for the angle of a geodesic departing to one side of $g$. Thus $(s,\beta)$ lies in an annulus. The next crossing is in the opposite sense and gives a one-to-one analytic map

$$T:(s,\beta)\longmapsto(s_1^*,\beta_1^*).$$

Starting on that opposite side defines another map

$$T^*:(s^*,\beta^*)\longmapsto(s_1,\beta_1).$$

Both crossing spaces are represented by the same annulus in the source, but the star keeps track of which side is being crossed. Following both maps gives a return with the original crossing sense. This is Birkhoff's $TT^*$, written in his order of successive application.

<!-- passage:conjugate -->
## Boundary values and conjugate points

As the departure angle tends to zero, the next intersection approaches the first conjugate point along $g$ and the next angle tends to zero. The analogous statement holds near angle $\pi$. This is the source's argument for continuity at the two boundary circles.

The conjugate-point coordinate increases as the starting coordinate increases. Consequently $T$ and $T^*$ preserve orientation and each boundary circle. The source also uses the minimax information about three successive conjugate points spanning more than one circuit. The exceptional equality after one circuit is excluded in the final twist assertion.

<!-- passage:lift -->
## Fixing a real lift by self-crossings

Endpoint coordinates modulo $2\pi$ do not specify a real displacement. Birkhoff chooses a lift using the geodesic segment between successive crossings $P_0,P_1$ of $g$. Give a self-crossing sign $+1$ when the moving point crosses the previously traced branch from its left to its right, and sign $-1$ otherwise. Let $i$ be the sum of these signs.

Take the positively measured boundary arc from $P_0$ to $P_1$ and add $2\pi i$ to define the lifted endpoint displacement. The source argues that this varies continuously: an interior self-tangency cannot occur for a geodesic; when a positive or negative crossing passes through the endpoint, the integer correction changes in precisely the direction needed to continue the endpoint coordinate through a multiple of $2\pi$.

This “index” counts signed self-crossings of an arc; it is different from the fixed-point index in §11.

<!-- passage:twist -->
## The boundary twist argument

Deform a near-boundary segment with its endpoints fixed, allowing simple interior tangencies. Positive and negative self-crossings are then created or removed in pairs. Eliminating the negative crossings leaves a spiral whose index counts its positive circuits. Eliminating the positive crossings gives the corresponding negative count, together with the positive short boundary arc.

It follows, in Birkhoff's convention, that the displacement on the angle-zero boundary is the actual forward advance along $g$. On the angle-$\pi$ boundary it is the backward advance plus $2\pi$.

The source next considers advance $\alpha$ to the second conjugate point and writes

$$2k\pi<\alpha<2(k+1)\pi,\qquad k\ge1.$$

It invokes the rotation number of the orientation-preserving conjugate-point map to choose $k$ independently of the starting point. Retaining the source's notation for its endpoint function as $b(\beta,s)$, its resulting bounds are

$$2k\pi\le b(0,s)-s<2(k+1)\pi,$$

$$-2k\pi<b(\pi,s)-s\le-2(k-1)\pi.$$

Birkhoff concludes opposite boundary directions for $T$ or $T^*$, excluding the exceptional case in which the second conjugate point is the starting point after exactly one circuit. His reference for rotation numbers is *Surface Transformations and their Dynamical Applications* (1922), §45.

