<!-- passage:oscillators -->
## An isochronous counterexample

This section separates nonresonance from a nonzero twist coefficient and then discusses a higher-dimensional model. Its questions and proposed requirements remain statements of Birkhoff’s argument; they are not presented as a current classification theorem.

The general conclusion which appears in consequence of the preceding sections is that, for a given value of the energy constant, there exist in general periodic motions in the vicinity of a periodic motion of stable type, at least when the dynamical system has two degrees of freedom and is of ordinary type. The fact that there may exist isolated periodic motions of stable type, even for dynamical systems with two degrees of freedom, may be brought out by means of the following elementary example.

Let us write
$$H=\frac12k^2(p_1^2+q_1^2)+\frac12l^2(p_2^2+q_2^2),$$
where the quantities $k,l$ are incommensurable with one another, of which the general solution is
$$p_1=A\cos kt+B\sin kt,\qquad q_1=-A\sin kt+B\cos kt,$$
$$p_2=C\cos lt+D\sin lt,\qquad q_2=-C\sin lt+D\cos lt.$$
The energy constant $h$ is defined by the relation
$$H=\frac12k^2(A^2+B^2)+\frac12l^2(C^2+D^2)=h.$$
The only periodic solutions are the two analytic families
$$p_1=q_1=0\text{ and }p_2=q_2=0,$$
all of which are of stable type. For an assigned value of the energy constant, there are only two such periodic motions: thus all periodic motions of the second family with assigned $A^2+B^2$ represent the same closed curve in the three-dimensional manifold $H=h$ in four-dimensional $p_1,q_1,p_2,q_2$ space. If the transformation $T$ be set up for this case as in the preceding section 2, it is found to be essentially a rotation through an angle incommensurable with $2\pi$, and so to correspond precisely to the highly degenerate case there excluded from consideration.

<!-- passage:question -->
## The role of area preservation
A first question as to a possible generalization of the above results in the case $m=2$ is the following: Suppose the origin is a point of generalized equilibrium of general stable type for a given differential system which is, in addition, completely stable; if the constant $l$ is not $0$, does it follow that there will always exist infinitely many periodic motions in the vicinity of the origin?

Birkhoff considers it very doubtful that the answer is in the affirmative. In the preceding argument the area-preserving property played a vital part. For this more general completely stable type, there is no reason to believe that this property continues to hold, even in the Pfaffian case.

<!-- passage:frequencies -->
## Several frequencies and nondegeneracy
The example can be generalized so as to indicate a preliminary necessary requirement if the conclusion that there are infinitely many periodic motions near a given stable periodic motion is to hold for Hamiltonian systems with more than two degrees of freedom.

In fact, consider the case of a dynamical system
$$\frac{dp_i}{dt}=-\frac{\partial H}{\partial q_i},\qquad\frac{dq_i}{dt}=\frac{\partial H}{\partial p_i}\qquad(i=1,\cdots,m)$$
in which $H$ is a function of the $m$ products $p_1q_1,\cdots,p_mq_m$ with $p_i,q_i$ complex-conjugate variables, namely
$$H=\sum_{j=1}^m c_jp_jq_j+\frac12\sum_{j,k=1}^m d_{jk}p_jq_jp_kq_k.$$
Here the coefficients $c_j,d_{ij}$ are periodic of period $\tau$ in $t$. The origin is a point of generalized equilibrium with multipliers
$$\lambda_i=\int_0^\tau c_i(t)\,dt\qquad(i=1,\cdots,m),$$
so that it will be of general stable type if these $m$ quantities and $2\pi\sqrt{-1}/\tau$ have no linear commensurability relations. If for the sake of brevity we write
$$x_i=\int_0^t\left[c_i+\sum_{j=1}^m d_{ij}p_j^0q_j^0\right]dt,$$
the general solution is at once found to be
$$p_i=p_i^0e^{-x_i},\qquad q_i=q_i^0e^{x_i}\qquad(i=1,\cdots,m).$$
Moreover if we write
$$C_i=\int_0^\tau c_i\,dt,\qquad D_{ij}=\int_0^\tau d_{ij}\,dt,$$
the condition that the solution is periodic of period $k\tau$ is
$$C_i+\sum_{j=1}^m D_{ij}p_j^0q_j^0=2\pi k_i\sqrt{-1}/k\qquad(i=1,\cdots,m),$$
where $k_1,\cdots,k_m$ are integers. But these form $m$ linear, inhomogeneous linear-algebraic equations in $p_i^0q_i^0$, $(i=1,\cdots,m)$, which can be solved if the determinant $|D_{ij}|$ is not $0$. Moreover by making the ratios $k_i/k$ small, the periodic motion can be taken near the origin. On the other hand if $|D_{ij}|=0$, such a determination will be impossible in general.

In the particular case when the $c_i$'s and $d_{ij}$'s are constants, the system appears in complete normal form, and the $c_i$'s are the multipliers, while the $d_{ij}$'s are invariants analogous to $l$ in the case $m=1$.

Hence at least the condition $|d_{ij}|\ne0$ must be imposed in the case $m>1$, as analogous to the condition $l\ne0$ in the case $m=1$, if an infinitude of nearly periodic motions is to be anticipated in all cases.

<!-- passage:integrals -->
## Keep the first integrals fixed
Any generalization must of course take proper account of the single-valued analytic first integrals (such as the energy integral) which exist. In fact, if there are $k$ of these integrals which are independent, the given stable periodic motion will admit of $k$-fold analytic continuation. Evidently it is not such periodic motions of the same analytic family as the given motion which interest us, but rather nearby periodic motions for the same values of the constants of integration as the given periodic motion, and making many circuits of it in a period.
