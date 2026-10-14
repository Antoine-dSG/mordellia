<!-- passage:interception -->
## 10. The geodesic problem. Construction of a transformation $TT^*$.

We turn our attention next to the problem afforded by the geodesics on an analytic surface. In order to obtain as concrete results as possible, we shall restrict the surface $S$ to be closed and convex, although it is evident that these limitations are not altogether essential for the argument which follows.

We have already established the existence of at least one closed geodesic $g$ of minimax type (chapter V, section 6), which we shall assume to be without double points. Our first assertion is that there exists a positive quantity $L$ so great that any geodesic arc of length exceeding $L$ intersects $g$ at least once (or falls along $g$). In the contrary case there would exist a sequence of geodesic arcs $g_n$ of length $L_n$ with $\lim L_n=+\infty$, such that each arc $g_n$ does not meet $g$. This fact would require that for $L_n$ large enough no part of $g_n$ is nearly coincident with $g$, since nearby geodesics meet a closed geodesic of minimax type in a succession of points separated by arcs of limited length; more precisely, it may be proved that if $P$ is any point of $g$ and $P''$ is its second conjugate point in the sense of the calculus of variations, then the arc $PP''$ constitutes at least one complete circuit of $g$.†

<aside class="historical-note">† For a proof see my paper, <em>Dynamical Systems with Two Degrees of Freedom</em>, Trans. Amer. Math. Soc., vol. 18 (1917), in particular section 19.</aside>

Hence if we let $P_n$ be the mid-point of $g_n$, the sequence of points $P_n$ will have a limiting point $P$ not on $g$, and the geodesic $g_n$ will have at least one limiting direction at $P$, such that the complete geodesic $h$ through $P$ in this direction fails to meet $g$ and indeed nowhere approaches $g$.

Consider now that part of the surface $S$ (which is divided by $g$ in two parts) upon which $h$ lies, and in particular the part of $S$ lying between $g$ and $h$. One boundary of this region $s$ is $g$, of geodesic curvature $0$ everywhere, while the other boundary $\gamma$ consists of part or all of $h$, and of its limit points.

<!-- passage:polygon -->
Let $N_1$ and $N_2$ be two nearby accessible points of the boundary $\gamma$ so obtained, so that a short curvilinear arc $N_1AN_2$ exists in the region $s$ with all of its interior points not on the boundary. Consider also the short geodesic arc $N_1GN_2$. Then $N_1AN_2GN_1$ delimits a region $\sigma$.

If any interior point of $N_1GN_2$ is part of the boundary $\gamma$, all of $N_1GN_2$ must be part of it; otherwise the curve $h$ would cut across $N_1GN_2$ and so certainly intersect $N_1AN_2$, contrary to hypothesis. In this case $N_1GN_2$ is a part of the boundary $\gamma$ and the region $\sigma$ lies entirely in $s$. If there is no such interior point, the geodesic arc $N_1GN_2$ lies inside of $s$ except at $N_1$ and $N_2$. Hence if we surround the boundary $\gamma$ by a cyclical chain of nearby points

$$N_1,N_2,\ldots,N_n,$$

the short distinct geodesic arcs

$$N_1N_2,N_2N_3,\ldots,N_nN_1$$

lie inside of $s$ or coincide with $\gamma$. We assume that this chain encircles $\gamma$ in a positive angular sense: in this event, the part toward $\gamma$ will lie everywhere to the left.

Now in the geodesic polygon so formed, the angle in $s$ at any vertex will be less than or equal to $\pi$. For if the angle at $N_{i+1}$, say, exceeds $\pi$ and we consider the short geodesic arc $N_iN_{i+2}$, it is apparent that $\gamma$ lies to the left of $N_iN_{i+2}$ also, so that $N_{i+1}$ is completely encircled by points not on $\gamma$ which is impossible.

But the integral curvature of the part of $S$ bounded by this polygon will be precisely the sum of these $n$ interior angles diminished by $(n-2)\pi$ by a well known formula, and so will be less than $2\pi$, which is impossible since the integral curvature of either part of $S$ bounded by $g$ is exactly $2\pi$ by the same formula.

Thus a contradiction has been obtained, so that the original assertion must be true.

<!-- passage:crossings -->
We now introduce parameters as follows. Let an arbitrary directed geodesic $f$ cut the directed geodesic $g$ in a point $P$. The position of $P$ may be measured by means of the arc length $\theta$ from a fixed point $P_0$ of $g$; if the total length of $g$ be taken as $2\pi$ by an appropriate choice of a unit of length, the variable $\theta$ is a periodic variable of period $2\pi$. Furthermore let $\varphi$ denote the angle between the positive directions of $g$ and $f$ at the point $P$ so that $0<\varphi<\pi$.

The next crossing of $g$ by $h$ will be in the opposite sense, and the corresponding $\theta_1^*$ and $\varphi_1^*$ will vary analytically with $\theta$ and $\varphi$. Thus a transformation $T$ is defined

$$T:\quad\varphi_1^*=f(\varphi,\theta),\quad\theta_1^*=g(\varphi,\theta),$$

which takes the ring

$$R:\quad0<\varphi<\pi,\quad0\le\theta<2\pi$$

($\varphi,\theta$, polar coördinates) into itself.

Similarly a crossing in the opposite sense at $\varphi^*,\theta^*$ will be followed by a crossing $\varphi_1,\theta_1$ thus defining a second one-to-one, analytic transformation

