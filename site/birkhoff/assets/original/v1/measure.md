<!-- passage:map -->
## 7. The corresponding transformation $T$.

We propose next to set up a ring transformation $T$ associated with the billiard ball problem, and to show how the geometric theorem of Poincaré in its first form leads to the conclusion deduced above. The reduction to a ring transformation is of fundamental theoretic importance, quite aside from the relation to the question of periodic motions. It should be noted also that, in the cases of most interest like the restricted problem of three bodies, the method of reduction to a ring transformation and application of the geometric theorem of Poincaré is available for the treatment of the periodic motions, while the maximum-minimum method has not as yet been shown to be applicable.

To begin with we suppose the length of $C$ to be $2\pi$ and to be measured from a fixed point to a variable point $P$ by an angular coördinate $\varphi$.

At $P$, taken as the point of projection of the billiard ball, let $\theta$ denote the angle between the positive direction of the tangent and the direction of projection. The variable $\theta$ varies between $0$ and $\pi$ only. These coördinates $\theta,\varphi$ suffice to represent all possible states of projection unambiguously. If $\varphi$ be taken as an angular coördinate in the plane, while $\theta$, augmented by a constant, say $\pi$, be taken as a radial coördinate, the set of values $(\theta,\varphi)$ is represented on a ring bounded by concentric circles of radii $\pi$ and $2\pi$ respectively, namely the circles $\theta=0$ and $\theta=\pi$.

Consider now a definite state of projection at $P$ with given $\theta,\varphi$. The billiard ball leaves the table at $P$, to strike it again at $P_1$, there to be projected in a state $(\theta_1,\varphi_1)$, say, and so forth indefinitely. If $C$ is an analytic curve, as we assume it to be, the correspondence between $\theta,\varphi$ and $\theta_1,\varphi_1$ is evidently one-to-one and analytic within the ring. When $\theta$ is nearly $0$ or $\pi$, the ball is projected at a slight angle to the edge, and strikes it again at a nearby point with $\theta$ nearly $0$ or $\pi$ as the case may be. Hence the points on the bounding circles correspond to themselves with $\theta_1=\theta$, $\varphi_1=\varphi$.

<!-- passage:lift -->
One further remark needs to be made about the correspondence along the two boundaries of the ring. If we think of each point $(\theta,\varphi)$ as being carried into $(\theta_1,\varphi_1)$ by a transformation or deformation of the ring, this transformation $T$ will effect a certain number of complete rotations of the inner circle, and also of the outer circle, since the points of these boundaries are invariant as just seen. We may arbitrarily regard the inner circle as having undergone no rotation, but the same will not then be true of the outer circle, which can at once be shown to have undergone a single complete revolution in the positive sense. For let the projection angle $\theta$, for a given point $P$ and corresponding fixed $\varphi$, vary from $0$ to $\pi$. It is obvious that then $\theta_1$ will increase from $0$ to $\pi$ while $\varphi$ increases by $2\pi$ since the point $P_1$ makes a complete circuit of $P$ in a positive sense. In other words, the transformation $T$ takes radial segments across the ring into curves starting at the same point of the inner circle, but winding around the ring just once while crossing it. Hence the outer boundary has undergone a single positive revolution under the transformation $T$.

<!-- passage:cycles -->
Suppose now that we have a periodic motion, for example that corresponding to one of the harmonic triangles taken in a positive sense. It is evident that the transformation $T$ of the ring takes the point of the ring representing the state of projection at the first vertex into that at the second; and likewise takes the state for the second vertex into that for the third, and that for the third vertex into the first. Thus when $T$ is applied, the triple of points on the ring is cyclically advanced, and each point of the triple is unaltered by the application of the third iterate $T^3$ of $T$. Conversely, to any triple with this property, or to any point invariant under $T^3$, together with its images under $T$ and $T^2$, corresponds a motion belonging to a harmonic triangle. Evidently then, from considerations advanced earlier, there are at least four such triples. It is obvious that there can be no invariant points under $T$ itself because $\varphi$ is increased but by less than $2\pi$.

In this way the search for harmonic polygons and the allied periodic motions in the billiard ball problem resolves itself into the determination of sets of distinct points $P_1,\ldots,P_n$ cyclically advanced by $T$, so that in general $T^n(P_i)=P_i$. More generally, each and every interesting property of the motion of the billiard ball is mirrored in a corresponding property of the transformation $T$. Thus the dynamical problem is effectively reduced to that of a particular transformation of a circular ring into itself.

<!-- passage:area -->
## 8. Area-preserving property of $T$.

There is a further property of the transformation

$$T:\quad \theta_1=f(\theta,\varphi),\quad \varphi_1=g(\theta,\varphi),$$

which plays a fundamental part in applying the geometric theorem of Poincaré: the double integral $\iint\sin\theta\,d\theta\,d\varphi$ taken over any area $\sigma$ of the ring has the same value as over the image of $\sigma$ under $T$ and its iterates. This is essentially an area-preserving property in modified coördinates.

<!-- passage:recurrence -->
Before passing to the entirely elementary proof of this fact, one immediate application may be cited in justification of the earlier statement as to the fundamental theoretic importance of the ring transformation. Since the integral evaluated over $\sigma_1,\sigma_2\cdots$, has the same value, and since its value over the entire ring is finite, being $4\pi$, some two of the images $\sigma_i$ and $\sigma_j$ overlap. Employing the inverse transformation we infer that $\sigma_{i-1}$ and $\sigma_{j-1}$ also overlap, and thus finally that $\sigma_{i-j}$ and $\sigma_0$ overlap $(i>j)$. But, interpreted for the billiard ball problem, this means that the ball can be projected very nearly with arbitrary position and direction to return subsequently to nearly the same position and direction. As elaborated by Poincaré,* this chain of reasoning leads to the conclusion that the ‘probability’ is unity that an arbitrary motion returns infinitely often to the neighborhood of its initial state. He called this property of the dynamical system ‘stability in the sense of Poisson’.

