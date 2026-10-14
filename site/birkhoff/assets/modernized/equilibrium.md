<!-- passage:setup -->
## Periodic forcing and generalized equilibrium

A generalized equilibrium here is the solution $p=q=0$ of a periodically time-dependent system. A periodic point of the time-$2\pi$ map represents a motion whose period is an integer multiple of $2\pi$. “General stable type” refers to the nonresonant normal-form hypotheses used below, not a new assertion of nonlinear Lyapunov stability. The normal-form construction is an input from Chapter III.

Poincaré's last geometric theorem and modifications thereof* yield an additional instrument for establishing the existence of periodic motions. At the time of Birkhoff’s writing no proper generalization of this theorem to higher dimensions has been found, so that its application remains limited to dynamical systems with two degrees of freedom. It is our aim in this chapter to give some of the fundamental ideas involved in the theorem and its application.

It was established earlier that motion near to a periodic motion of a Hamiltonian or Pfaffian system, with $m$ degrees of freedom and not involving the time explicitly, can be reduced to that of a similar system with only $m-1$ degrees of freedom but with an independent variable involved of period $2\pi$. Here the periodic motion itself appears as generalized equilibrium. This reduction is accomplished by means of an analytic device (chapter IV, section 1).

In the present section we shall take up the question of the existence of motions with period $2k\pi$ near the position of generalized equilibrium for a single degree of freedom. We shall prove the existence of infinitely many such nearby periodic motions in the general stable case by a process of reasoning which, while not employing Poincaré's geometric theorem explicitly, is precisely that which establishes the theorem in certain simple cases. Later (section 3) these results are interpreted with reference to the original dynamical problem with two degrees of freedom.

* See Birkhoff’s paper, *An Extension of Poincaré's Last Geometric Theorem*, Acta Mathematica, vol. 47 (1926).

<!-- passage:return -->
## The time-period map
Let the single pair of variables be $p,q$, so that the Hamiltonian function $H$ involves $p,q,t$, being periodic in $t$ of period $2\pi$, and vanishes at the origin $p=q=0$, together with its first partial derivatives, for all values of $t$.

If then $(p_0,q_0)$ is any point near to the origin, there is a unique solution
$$p=f(p_0,q_0,t),\qquad q=g(p_0,q_0,t)$$
which for $t=0$ takes on the values $p_0,q_0$, and which is analytic in $p_0,q_0,t$ for $t$ arbitrarily large and $p_0,q_0$ sufficiently small. Let $p_1,q_1$ denote the values of $p,q$ after a complete period $2\pi$. Evidently we have
$$p_1=f(p_0,q_0,2\pi),\qquad q_1=g(p_0,q_0,2\pi)$$
where $f$ and $g$ are analytic in $p_0,q_0$, and vanish with these variables.

In this way a transformation $T$ is defined, of the same nature as the transformation of the surface of section obtained in the preceding chapter (section 10). For if we write $r=t$, the pair of Hamiltonian equations may be replaced by the equivalent set
$$\frac{dp}{dt}=-\frac{\partial H}{\partial q},\qquad \frac{dq}{dt}=\frac{\partial H}{\partial p},\qquad \frac{dr}{dt}=1,$$
in which $H$ is a function of $p,q,r$ of period $2\pi$ in $r$. Here the manifold of states of motion is the three-dimensional $p,q,r$ space in which the $r$ axis represents a periodic motion, namely that corresponding to generalized equilibrium; it must not be forgotten that $r$ is an angular variable. Now $r=0$ will serve as a surface of section according to our earlier work, although here we are limited to a certain neighborhood. A point $(p_0,q_0,0)$ in this surface of section is taken along its trajectory to $(p_1,q_1,2\pi)$, that is, to $(p_1,q_1,0)$. Thus the transformation written above is indeed a transformation $T$ of a surface of section $S$ which is, however, only locally defined. Such ‘local surfaces of section’ can of course be constructed near a periodic motion in any dynamical problem by merely taking an element of surface which intersects but is not tangent to the corresponding trajectory in the manifold of states of motion.

<!-- passage:area -->
## Area preservation by flux
Now the fluid motion defined by the above three equations is that of an incompressible fluid, since the divergence of the right-hand members is $0$. Consequently if we follow any tube of fluid made of sections of stream lines between the parallel planes $r=0$ and $r=2\pi$, which will move constantly with unit velocity in the $r$ direction, we infer that the loss of volume at one base in time $\Delta t$ is nearly $\sigma_0\Delta t$ ($\sigma_0$, area of first base), while the equal gain at the other is nearly $\sigma_1\Delta t$ ($\sigma_1$, area of second base). By allowing $\Delta t$ to approach $0$ we infer that $\sigma_0=\sigma_1$.

