<!-- passage:theorem -->
## 5. The geometric theorem of Poincaré.*

Poincaré showed that the existence of an infinite number of periodic orbits in the restricted problem of three bodies and other dynamical problems would follow at once from a certain geometric theorem to which the lemma of section 1 is intimately related.

For convenience we shall first state:

**Poincaré's Theorem.** *Given a ring $0<a\leq r\leq b$ in the $r,\theta$ plane ($r,\theta$ being polar coordinates), and a one-to-one, continuous, area-preserving transformation $T$ of the ring into itself, which advances points on $r=a$ and regresses points on $r=b$. Then there will exist at least two points of the ring invariant under $T$.*

* This section is essentially the same as section 34 of my paper, *Dynamical Systems with Two Degrees of Freedom*, Trans. Amer. Math. Soc., vol. 18 (1917).

<!-- passage:strata -->
We will indicate briefly the proof of this theorem.

Let us take $x=\theta,y=r^2$ as the rectangular coordinates of a point in the $x,y$ plane. The ring then appears as a strip $a^2\leq y\leq b^2$. The transformation $T$ of this strip advances points of the boundary $y=a^2$ to the right, and moves points on $y=b^2$ to the left. Moreover $T$ is area-preserving in the $x,y$ plane (for we have $2r\,dr\,d\theta=dx\,dy$), and displaces any two points which have the same ordinate and whose abscissas differ by a multiple of $2\pi$ in the same way.

Let us combine $T$ with a further transformation $T_\varepsilon$ which effects a translation of the $x,y$ plane in the direction of the $y$ axis through a distance $\varepsilon>0$. The transformation $T$ followed by $T_\varepsilon$ yields an area-preserving transformation $TT_\varepsilon$ which shifts the given strip into the strip $a^2+\varepsilon\leq y\leq b^2+\varepsilon$.

Suppose if possible that there exists no invariant point of $T$. There exists then a positive quantity $d$ such that all points are displaced at least a distance $d$ by the transformation $T$. Choose $\varepsilon$ less than $d$.

Consider now the narrow strip $a^2\leq y\leq a^2+\varepsilon$. By the transformation $TT_\varepsilon$ the lower edge of this strip is carried into the upper edge and the strip is carried into a second strip lying wholly above the first one save along the common edge. By a repetition of the transformation $TT_\varepsilon$, the second strip goes into a third, and so on.

By a continuation of this process, a series of strips is obtained forming consecutive strata. Each of these strata is unaltered by a shift of $2\pi$ to the right. This follows from the fact that $T$ and $T_\varepsilon$ are single-valued over the ring.

The images of these strata on the ring are a set of closed strata about the ring, all having equal area of course since $TT_\varepsilon$ is an area-preserving transformation in the $r,\theta$ as well as in the $x,y$ plane. Consequently some one of the strata on the infinite strip, say the $k$-th, must overlap the upper edge $y=b^2$.

<!-- passage:rotation -->
In the $x,y$ plane let $Q$ be a point of the upper edge of the $k$-th stratum for which $y$ is a maximum. Let $P$ be the point of $y=a^2$ from which $Q$ is derived by $k$-fold repetition of $TT_\varepsilon$, and let $P',P'',\cdots,P^{(k)}=Q$ denote the successive images of $P$ under the iteration of $TT_\varepsilon$. Draw the straight line $PP'$ which will obviously lie on the first stratum. The successive images of this line, $PP',P'P'',\cdots,P^{(k-1)}P^{(k)}$ will lie in the successive strata, and will have no points in common except that successive arcs have an end-point in common. Thus we get a single arc $PQ$, made up of all these lines, which is without double points.

Consider now a vector $LL'$ drawn from a point $L$ to its image $L'$ under $TT_\varepsilon$, of which the initial point moves from $P$ to $P^{(k-1)}$ along the line $PQ$.

