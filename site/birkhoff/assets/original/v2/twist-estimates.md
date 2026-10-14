<!-- passage:normal -->
## 2. Proof of the lemma of section 1.

Let us define $F(u)$ by the equation
$$luF^2(u)=M(u)-\lambda.$$
It is clear that $F(u)$ is the square root of a real polynomial of degree $\mu-1$ and constant term $1$. If then we write further
$$\bar p=F(pq)p,\qquad \bar q=F(pq)q,$$
it is found that the above normal form for $T$ is further simplified and may be written
$$\bar p=\bar p_0e^{(\lambda+l\bar p_0\bar q_0)t}+\bar\Phi,\qquad \bar q=\bar q_0e^{-(\lambda+l\bar p_0\bar q_0)t}+\bar\Psi,$$
so that all of the terms of $M$ except the first two disappear.

When the associated real variables are introduced, and we let $\sigma$ and $s$ denote the real constants $2\pi\lambda/\sqrt{-1}$ and $2\pi l/\sqrt{-1}$ respectively, we obtain formulas defining $T$,
$$\begin{aligned}p_1&=p_0\cos(\sigma+sr_0^2)-q_0\sin(\sigma+sr_0^2)+P,\\q_1&=p_0\sin(\sigma+sr_0^2)+q_0\cos(\sigma+sr_0^2)+Q,\end{aligned}\qquad (r_0^2=p_0^2+q_0^2),\tag{1}$$
where $P,Q$ are real power series in $p_0,q_0$ with initial terms of degree $2\mu+1$ at least. It is apparent then that with these variables $T$ is an ordinary rotation through a variable angle $\sigma+sr_0^2$, except for terms of order $2\mu+1$ in the distance from the origin. It is such a choice of variables that will be adopted. If $l\ne0$, we may take $s$ as positive.

<!-- passage:radial -->
Hence we have, in some fixed neighborhood of the origin and for a fixed $K$,
$$|P|,|Q|\leq Kr_0^{2\mu+1}.\tag{2}$$
From the above formulas we find at once
$$r_1^2=r_0^2+R,\tag{3}$$
where the series $R$ begins with terms of at least the degree $2\mu+2$. This gives, for the increment $\Delta r_0^2=r_1^2-r_0^2$,
$$|\Delta r_0^2|\leq Lr_0^{2\mu+2}\tag{4}$$
where $L$ is a fixed constant.

From (4) it is seen that $r_n^2$ increases less rapidly upon successive iteration than if
$$dr_n^2/dn=Lr_n^{2\mu+2}.$$
But this yields
$$r_n=r_0/(1-L\mu r_0^{2\mu}n)^{1/2\mu}.$$
Hence $r_n$ can only increase to twice the initial value $r_0$ after $n\geq\nu$ iterations, where
$$L\mu\nu=(1-2^{-2\mu})/r_0^{2\mu},$$
that is for $n$ of at least the order of $r_0^{-2\mu}$. Likewise $r_n$ can only decrease to half the initial value for $n$ of the same order. These results may be combined in the form
$$\frac12\leq r_n/r_0\leq2\qquad(n\leq Nr_0^{-2\mu}).\tag{5}$$
This is our first important conclusion.

<!-- passage:variational -->
Likewise since we have from (1)
$$\frac{q_1p_0-p_1q_0}{p_1p_0+q_1q_0}=\frac{(p_0^2+q_0^2)\sin(\sigma+sr_0^2)+p_0Q-q_0P}{(p_0^2+q_0^2)\cos(\sigma+sr_0^2)+q_0Q+p_0P},$$
it follows that we have
$$\theta_1=\theta_0+\sigma+sr_0^2+\Theta\tag{6}$$
where $\Theta$ is a power series in $r_0$ beginning with terms of degree $2\mu$ at least, with coefficients of simple trigonometric type in $\theta_0$. Moreover $\Theta$ is uniformly and absolutely convergent for $r_0$ sufficiently small, and its partial derivatives are given by derived series of a similar sort. This formula shows that for $r_0=0$, we have $\theta_n=\theta_0+n\sigma$, while for $r_0>0$, the difference $\theta_n-\theta_0-n\sigma$ can be made arbitrarily large by taking $n$ sufficiently large but in the range (5).

By the aid of (3) and (6) we obtain
$$\begin{aligned}\left|\frac{\partial\rho_1}{\partial\rho_0}-1\right|&\leq A\rho_0^\mu,&\left|\frac{\partial\rho_1}{\partial\theta_0}\right|&\leq A\rho_0^{\mu+1},\\\left|\frac{\partial\theta_1}{\partial\rho_0}-s\right|&\leq A\rho_0^{\mu-1},&\left|\frac{\partial\theta_1}{\partial\theta_0}-1\right|&\leq A\rho_0^\mu,\end{aligned}\tag{7}$$
where we have written $\rho=r^2$, and where $A$ is a suitably chosen positive constant.