<aside class="historical-note">* See his <em>Méthodes nouvelles de la Mécanique céleste</em>, vol. 3, chap. 26.</aside>

<!-- passage:jacobian -->
The proof that the double integral is invariant depends on an explicit evaluation of the determinant

$$J=\frac{\partial\theta_1}{\partial\theta}\frac{\partial\varphi_1}{\partial\varphi}-\frac{\partial\theta_1}{\partial\varphi}\frac{\partial\varphi_1}{\partial\theta}.$$

In fact, if $\iint M(\theta,\varphi)\,d\theta\,d\varphi$ is invariant we have

$$\iint M(\theta_1,\varphi_1)\,d\theta_1\,d\varphi_1=\iint M(\theta,\varphi)\,d\theta\,d\varphi$$

where the variables $\theta_1,\varphi_1$ range over the region $\sigma_1$, just as $\theta,\varphi$ do over $\sigma$. But according to the fundamental theorem for change of variables, the change of variables $T$ gives the integral on the left the form

$$\iint_\sigma M(\theta_1,\varphi_1)J\,d\theta\,d\varphi.$$

Comparing this expression and the integral on the right, which are both integrals over the same arbitrary region $\sigma$, we deduce the functional relation

$$M(\theta_1,\varphi_1)J=M(\theta,\varphi)$$

as the necessary and also sufficient condition for invariance. Hence to establish that $\iint\sin\theta\,d\theta\,d\varphi$ is invariant, we need only prove

$$J=\sin\theta/\sin\theta_1.$$

<!-- passage:angles -->
Let

$$x=F(\varphi),\quad y=G(\varphi)$$

be the equations of $C$ in rectangular coördinates, so that, if $\tau$ denotes the angle between the positive $x$ axis and the positive tangential direction at a point of $C$, we have

$$\tau=\tan^{-1}\frac{G'(\varphi)}{F'(\varphi)}.$$

Similarly let $\tau_1$ denote the like angle at the transformed point, which will be given by the same expression save that $\varphi$ is replaced by $\varphi_1$. Finally let $\alpha$ designate the angle between the positively directed axis and the direction of initial projection (figure).

<figure class="historical-figure"><img src="assets/source/figure-175.png" alt="Birkhoff's figure: the chord direction α and tangent directions τ and τ₁ determine θ and θ₁."></figure>

It is evident that the following two relations will hold

$$\theta=\alpha-\tau,\qquad \theta_1=\tau_1-\alpha.$$

Substituting in the above value for $\tau$ and the analogous value for $\tau_1$, and also substituting in for $\alpha$ the value

$$\tan^{-1}\frac{G(\varphi_1)-G(\varphi)}{F(\varphi_1)-F(\varphi)},$$

evident by inspection, we obtain the explicit formulas

$$T:\begin{cases}\displaystyle\theta=\tan^{-1}\frac{G(\varphi_1)-G(\varphi)}{F(\varphi_1)-F(\varphi)}-\tan^{-1}\frac{G'(\varphi)}{F'(\varphi)}=L(\varphi,\varphi_1),\\[6pt]\displaystyle\theta_1=\tan^{-1}\frac{G'(\varphi_1)}{F'(\varphi_1)}-\tan^{-1}\frac{G(\varphi_1)-G(\varphi)}{F(\varphi_1)-F(\varphi)}=M(\varphi,\varphi_1).\end{cases}$$

These two equations define the transformation $T$ from $(\theta,\varphi)$ to $(\theta_1,\varphi_1)$. Taking differentials, we find

<!-- passage:determinant -->
$$d\theta=L_\varphi\,d\varphi+L_{\varphi_1}\,d\varphi_1,\qquad d\theta_1=M_\varphi\,d\varphi+M_{\varphi_1}\,d\varphi_1,$$

whence at once

$$d\theta_1=\frac{M_{\varphi_1}}{L_{\varphi_1}}\,d\theta+\left(M_\varphi-\frac{M_{\varphi_1}L_\varphi}{L_{\varphi_1}}\right)d\varphi,$$

$$d\varphi_1=\frac{1}{L_{\varphi_1}}\,d\theta-\frac{L_\varphi}{L_{\varphi_1}}\,d\varphi.$$

This gives

$$J=-\frac{M_\varphi}{L_{\varphi_1}}=-\frac{[F(\varphi_1)-F(\varphi)]G'(\varphi)-[G(\varphi_1)-G(\varphi)]F'(\varphi)}{[F(\varphi_1)-F(\varphi)]G'(\varphi_1)-[G(\varphi_1)-G(\varphi)]F'(\varphi_1)}.$$

But $F(\varphi_1)-F(\varphi)$, $G(\varphi_1)-G(\varphi)$ are proportional to $\cos\alpha$, $\sin\alpha$ respectively, while also

$$F'(\varphi)=\cos\tau,\quad G'(\varphi)=\sin\tau,\quad F'(\varphi_1)=\cos\tau_1,\quad G'(\varphi_1)=\sin\tau_1,$$

so that finally we obtain

$$J=\frac{\sin(\alpha-\tau)}{\sin(\tau_1-\alpha)}=\frac{\sin\theta}{\sin\theta_1}$$

as was stated.
