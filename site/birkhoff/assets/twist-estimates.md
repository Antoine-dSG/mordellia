# Finite-time twist estimates

## Remainders and the relevant time scale

Work in local polar coordinates $\rho=r^2$, with a real lift of $\theta$. Assume a smooth local map has the form

$$\rho_1=\rho+f(\rho,\theta),\qquad\theta_1=\theta+\sigma+s\rho+g(\rho,\theta),\qquad s>0,$$

where, uniformly in $\theta$ as $\rho\downarrow0$,

$$f=O(\rho^{\mu+1}),\quad f_\rho=O(\rho^\mu),\quad f_\theta=O(\rho^{\mu+1}),$$
$$g=O(\rho^\mu),\quad g_\rho=O(\rho^{\mu-1}),\quad g_\theta=O(\rho^\mu),\qquad\mu\geq2.$$

These are the finite normal-form estimates supplied by §1, with derivatives interpreted on the punctured disk and limits at its center. A full extra turn at radius $\varepsilon$ requires about $2\pi/(s\varepsilon^2)$ iterates. We therefore need control only through $N=\lceil C\varepsilon^{-2}\rceil$, for a fixed $C>2\pi/s$. We do not need the longest possible stability interval.

## Radial confinement

For initial $0<\rho_0\leq\varepsilon^2$, stop at the first iterate leaving $[\rho_0/2,2\rho_0]$. Before that time,

$$|\rho_j-\rho_0|\leq jK(2\rho_0)^{\mu+1}.$$

For $j\leq N$, the ratio of this bound to $\rho_0$ is at most a constant times $\varepsilon^{2\mu-2}$, which tends to zero. A first exit is therefore impossible for sufficiently small $\varepsilon$. Uniformly on the initial disk,

$$\rho_j=\rho_0\bigl(1+O(\varepsilon^{2\mu-2})\bigr),\qquad j\leq N.$$

Thus $r_j<2\varepsilon$. This elementary bootstrap makes explicit the finite-time confinement that Birkhoff estimates by comparison with a differential equation.

## Derivative growth as a shear

Differentiate with respect to $\rho_0$ at fixed $\theta_0$, writing $u_j=\partial\rho_j/\partial\rho_0$ and $v_j=\partial\theta_j/\partial\rho_0$. Then

$$\binom{u_{j+1}}{v_{j+1}}=
\begin{pmatrix}1+f_\rho&f_\theta\\s+g_\rho&1+g_\theta\end{pmatrix}_{(\rho_j,\theta_j)}
\binom{u_j}{v_j},\qquad(u_0,v_0)=(1,0).$$

The leading matrix is a shear, with exact iterates $(u_j,v_j)=(1,js)$. To estimate its perturbation, put $w_j=\varepsilon^2v_j$. The matrix acting on $(u_j,w_j)$ is

$$\begin{pmatrix}1+O(\varepsilon^{2\mu})&O(\varepsilon^{2\mu})\\s\varepsilon^2+O(\varepsilon^{2\mu})&1+O(\varepsilon^{2\mu})\end{pmatrix}.$$

Its norm is at most $1+K\varepsilon^2$. Consequently $|u_j|+|w_j|$ is bounded by a constant depending on $C$ for $j\leq N$, since $(1+K\varepsilon^2)^N\leq e^{KN\varepsilon^2}$. Summing the first row’s increments gives

$$u_j=1+O(j\varepsilon^{2\mu}).$$

Substitution into the second, unscaled row and summation gives

$$v_j=js+O(j^2\varepsilon^{2\mu}+j\varepsilon^{2\mu-2})
=js+O(j\varepsilon^{2\mu-2}),\qquad j\leq N.$$

For sufficiently small $\varepsilon$, $v_j>0$ for $1\leq j\leq N$. Hence angular displacement strictly increases with $\rho_0$, and therefore with $r_0>0$. This proof replaces elimination into a second-order scalar recurrence by a direct estimate of the derivative matrices.

## One extra turn before leaving the neighborhood

At $\rho_0=\varepsilon^2$, sum the angle increments and use radial confinement:

$$\theta_N-\theta_0-N\sigma
=sN\varepsilon^2+O(N\varepsilon^{2\mu})
=sC+o(1)>2\pi.$$

At the center, the limiting displacement is $N\sigma$. Confinement and monotonicity therefore give exactly the lemma needed by [§1](equilibrium.html?mode=reinterpreted#intersection), for arbitrarily small disks.

For the integrable model $f=g=0$, the estimates are exact: $\rho_j=\rho_0$ and $\theta_j=\theta_0+j(\sigma+s\rho_0)$. A periodic point with winding $k$ and return period dividing $n$ lies on $\rho_0=(2\pi k/n-\sigma)/s$, when this number is positive. Perturbations generally destroy the whole resonant circle; the intersection argument still supplies periodic points.

## Relation to the source

Birkhoff’s pp. 154–159 normalize the frequency, control radial drift, differentiate the iterates, eliminate one derivative, and compare a scalar difference equation with constant coefficients. Modernized retains that route. Reinterpreted uses the same normal-form estimates but works only on the $O(\varepsilon^{-2})$ time scale actually needed. The gain is a direct explanation of why twist accumulates before the error does. The costs are uniform big-$O$ estimates and products of derivative matrices. Neither route establishes confinement for all time or the existence of invariant circles.
