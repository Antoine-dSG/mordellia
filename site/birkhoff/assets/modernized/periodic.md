<!-- passage:diameters -->
## Two-collision trajectories

Use the annulus map of §7 and its real lift $\widetilde T$, whose boundary displacements are $0$ and $2\pi$. Let $D(\theta,s)=(\theta,s+2\pi)$ be the deck translation. The lifted map $D^{-1}\widetilde T^2$ has boundary displacements $-2\pi$ and $2\pi$ and preserves the measure of §8.

Birkhoff applies his extended geometric theorem to obtain fixed points of opposite index. Here the fixed-point index is the winding number of the displacement vector around an isolated fixed point. The cited input is *An Extension of Poincaré's Last Geometric Theorem*, Acta Mathematica 47 (1926); the opposite-index conclusion is part of that external input, not deduced here from area preservation alone.

If $P$ is such a point, $T(P)$ is also fixed by $T^2$ and has the same index. Since $T$ has no interior fixed points, a pair of opposite-index points $P,Q$ gives four distinct points $P,T(P),Q,T(Q)$, hence two two-collision trajectories.

<!-- passage:reversal -->
## Reversal and winding

Reversing an $n$-collision trajectory with lifted advance $2k\pi$ gives advance $2(n-k)\pi$ and preserves its index. Restricting to $k\le n/2$ avoids counting the two orientations of the same harmonic polygon twice in the coprime cases considered below. Birkhoff identifies this reversibility with a factorization of $T$ into two involutions, that is, maps whose squares are the identity. He cites the analogous factorization used for symmetric periodic orbits in *The Restricted Problem of Three Bodies*, Rendiconti di Palermo 39 (1915), §14.

<!-- passage:existence -->
## Rational winding and the geometric theorem

For relatively prime integers $k,n$ with $0<k<n$, the map $D^{-k}\widetilde T^n$ has boundary displacements

$$-2k\pi,\qquad 2(n-k)\pi.$$

They have opposite signs. Applying the same extended theorem, Birkhoff obtains fixed points of opposite index. Their projected $T$-orbits have winding $k$ in $n$ collisions. To conclude that these are two distinct $n$-cycles, one must check least period and index along a cycle.

<!-- passage:least-period -->
## Least period and distinct cycles

Suppose $T^n(P)=P$ with lifted advance $2k\pi$, and also $T^m(P)=P$ for some $m<n$. Set $d=\gcd(m,n)$. Combining the two iterate relations gives $T^d(P)=P$. Since $T$ has no fixed point, $d\ne1$. Write $n=qd$, where $q>1$, and let $2f\pi$ be the advance under $T^d$. Then $k=qf$, so $q$ divides both $k$ and $n$, contradicting coprimality. Thus the $n$ points of the orbit are distinct.

The index of $T^n$ is the same at every point of this cycle. A fixed point of the opposite index therefore belongs to a different cycle. For $n>2$ and $k\le n/2$ coprime to $n$, Birkhoff concludes that there are two distinct harmonic $n$-gons of winding $k$, or four oriented motions after reversal. He does not develop the relation between index sign and stability here.

<!-- passage:stability -->
## The stable-orbit cross-reference

Birkhoff invokes §§2–3 for infinitely many periodic motions near a periodic motion of general stable type when the normal-form coefficient denoted there by $l$ is nonzero. He then asks whether the same method applies to the limiting motion along the boundary. This is a cross-reference followed by an exploratory argument, not a new local stability proof in §9.

<!-- passage:grazing -->
## The formal grazing calculation

Let $\kappa(s)$ be the curvature, with the boundary length still normalized to $2\pi$. For small $\theta$, the source states

$$\theta_1-\theta=\frac{2\kappa'}{3\kappa^2}\theta^2+a(s)\theta^3+\cdots,$$

$$s_1-s=\frac{2}{\kappa}\theta-\frac{4\kappa'}{3\kappa^3}\theta^2+b(s)\theta^3+\cdots.$$

The names $a,b$ replace the source's local coefficients $l,m$; this avoids confusing the cubic coefficient here with the stability coefficient mentioned above. Dividing the leading increments and treating them formally as differentials gives

$$\frac{d\theta}{ds}=\frac{\kappa'}{3\kappa}\theta,
\qquad \theta(s)=c\kappa(s)^{1/3}.$$

The constant $c$ is the value of $\theta$ at curvature one, if such a point is used for normalization. Birkhoff interprets these curves as approximately invariant and suggests adding higher-order terms to improve the approximation. He compares the limiting boundary motion to a stable periodic motion. These remain the source's formal inference and proposed improvement.

<!-- passage:collision-count -->
## The formal collision count

Treating the iteration count $N$ as continuous along the approximate curve gives

$$\frac{ds}{dN}=2c\kappa^{-2/3},\qquad
N=\frac{1}{2c}\int\kappa^{2/3}\,ds.$$

If $K=\max\kappa$, then $Nc>\pi K^{2/3}$ suffices for an advance greater than $2\pi$ in this model. Birkhoff regards this as making it highly probable that the lemma of §2 applies and that infinitely many periodic motions lie uniformly near the boundary. The calculation retains that provisional conclusion; it does not turn the differential model into a theorem about the discrete map.