![Historical diagram of the successive arcs and their endpoint images.](assets/source/figure-167.png)

The angle which this vector makes with the positive direction of the $x$ axis at the outset may be taken to be a positive acute angle, since the image $P'$ of $P$ lies to the right of and above $P$. When $L$ has varied to its final position $P^{(k-1)}$, the same angle lies in the second or third quadrant, since $P^{(k)}$ lies to the left of $P^{(k-1)}$, by the hypothesis of the theorem.

Our construction of the successive arcs $PP',P'P'',\cdots$ renders it apparent that as $L$ moves from $P$ to $P^{(k-1)}$, its image $L'$ moves along the same curve from $P'$ to $Q$. Therefore we see at once from the figure that $LL'$ has rotated through the least positive angle from the first direction to the second. If $L'$ be moved further in a vertical direction from $Q$ up to $y=b^2+\varepsilon$ the same statement will still hold of the standard curve described by $L$ provided that $\varepsilon$ is small, since $Q$ lies at most $\varepsilon$ above $y=b^2$.

Suppose now that $L$ moves in any manner from a point of $y=a^2$ to a point of $y=b^2$ in the given strip. The transformation $TT_\varepsilon$ leaves no points of this region invariant, so that the point $L$ will never coincide with $L'$. In the initial position for $L$ on $y=a^2$ the angle made by $LL'$ lies in the first quadrant. In the final position it lies in the second or third quadrant. But the total variation of angle during the variation of $L$ has been seen to be through the least positive angle in a special case. Since any one path of $L$ from $y=a^2$ to $y=b^2$ can be varied continuously into any other, the same must be true always.

Now let $\varepsilon$ approach zero. As $\varepsilon$ becomes smaller the vector $LL'$ continues to have a definite direction, since no invariant points under $TT_\varepsilon$ are present. By a limiting process we infer that, for the transformation $T$, the angular variation of $LL'$ is through the least positive angle consistent with its initial and final directions. It should be observed that for $L$ on $y=a^2$ the direction of $LL'$ is that of the positive $x$ axis, while on $y=b^2$ the direction is that of the negative $x$ axis.

Consider now the inverse transformation $T^{-1}$ which is of the same type as $T$ although it moves points on $y=a^2$ to the left, and points on $y=b^2$ to the right. By an entirely analogous argument to that given above we are led to infer that if a vector $LL^{(-1)}$ with end-point $L^{(-1)}=T^{-1}(L)$ has its initial point $L$ varied from a point of $y=a^2$ to a point of $y=b^2$, the total angular variation will be the least negative angle consistent with its initial and final positions.

But the total rotation of $LL^{(-1)}$ is precisely the same as that of the oppositely directed vector $L^{(-1)}L$ which joins a point $L^{(-1)}$ of $y=a^2$ to its image $L$ under $T$.

Hence by our earlier result the total angular variation of $L^{(-1)}L$ must also be the least positive angle consistent with the two positions. Thus we have been led to a contradiction, so that there must exist at least one invariant point.

<!-- passage:index -->
To prove that there are at least two invariant points we may adopt the method used by Poincaré.

Let the point $L$ describe the fundamental rectangle
$$0\leq x\leq2\pi,\qquad a^2\leq y\leq b^2,$$
in the $x,y$ plane, in a positive sense. It is obvious that the total rotation of the vector $LL'$ is $0$ over this circuit, since there is no rotation along $y=a^2$ or $y=b^2$, and the rotations along $x=0$ and $x=2\pi$ are the negatives of one another. But around a simple invariant point the rotation is $\pm2\pi$. Hence, according to obvious reasoning, there will either be at least two simple invariant points with rotations $+2\pi$ and $-2\pi$, or there will be at least one multiple invariant point. As a matter of fact, there will always be at least two geometrically distinct invariant points.*

* See my paper, *An Extension of Poincaré's Last Geometric Theorem*, Acta Mathematica, vol. 47 (1926).
