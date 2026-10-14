# Reduction on a fixed energy surface

## A phase coordinate along the orbit

Let $(p_1,q_1,p_2,q_2)$ be canonical coordinates for an autonomous analytic Hamiltonian $H$, with equations $\dot q_i=H_{p_i}$, $\dot p_i=-H_{q_i}$. Work near a periodic orbit on a regular energy surface $H=h$. Assume a phase coordinate $q_1\bmod2\pi$ increases along the orbit and $H_{p_1}\ne0$ throughout a surrounding coordinate tube. Birkhoff constructs such coordinates in a configuration-space setting with a quadratic-velocity Lagrangian. A global configuration coordinate of this kind is an assumption here; self-intersections or turning points require different local charts.

The implicit-function theorem solves the energy equation as

$$p_1=-K(q_1,p_2,q_2,h).$$

Implicit differentiation gives

$$K_{p_2}=\frac{H_{p_2}}{H_{p_1}},\qquad K_{q_2}=\frac{H_{q_2}}{H_{p_1}},\qquad K_h=-\frac1{H_{p_1}}.$$

## Restrict the canonical action

The canonical one-form is $\lambda=p_1\,dq_1+p_2\,dq_2$. Restricted to $H=h$, it becomes

$$\lambda|_{H=h}=p_2\,dq_2-K\,dq_1.$$

This already has the form of a one-degree-of-freedom Hamiltonian action with time $q_1$ and Hamiltonian $K$. Varying $\int(p_2\,dq_2-K\,dq_1)$ with fixed endpoint phase and configuration gives

$$\frac{dq_2}{dq_1}=K_{p_2},\qquad\frac{dp_2}{dq_1}=-K_{q_2}.$$

The same equations follow by dividing the original equations by $\dot q_1=H_{p_1}$. The reduction preserves the transverse symplectic form $dq_2\wedge dp_2$; on a section of fixed $q_1$, the restricted action form is just $p_2\,dq_2$. The return map consequently preserves transverse area.

## Move the reference solution to the origin

Suppose the reference orbit is $q_2=0$, $p_2=\varphi(q_1)$ in these coordinates. Put $Q=q_2$, $P=p_2-\varphi(q_1)$. The identity

$$p_2\,dq_2-K\,dq_1=P\,dQ-
\bigl[K(q_1,P+\varphi(q_1),Q,h)+\varphi'(q_1)Q\bigr]dq_1+d(\varphi Q)$$

shows that the transformed Hamiltonian is

$$\bar K=K(q_1,P+\varphi(q_1),Q,h)+\varphi'(q_1)Q.$$

The exact differential $d(\varphi Q)$ changes only an endpoint term. The sign is checked directly: $P'=p_2'-\varphi'=-K_{q_2}-\varphi'=-\bar K_Q$. Thus the reference orbit becomes $P=Q=0$. This explicit calculation also identifies the sign difficulty in the printed formula on p. 162.

## Return periods and physical periods

Recover physical time from

$$\frac{dt}{dq_1}=-K_h=\frac1{H_{p_1}}.$$

A reduced solution closing after $q_1$ advances by $2\pi n$ yields a periodic orbit on the same energy surface. Its elapsed physical time is

$$\tau_n=\int_{q_1(0)}^{q_1(0)+2\pi n}-K_h(q_1,p_2(q_1),q_2(q_1),h)\,dq_1.$$

This is not in general $n$ times the reference orbit’s period. If the transverse time-period map satisfies the nonresonance and nonzero-twist hypotheses of §§1–2, infinitely many nearby reduced periodic orbits yield infinitely many nearby physical periodic orbits at fixed $h$. Varying $h$ to continue the original orbit is a different operation and does not supply this conclusion.

## Relation to the source

The source, pp. 159–162, substitutes into the action, derives four equations, and eliminates physical time. Modernized retains those steps. Restricting the canonical one-form explains why $-p_1$ becomes the reduced Hamiltonian and why area survives on the section. The proof uses canonical forms and the implicit-function theorem, and explicitly assumes the coordinate tube and nonvanishing phase speed. The corrected time-dependent shift belongs here; Original and Modernized retain the printed expression with an editorial note.
