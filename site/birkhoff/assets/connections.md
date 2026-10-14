# Connections to Hamiltonian dynamics



## 1. Symplecticity of Hamiltonian return maps

We ask which two-form a return map preserves when a smooth Hamiltonian trajectory is sampled on a section of a fixed energy surface.

Let $n\ge2$ and let $M$ be a smooth $2n$-dimensional manifold with symplectic form $\omega$, and let $\mathcal H:M\to\mathbb R$ be a smooth time-independent Hamiltonian. Define its vector field $X_{\mathcal H}$ by $\omega(X_{\mathcal H},\cdot)=d\mathcal H$, and write its flow as $\phi^t$. Since $d\omega=0$, Cartan's formula gives $\mathcal L_{X_{\mathcal H}}\omega=d(d\mathcal H)=0$, where $\mathcal L$ denotes the rate of change of the form under the flow. Thus the flow preserves $\omega$. Fix $e\in\mathbb R$. On a regular energy level $E=\mathcal H^{-1}(e)$ (meaning $d\mathcal H\ne0$ there), the restricted form has kernel $\mathbb R X_{\mathcal H}$. Choose a smooth $(2n-2)$-dimensional submanifold $\Sigma\subset E$ transverse to the flow, meaning $T_zE=T_z\Sigma\oplus\mathbb R X_{\mathcal H}(z)$ at each $z\in\Sigma$. The restriction $\omega_\Sigma=\omega|_{T\Sigma}$ is consequently nondegenerate and closed.

On an open set $U\subset\Sigma$ where the first positive return time $\tau:U\to(0,\infty)$ exists and is smooth, define $P:U\to\Sigma$ by $P(z)=\phi^{\tau(z)}(z)$. **Proposition.** The return map satisfies $P^*\omega_\Sigma=\omega_\Sigma|_U$.

**Proof.** For $z\in U$ and $u\in T_z\Sigma$, differentiating the variable return time gives

$$D_zP(u)=D_z\phi^{\tau(z)}(u)+X_{\mathcal H}(Pz)\,d\tau_z(u).$$