But the identities
$$\begin{aligned}\frac{\partial\rho_n}{\partial\rho_0}&=\frac{\partial\rho_n}{\partial\rho_{n-1}}\frac{\partial\rho_{n-1}}{\partial\rho_0}+\frac{\partial\rho_n}{\partial\theta_{n-1}}\frac{\partial\theta_{n-1}}{\partial\rho_0},\\\frac{\partial\theta_n}{\partial\rho_0}&=\frac{\partial\theta_n}{\partial\rho_{n-1}}\frac{\partial\rho_{n-1}}{\partial\rho_0}+\frac{\partial\theta_n}{\partial\theta_{n-1}}\frac{\partial\theta_{n-1}}{\partial\rho_0}\end{aligned}$$
may be written
$$u_n=(1+\varepsilon_1)u_{n-1}+\varepsilon_2v_{n-1},\qquad v_n=(s+\varepsilon_3)u_{n-1}+(1+\varepsilon_4)v_{n-1},\tag{8}$$
in which we put
$$u_n=\partial\rho_n/\partial\rho_0,\qquad v_n=\partial\theta_n/\partial\rho_0,$$
while, by (5) and (7), for $n\leq N\rho_0^{-\mu}$,
$$|\varepsilon_1|\leq2^\mu A\rho_0^\mu,\quad |\varepsilon_2|\leq2^{\mu+1}A\rho_0^{\mu+1},\quad |\varepsilon_3|\leq2^{\mu-1}A\rho_0^{\mu-1},\quad |\varepsilon_4|\leq2^\mu A\rho_0^\mu.$$
These equations (8) enable us to determine $u_n,v_n$ in succession for $n=1,2,\cdots$, with the initial conditions $u_0=1,v_0=0$.

<!-- passage:comparison -->
Suppose now for a moment that the small terms be neglected in these equations (8). They then take the form
$$u_n=u_{n-1},\qquad v_n=su_{n-1}+v_{n-1},$$
whence, by elimination of $u$, we obtain
$$\Delta^2v_n=v_{n+2}-2v_{n+1}+v_n=0.$$
It is easily verified that the complete result of elimination yields similarly
$$\Delta^2v_n=\varepsilon_5\Delta v_n+\varepsilon_6v_n,\tag{9}$$
in which we have
$$|\varepsilon_5|,|\varepsilon_6|\leq B\rho_0^{\mu-1}\qquad(n\leq N\rho_0^{-\mu})\tag{10}$$
within a small region about the origin. Furthermore, the initial conditions may be written
$$v_0=0,\qquad\Delta v_0=s+\varepsilon_3^0,\tag{11}$$
where $\varepsilon_3^0$ denotes the value of $\varepsilon_3$ when $\rho_{n-1},\theta_{n-1}$ are replaced by $\rho_0,\theta_0$ respectively.

It is obvious that $v_1=s+\varepsilon_3^0$ is positive and thence, by use of (9), $v_2,v_3,\cdots$ are also positive for $n=1,2,\cdots$ until $n$ becomes large if $\rho_0$ is small enough, the approximate value of $v_n$ being $ns$. We desire to obtain a more definite idea of the range of values for $\rho_0$ and $n$ for which $v_n$ remains positive. During this range the angular variable $\theta_n$ increases with $r_0$, for a fixed angle $\theta_0$.

Now the equation (9) is a homogeneous linear difference equation of the second order in $v_n$, and we are considering the particular solution satisfying (11). Evidently $v_n$ will remain positive so long as $\Delta v_n$ continues positive. A first question is then to determine the range of values of $n$ throughout which both $v_n$ and $\Delta v_n$ necessarily remain positive. But the linear difference equation yields
$$\Delta^2v_n\geq-B\rho_0^{\mu-1}[|\Delta v_n|+|v_n|],$$
so that clearly $v_n$ and $\Delta v_n$ diminish less rapidly than if
$$\Delta^2v_n=-B\rho_0^{\mu-1}[\Delta v_n+v_n],$$
while $v_n$ and $\Delta v_n$ remain positive. Thus $v_n$ and $\Delta v_n$ will remain positive for $n=1,2,\cdots$, at least as long as for the solution of the linear difference equation of the second order with constant coefficients
$$v_{n+2}-(2-B\rho_0^{\mu-1})v_{n+1}+v_n=0$$
satisfying the initial conditions (11). But this solution is
$$v_n=(s+\varepsilon_3^0)\frac{e^{\alpha_1n}-e^{\alpha_2n}}{e^{\alpha_1}-e^{\alpha_2}}\tag{12}$$
where $\alpha_1,\alpha_2$ are defined by the equation
$$\alpha_i=\log\left(1-\frac12B\rho_0^{\mu-1}\pm\sqrt{-\left(B\rho_0^{\mu-1}-\frac14B^2\rho_0^{2\mu-2}\right)}\right)\qquad(i=1,2).$$
But $v_n$ and $\Delta v_n$ as thus determined will certainly remain positive until $dv_n/dn$ vanishes, i. e.
$$e^{(\alpha_1-\alpha_2)n}=\alpha_2/\alpha_1.$$
Since the leading term in $\alpha_1-\alpha_2$ is clearly
$$2\sqrt{-B}\rho_0^{(\mu-1)/2}$$
while the leading term in $\alpha_2/\alpha_1$ is $-1$, this relationship shows that $n$ must be of the reciprocal order $\rho_0^{-(\mu-1)/2}$.

Hence we infer that so long as $n\leq N^*r_0^{-(\mu-1)}$ (compare with (5)), the angle $\theta_n$ will increase with $r_0$ for fixed $\theta_0$ in the prescribed neighborhood.

The nature of the inequalities derived above makes it clear that we can select a value of $r_0$ so small, and then of $n$ so large, that the conditions laid down in the lemma are satisfied.
