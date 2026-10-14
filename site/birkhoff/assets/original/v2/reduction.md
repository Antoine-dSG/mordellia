<!-- passage:energy -->
## 3. Periodic motions near a periodic motion ($m=2$).

We have already seen (chapter IV, section 1) how the general Pfaffian system in which the time $t$ does not appear explicitly admits of a reduction to a similar system with one less degree of freedom, provided that we are considering motions near a given periodic motion. In the reduced equations, however, an angular variable of period $2\pi$ appears in the differential equations, and the given periodic motion takes the form of generalized equilibrium.

In this section we propose to consider the periodic motions near a given periodic motion for the special Hamiltonian case $(m=2)$
$$\frac{dp_i}{dt}=-\frac{\partial H}{\partial q_i},\qquad\frac{dq_i}{dt}=\frac{\partial H}{\partial p_i}\qquad(i=1,2),\tag{13}$$
in which $H$ is an analytic function of $p_1,q_1,p_2,q_2$, not involving $t$. However such a periodic motion admits of analytic continuation with variation of the energy constant $H=h$ (chapter V, section 9), and so is not isolated. Our aim then will be to consider only those nearly periodic motions which belong to the same value of $h$ as the given periodic motion; this value may be taken to be $h=0$.

The possibility of reduction to a Pfaffian case $m=1$, combined with the results of the preceding section renders it highly probable at the outset that there will in general be infinitely many nearby periodic motions of long period, provided that the given periodic motion is of stable type.

<!-- passage:coordinates -->
In considering this question, we shall make the further assumption that the given Hamiltonian problem is associated with an ordinary Lagrangian problem whose principal function $L$ is quadratic in the velocities. If $q_1,q_2$ are the coordinates in this Lagrangian problem, the equations
$$p_i=\frac{\partial L}{\partial q_i'}\qquad(i=1,2)$$
serve of course to define the variables $p_1,p_2$.

Let $q_1=q_1(t),q_2=q_2(t)$ be the equations yielding this periodic motion of period $\tau$, and consider the corresponding analytic curve in the $q_1,q_2$ plane.

Evidently we can introduce a modified system of coordinates $\bar q_1,\bar q_2$ such that $\bar q_2$ vanishes along the motion, while $\bar q_1$ increases by $2\pi$ as a point makes a circuit of the motion. For instance, if the curve of motion is without double points, it may be deformed into a circle concentric with the origin, in which case $\bar q_1$ and $\bar q_2$ may be taken as angle and radial displacement respectively. It is clear indeed that we may take $\bar q_1=2\pi t/\tau$ along the periodic motion. Of course such a change of variables from $q_1,q_2$ to $\bar q_1,\bar q_2$ does not affect the Lagrangian character of the dynamical problem, although the new principal function $L$ is periodic of period $2\pi$ in the variable $\bar q_1$.

The corresponding Hamiltonian problem will have the form (13) in which $H$ is periodic of period $2\pi$ in $q_1$, while for the periodic motion under consideration we have $q_1=2\pi t/\tau$, $q_2=0$. From the Hamiltonian equations in these variables, we have also along the periodic motion
$$2\pi/\tau=\partial H/\partial p_1,\qquad0=\partial H/\partial p_2.$$
It is obvious then that we may solve the equation $H=h$ for $p_1$ in the form
$$p_1+K(q_1,p_2,q_2,h)=0\tag{14}$$
where $K$ is a real, single-valued, analytic function of its four arguments, periodic in $q_1$ of period $2\pi$. Furthermore we may regard $h,q_1,p_2,q_2$, as the dependent variables instead of $p_1,q_1,p_2,q_2$; we observe that (14) may be solved explicitly for $h$, since from the relation $H=h$, we derive
$$\frac{\partial H}{\partial p_1}\frac{\partial p_1}{\partial h}=1$$
so that $\partial p_1/\partial h\ne0$ along the motion.

<!-- passage:action -->
When these variables are used instead of $p_1,q_1,p_2,q_2$, the variational principle (chapter II, section 10) takes the form
$$\delta\int_{t_0}^{t_1}(-Kq_1'+p_2q_2'-h)\,dt=0,\tag{15}$$
which leads to the four equations
$$\frac{\partial K}{\partial h}\frac{dq_1}{dt}+1=0,\qquad\frac{\partial K}{\partial h}\frac{dh}{dt}+\frac{\partial K}{\partial p_2}\frac{dp_2}{dt}+\frac{\partial K}{\partial q_2}\frac{dq_2}{dt}=0,$$
$$\frac{dq_2}{dt}=\frac{\partial K}{\partial p_2}\frac{dq_1}{dt},\qquad\frac{dp_2}{dt}+\frac{\partial K}{\partial q_2}\frac{dq_1}{dt}=0.$$
From these equations we infer directly $h=\text{const.}$, which we know to be true of course.

Now it is evident that near the given periodic motion $q_1$ can serve as independent variable as well as $t$. If we eliminate $t$ in the above equations, we find
$$\frac{dp_2}{dq_1}=-\frac{\partial K}{\partial q_2},\qquad\frac{dq_2}{dq_1}=\frac{\partial K}{\partial p_2}.\tag{16}$$
Here we are to set $h=0$ in the function $K$, and $K$ is periodic of period $2\pi$ in $q_1$. The given periodic motion corresponds to
$$p_2=\varphi(q_1),\qquad q_2=0$$
where $\varphi$ is periodic of period $2\pi$ in $q_1$. These equations are clearly in Hamiltonian form $(m=1)$, with a generalized equilibrium point at the origin, at least after the simple modification
$$\bar p_2=p_2-\varphi(q_1),\qquad\bar q_2=q_2,$$
in which we may take
$$\bar K=K-\varphi'(q_1)q_2.$$

<!-- passage:periodic -->
Conversely, if we have a solution of (16), we can determine $t$ from the equation
$$\frac{dt}{dq_1}=-\frac{\partial K}{\partial h},$$
and obtain a solution of the original system when $t$ is taken as independent variable. Thus (13) and (16) are equivalent.* Periodic motions near the given periodic motion for (13) correspond to motions near the origin of period $2k\pi$ for (16).

*For a Hamiltonian problem (13) which reduces to a generalized equilibrium problem (16) of stable type $(l\ne0)$, there will exist infinitely many periodic motions in the vicinity of the given periodic motion, making in general many circuits of that motion before re-entering.*

This result is of course obtained as the direct application of section 1 for the reduced problem.

* For the reduction employed, cf. Whittaker, *Analytical Dynamics*, chap. 12.