$$T^*:\quad\varphi_1=f^*(\varphi^*,\theta^*),\quad\theta_1=g^*(\varphi^*,\theta^*)$$

of $R$ into itself.

<!-- passage:conjugate -->
Along and near the boundaries of $R$, $T$ and $T^*$ are to be regarded as continuous. This fact may be seen as follows: If a geodesic $f$ near to $g$ intersects $g$ at a small angle $\varphi$ with given $\theta$, then of course $f$ will intersect later at a small angle $\varphi_1^*$ with coördinate $\theta_1^*$ nearly that of the conjugate point to the first point of intersection, as was observed above. Obviously this ensures the specified continuity. Furthermore, we know that three successive conjugate points correspond to an arc of more than one complete cycle of $g$.

If we have $\varphi=0$ or $\pi$ we have respectively $\varphi_1^*=0$ or $\pi$, while if $\varphi^*=0$ or $\pi$ we have likewise $\varphi_1=0$ or $\pi$. Furthermore as $\theta$ or $\theta^*$ increases along a boundary so will $\theta_1^*$ or $\theta_1$; in fact it has been noted that if $\theta$ is the coördinate of $P$, then $\theta_1^*$ is the coördinate of the conjugate point $P'$. Hence $T$ and $T^*$ are direct transformations leaving the outer and inner boundaries of $R$ invariant.

<!-- passage:lift -->
It is now desirable to consider somewhat more in detail the nature of $T$ and $T^*$ along the boundaries. These transformations are evidently not determined up to a complete rotation, and it is desirable to make a convention which eliminates this arbitrary factor, and enables us to compare the transformations along the inner and outer boundaries. Let us consider any directed geodesic arc $P_0P_1$ of $f$ between two successive crossings $P_0$ and $P_1$ of $g$ by $f$, and let us define a double point $Q$ of $P_0P_1$ as positive if a moving point in describing the arc $P_0P_1$ passes over the arc $P_0Q$ already described at $Q$, from the left to the right side; and as negative in the contrary case. The ‘index’ of $P_0P_1$ may be defined as the difference between the number of positive and the number of negative crossings within $P_0P_1$. Let us define the value $\theta_1^*$ of $\theta$ at $P_1$ as that corresponding to the positively taken arc $P_0P_1$ increased by $2\pi i$ where $i$ is the index.

<figure class="historical-figure"><img src="assets/source/figure-183.png" alt="Birkhoff's figure of a positive self-crossing Q of a geodesic arc from P₀ to P₁."></figure>

We can now show that, as thus defined, $\theta_1^*$ varies continuously with $\theta$. In fact as $\theta$ and $\varphi$ change, no new crossings can be introduced within $P_0P_1$ inasmuch as a geodesic arc cannot be tangent to itself. If a positive crossing is introduced at $P_1$, evidently $\theta_1^*$ increases through an exact multiple of $2\pi$ as it should. If a negative crossing is introduced, $\theta_1^*$ decreases similarly. Thus the convention is appropriate to all cases.

<!-- passage:twist -->
Now it is also evident that if a geodesic arc $P_0P_1$ near to $g$ be continuously deformed near $g$ while not maintaining its geodesic character, with $P_0$ and $P_1$ fixed, and only simple interior tangency allowed, then positive and negative crossings appear in or disappear in associated pairs. Thus if the arc $P_0P_1$ be deformed into a spiral so as to eliminate all negative crossings, it is plain that the index will equal the number of apparent circuits of $g$ made by the spiral. In this case the increase in $\theta$, namely $\theta_1^*-\theta$, will be measured by the arc length along the curve $g$, according to our convention. However if the positive crossings are eliminated, the convention gives $2\pi i$ $(i\le0)$ increased by the angular value of the short positive arc $P_0P_1$ as the difference $\theta_1^*-\theta$, and hence this difference exceeds the arc length $P_0P_1$ by $2\pi$.

Consequently it is seen that $\theta_1^*-\theta$ is measured in the sense of the convention by the actual increase in $\theta$ along $g$ for $\varphi=0$, while, for $\varphi=\pi$, $\theta_1^*-\theta$ is measured by the algebraic increase along the arc (actually a decrease) augmented by $2\pi$ since $P_0P_1$ is to be taken positively.

Now in going from a point $P$ to its second conjugate point $P''$ with $\varphi=0$, $\theta$ increases by an amount $\alpha$,

$$2k\pi<\alpha<2(k+1)\pi,$$

where $k\ge1$ is independent of the position of $P$; in fact the one-to-one, direct transformation of the points of $g$ from $P$ to $P''$ defines a rotation number‡ which lies between $2k\pi$ and $2(k+1)\pi$ with $k\ge1$, because of a property of the conjugate points along a geodesic of minimax type already specified. Hence we infer

$$2k\pi\le g(0,\theta)-\theta<2(k+1)\pi.$$

Similarly if we consider $\varphi=\pi$, then $\theta_1^*-2\pi$ is diminished by a like amount so that we find

$$-2k\pi<g(\pi,\theta)-\theta\le-2(k-1)\pi.$$

It follows that the transformation $T$ (or $T^*$) advances points in opposite angular directions along the two boundaries of $R$, at least if the exceptional case of a second conjugate point coincident with the initial point after a single circuit be excluded.

<aside class="historical-note">‡ For definition and short discussion of the Poincaré rotation numbers, see my paper, <em>Surface Transformations and their Dynamical Applications</em>, Acta Mathematica, vol. 43 (1922), section 45.</aside>
