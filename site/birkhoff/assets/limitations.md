# Twist, resonance and the limits of stability

## A stable orbit without neighboring periodic orbits

For canonical pairs $(q_j,p_j)$, put $I_j=(p_j^2+q_j^2)/2$. Consider the consistent oscillator model

$$H=\omega_1I_1+\omega_2I_2,\qquad\omega_j>0,\qquad\omega_2/\omega_1\notin\mathbb Q.$$

Each $I_j$ is constant. Both components rotate uniformly, with angular speeds of magnitudes $\omega_1,\omega_2$. If both $I_1,I_2$ are positive, closure would require $\omega_1\tau,\omega_2\tau\in2\pi\mathbb Z$, contradicting irrationality. On a fixed energy $h>0$, the only geometric periodic orbits are the two coordinate circles with one action zero.

Near the first circle, the return map on a transverse disk is a rigid irrational rotation by $2\pi\omega_2/\omega_1$ up to the angular convention. Every radius is preserved, so the fixed point is stable, but no other point is periodic. Its twist coefficient vanishes. Stability alone cannot replace the nonzero-twist assumption.

## Frequency maps and rational targets

On an action-angle domain $U\times\mathbb T^m$, with angles of period $2\pi$, let

$$H(I)=c\cdot I+\tfrac12 I^{\mathsf T}DI,\qquad D=D^{\mathsf T}.$$

Hamilton’s equations give $\dot I=0$, $\dot\theta=\omega(I)=c+DI$. A full torus is periodic with return time $n\tau$ if

$$c+DI=\frac{2\pi}{\tau}\frac{k}{n},\qquad k\in\mathbb Z^m.$$

When $D$ is invertible, every nearby frequency target has the unique solution

$$I=D^{-1}\left(\frac{2\pi}{\tau}\frac{k}{n}-c\right).$$

Rational vectors $k/n$ are dense. In an open action domain this gives periodic tori near any given action, by choosing targets near its actual frequency. The ratios must approximate $\tau\omega(I)/(2\pi)$; merely making them small does not bring the actions to zero. Near an oscillator boundary $I_j\geq0$, the resulting actions must additionally lie in the admissible cone. The formula alone cannot remove that constraint.

Invertibility of $D$ is a sufficient local frequency-adjustment condition in this integrable model, not a necessary condition for every possible abundance of periodic trajectories. For example, $H(I)=I_1+I_2$ has $D=0$ but every torus is periodic. Conversely, a constant irrational frequency ratio gives none on the full-dimensional tori. Degeneracy permits different outcomes.

## Fixing energy changes the nondegeneracy question

For an autonomous problem at fixed energy, solving for arbitrary frequencies ignores the constraint $H(I)=h$. A useful local test is invertibility of the bordered matrix

$$\begin{pmatrix}D&\omega\\\omega^{\mathsf T}&0\end{pmatrix}.$$

To see its meaning, allow a scalar frequency rescaling $a$. Linearizing $\omega(I)=a\nu$ and $H(I)=h$ at a solution produces the equations $D\,\delta I-\nu\,\delta a=\delta b$, $\omega^{\mathsf T}\delta I=\delta h$. Up to a nonzero column factor, the displayed matrix is their Jacobian. Its invertibility is the implicit-function condition for varying the frequency direction while fixing energy. This condition differs from $\det D\ne0$.

This is an explanatory local calculation, not a theorem asserting persistence of these tori under perturbation. No KAM or higher-dimensional periodic-orbit theorem is proved here.

## What the historical questions establish

Birkhoff asks whether his local conclusion survives in broader completely stable differential systems and doubts it without preserved area. That is a historical question in Original and Modernized. The rigid-rotation model proves a specific failure when twist vanishes; it does not answer every version of the broader question. The source also distinguishes continuing a periodic orbit by changing conserved quantities from finding different periodic orbits on the same joint level. The distinction remains essential.

## Relation to the source

Pages 162–165 contain the counterexample, a higher-dimensional integrable model, and warnings about first integrals. Action-angle variables expose the frequency map behind the linear equations and clarify why nondegeneracy and fixed-energy nondegeneracy differ. They introduce torus coordinates and an implicit-function calculation. Original retains the printed oscillator coefficients, rotation formulas and “ratios small” sentence; the edition notes identify their inconsistencies. This layer uses consistent equations and limits each inference to its stated model.