The extra terms disappear when pairing two such vectors with $\omega$: the transported vectors are tangent to $E$, and $\omega(X_{\mathcal H},\cdot)=d\mathcal H$ vanishes there. Thus $P^*\omega_\Sigma=\omega_\Sigma|_U$. This is a local statement on the return domain; a global section or finite return time for every orbit has not been assumed. See [Bessa–Lopes Dias, §2.1](https://arxiv.org/pdf/1107.4286).

**Application to billiards.** In the plane, write position as $q$ and velocity as $v$; for unit mass, free flight has Hamiltonian $|v|^2/2$ and canonical one-form $v\cdot dq$. Fixing unit speed leaves a three-dimensional energy surface; a collision section has two dimensions. Restricting that one-form to collision states gives $p\,ds$ because $p=v\cdot\tau(s)=\cos\theta$, with $\tau(s)$ the boundary tangent defined above. Reflection preserves this tangential component. The chord proof establishes the collision map's exact symplecticity directly. A reflecting wall is not a smooth Hamiltonian vector field across impact, so the smooth-flow theorem alone does not justify it. Non-grazing collisions and a smooth boundary remain essential.

## 2. Maps defined by a discrete action

The question is how a function of two positions defines a symplectic map and a variational equation for its iterates.

Fix an integer $m\ge1$. Let $q,Q\in\mathbb R^m$ denote initial and final positions in local coordinates, and let $S:V\to\mathbb R$ be smooth on an open set $V\subset\mathbb R^m\times\mathbb R^m$. Write $D_1S$ and $D_2S$ for its derivatives with respect to the first and second position variables. Assume its mixed Hessian is invertible: $D_{12}S=(\partial^2S/\partial q_i\partial Q_j)$. Define initial and final momenta by $p=-D_1S$, $P=D_2S$. The implicit function theorem locally defines a map $F:U_0\to U_1$, $F(q,p)=(Q,P)$, between open subsets of $\mathbb R^{2m}$. On the independent-position domain $V$,

$$dS=-p\,dq+P\,dQ.$$

Products pair components: $p\,dq=\sum_i p_i\,dq_i$. Composing $S$ with $(q,p)\mapsto(q,Q(q,p))$ gives $G:U_0\to\mathbb R$. Then $F^*\lambda-\lambda=dG$ for $\lambda=\sum_i p_i\,dq_i$, so $F$ preserves $-d\lambda=\sum_i dq_i\wedge dp_i$. For an integer $N\ge2$ and a sequence $q_0,\ldots,q_N$ with every adjacent pair in $V$ and fixed endpoints, stationarity of the discrete action $\sum_{k=0}^{N-1}S(q_k,q_{k+1})$ under variation of the intermediate positions gives

$$D_2S(q_{k-1},q_k)+D_1S(q_k,q_{k+1})=0,\qquad 1\le k\le N-1.$$

This matches incoming and outgoing momenta. For billiards, $S(s,s_1)=|\gamma(s_1)-\gamma(s)|$: stationarity of polygonal length at each boundary vertex is precisely equality of tangential components, hence specular reflection on the admissible incoming/outgoing branches. It gives stationary polygons, not necessarily minima.

Now let $\mathcal L(q,v)$ be a smooth Lagrangian on a position–velocity domain, with invertible velocity Hessian $\partial^2\mathcal L/\partial v_i\partial v_j$, and fix a sufficiently small time step $h>0$. For endpoint positions admitting a unique local solution $q(t)$ of the Euler–Lagrange equations $\frac{d}{dt}\partial_v\mathcal L(q,\dot q)=\partial_q\mathcal L(q,\dot q)$ with $q(0)=q$ and $q(h)=Q$, define the exact discrete Lagrangian by $S_h(q,Q)=\int_0^h\mathcal L(q(t),\dot q(t))\,dt$. Its partial derivatives with respect to the initial and final positions give the momenta by the same signed formulas. Approximating this function and using those formulas defines a variational integrator—a discrete time-stepping method derived from stationary discrete action—provided the mixed Hessian stays invertible. See [Marsden–West, *Discrete mechanics and variational integrators*](https://lagrange.mechse.illinois.edu/pubs/MaWe2001/MaWe2001.pdf), §§1.3–1.7 and 2.1.

**Fixed energy versus fixed time.** Billiard length is a fixed-energy abbreviated action $\int v\cdot dq$ at unit speed, with variable flight time. It is not the fixed-time free-particle action $|Q-q|^2/(2h)$. These functions use different time constraints. A variational integrator preserves the symplectic form under the stated regularity conditions, but need not preserve the original Hamiltonian energy exactly.

## 3. Exact symplecticity of the standard map

This example permits direct comparison of a Jacobian proof and a generating-function proof on an infinite cylinder.

For a fixed parameter $K\in\mathbb R$, define the standard map $F:(\mathbb R/2\pi\mathbb Z)\times\mathbb R\to(\mathbb R/2\pi\mathbb Z)\times\mathbb R$ by $F(q,p)=(Q,P)$, where

$$P=p+K\sin q,\qquad Q=q+P,$$

with $q$ modulo $2\pi$ and $p\in\mathbb R$. The first equation changes momentum at fixed position; the second advances position using the new momentum. The inverse is $q=Q-P$, $p=P-K\sin(Q-P)$, with positions understood modulo $2\pi$. The convention and cylinder/torus distinction are documented by [Chirikov–Shepelyansky](https://www.scholarpedia.org/article/Standard_map); see also [Meiss, *The standard map*](https://amath.colorado.edu/faculty/jdm/papers/StdMapEncylopedia.pdf).

Use $\lambda=p\,dq$ and $\omega=dq\wedge dp$ on the cylinder. Direct differentiation, in coordinate order $(q,p)$, gives

$$DF=\begin{pmatrix}1+K\cos q&1\\K\cos q&1\end{pmatrix},\qquad \det DF=1,\qquad \frac{\partial Q}{\partial p}=1.$$

Taking real representatives $q,Q\in\mathbb R$ with $Q=q+P$, define

$$S(q,Q)=\tfrac12(Q-q)^2-K\cos q.$$

This is an endpoint generating function: its derivatives specify the map. Then $-S_q=Q-q-K\sin q=p$ and $S_Q=Q-q=P$. Consequently $F^*(p\,dq)-p\,dq=dG$, where the globally defined cylinder function is $G(q,p)=\tfrac12(p+K\sin q)^2-K\cos q$. This is the same exact-one-form mechanism as the chord identity. The twist derivative $\partial Q/\partial p$ measures the dependence of the next position on initial momentum. Its sign is opposite from the billiard convention used above: there $\partial s_1/\partial p=-\ell/(\sin\theta\sin\theta_1)<0$. 

<details><summary>A fixed point and the limits of preservation</summary>

At $K=1$, $(q,p)=(0,0)$ is fixed. Its derivative has trace $3$ and eigenvalues $(3\pm\sqrt5)/2$, so it is hyperbolic: neither eigenvalue has modulus one, and the linearization has contracting and expanding directions. Exact symplecticity therefore does not imply stability. At $K=0$, momentum is constant and the map is the explicitly solvable shear $Q=q+p$, $P=p$. 

The infinite cylinder has infinite invariant area: recurrence does not follow from the finite-measure proof above. Reducing both coordinates modulo $2\pi$ produces a symplectic map on the torus $(\mathbb R/2\pi\mathbb Z)^2$ of total area $4\pi^2$ and hence almost-everywhere recurrence, but return modulo momentum is weaker than return on the cylinder. The one-form $p\,dq$ is not global on that torus, so the cylinder's exactness statement must not be transferred verbatim.

</details>

**Area and symplecticity in different dimensions.** In two dimensions, preserving the specified area form is precisely symplecticity. In higher dimensions, symplecticity implies preservation of the volume form $\omega^n/n!$ on a $2n$-dimensional symplectic manifold, where $\omega^n$ is the $n$-fold wedge product, but the converse fails. For example, the linear map on $\mathbb R^4$ given by $(q_1,p_1,q_2,p_2)\mapsto(2q_1,p_1,q_2/2,p_2)$ has determinant one but changes $\omega=dq_1\wedge dp_1+dq_2\wedge dp_2$ to $2dq_1\wedge dp_1+\tfrac12dq_2\wedge dp_2$. Symplectic preservation alone does not imply ergodicity, as the circular billiard already shows.