Since $\sigma_0$ is an arbitrary area in $r=0$, it is clear that $T$ must be an area-preserving transformation of the variables $p_0,q_0$. This important property of $T$ corresponds to a general property of the surface transformations associated with dynamical problems.

<!-- passage:normal -->
## Finite normal form and the twist lemma
It is necessary now to state the conditions to be imposed upon the generalized equilibrium, with the aid of which the conclusion stated may be established.

We assume in the first place that the generalized equilibrium is of general stable type, and therefore completely stable. The significance of the normal form (chapter III, section 9) is that the solution may be written
$$p=p_0e^{M(p_0q_0)t}+\Phi,\qquad q=q_0e^{-M(p_0q_0)t}+\Psi,$$
in properly chosen conjugate variables $p,q$. Here $\Phi,\Psi$ are given as convergent power series in $p_0,q_0$ with initial terms of arbitrarily high degree $2\mu+1$, and with all coefficients analytic functions of $t$; these series converge absolutely and uniformly for any fixed range of values for $t$, such as $|t|\leq2\pi$, when $p_0,q_0$ are small. The function $M$ can be taken as a polynomial of degree not more than $\mu$ in the product $p_0q_0$, with purely imaginary constant coefficients, of the form
$$\lambda+lp_0q_0+\cdots+sp_0^\mu q_0^\mu$$
with $\lambda$ the multiplier. By the hypothesis of stability $\lambda/i$ is not rational, and in particular is not $0$.

Our second assumption is that $l$ is not $0$. In case $l$ vanishes but some other coefficient in $M$ is not $0$, essentially the same argument would apply. Thus the only case of failure is that in which the formal series $M$ in the complete normal form reduces to a constant $\lambda$. This is a highly degenerate case, and actual examples can be constructed to show that an analogous conclusion cannot then be drawn.

The normal form gives a means of studying the transformation $T$. The property of the transformation $T$ necessary for our present purposes is embodied in the following lemma whose proof is deferred to the next section:

**Lemma.** *For $l\ne0$, upon suitable choice of the variables $p,q$, the positive quantity $\varepsilon$ may be taken arbitrarily small, and then the integer $n$ so large that any transformation $T^\nu$ $(\nu\leq n)$ takes the circle $r\leq\varepsilon$ about the fixed point $r=0$ into a region within the circle of radius $2\varepsilon$, while the angular displacement effected by $T^n$ increases from $n\lambda/i$ with $r$ along any radial line for $r\leq\varepsilon$, being at least $2\pi$ greater for $r=\varepsilon$ than for $r=0$.*

<!-- passage:intersection -->
## An intersection forces a periodic point
Let $r,\theta$ be polar coordinates and let $(r_n,\theta_n)$ denote the iterate of $(r,\theta)$ under $T^n$, where the rectangular coordinates $p,q$, the radius $\varepsilon$, and the integer $n$ are selected as in the lemma. For any fixed $\theta_0$ the difference $\theta_n-\theta_0$ will then increase from $n\lambda/i$ at $r=0$ to a quantity at least $2\pi$ greater at $r=\varepsilon$. Hence there will be a unique solution of the equation
$$\theta_n-\theta_0=2k\pi$$
along a fixed radial ray, where $2k\pi$ is the least integral multiple of $2\pi$ exceeding $n\lambda/i$. Hence the analytic curve $C$ given by this equation is met once and only once by each radial ray.

Now let us consider the image $C_n$ of this curve under the transformation $T^n$; the curve $C_n$ intersects $C$ at some point $Q$, since if $C_n$ is wholly within $C$ or outside $C$, $T^n$ would not be area-preserving in the original variables. The point $Q$ is obtained from some point $P$, also on $C$, by the transformation $T^n$. Moreover $P$ and $Q$ have the same $\theta$, by definition of $C$. Thus $P$ and $Q$ must coincide, and $P$ is invariant under $T^n$. Since $\varepsilon$ is arbitrarily small, we obtain the result stated:

*In the case of generalized equilibrium of general stable type for a Hamiltonian problem with one degree of freedom $(l\ne0)$, there exist infinitely many periodic motions in the vicinity.*
