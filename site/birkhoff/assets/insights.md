# Birkhoff pilot: findings and limits

Edition update (14 October 2026): these gains and prerequisite costs describe the **Reinterpreted** layer. Original v1 (§§7–11) and additive v2 (§§1–6) form the frozen full-chapter transcription; Modernized preserves Birkhoff’s proof route. The separation makes replacement proofs and added hypotheses visible rather than presenting all modern notation as a new explanation. Passage correspondences live in `preview/edition.json`; no new mathematical discovery is claimed.

Consolidated 13 October 2026 from the exploratory syntheses and section assessments. Mathematical arguments live in the reading pages; [COVERAGE.md](COVERAGE.md) is the authoritative completion record. This document records explanatory gain, background cost and evidence rather than repeating proofs.

## Overall assessment

Birkhoff's organizing method remains the central insight: encode motion by an annulus map, establish preserved area and boundary displacement, then count periodic orbits with the required symmetries. The reconstruction makes that chain easier to inspect and transfer. It has established **no original theorem, new invariant or verified distant connection**. Technical checks do not establish reader comprehension; there has been no independent human mathematical review or formal verification.

Compression has exposed mechanisms rather than reduced every passage's length. §8 makes the chord-length generating function and exact symplecticity its main argument; §9 benefits from a coordinate normalization; §10 needs Jacobi fields, not an automatically duplicated exposition selector; §11 uses first variation and reversibility. The wider audience remains open. The §8 Modernized calculation remains accessible with calculus; its Reinterpreted argument introduces forms and pullbacks. §§10–11 carry substantial additional geometric and topological prerequisites.

## B01–B03: invariant measure and recurrence (§§7–8, pp. 171–176)

**Dictionary.** Chord length H(s,r) has endpoint derivatives H_s=−p and H_r=p₁, with p=cosθ. On the collision map's graph, dℓ=T*λ−λ for λ=p ds. Differentiation gives the invariant density sinθ ds dθ. The separate mixed derivative H_sr=sinθ sinθ₁/ℓ establishes twist; exactness alone does not. Birkhoff's normalized boundary coordinate is arclength rescaled to perimeter 2π, not generally the physical polar angle.

**Gain and cost.** One scalar distance function explains the momenta and invariant measure behind the implicit Jacobian calculation. The Reinterpreted argument now derives invariant area from global exact symplecticity, with flight length as a primitive. This strengthens the structural statement but introduces differential forms, pullbacks and exterior differentiation; definitions are visible in the proof. Modernized retains the angle-Jacobian route for readers who prefer a coordinate calculation. The finite-measure proof makes the almost-everywhere recurrence conclusion explicit. It supplies no periodicity, return-time bound, Lyapunov stability, ergodicity or mixing. The irrational circle example exposes that distinction.

**Ellipse example.** In eccentric parameter t, the known Joachimsthal integral is proportional to v(t)sinθ, where v=|γ′(t)|. This is also the invariant density. Since it is conserved along each orbit, the ordinary determinant in (t,θ) is one. The explanation resolves an observation in the pilot; it is not a new invariant or a claim attributed to Birkhoff's selected pages.

**Evidence.** Source scans pp. 174–176; [Marsden–West, §§1.3–1.6](https://lagrange.mechse.illinois.edu/pubs/MaWe2001/MaWe2001.pdf), for discrete variational mechanics; [Albers–Tabachnikov](https://arxiv.org/pdf/1708.07395), introduction, for length-generated ordinary billiards. The ellipse proof and its references remain in the reading page. Independent Python ray/reflection checks, JS determinant checks and 108 Joachimsthal states support the implementation, not the general theorems.

## B04–B06: periodic orbits and grazing (§9, pp. 176–179)

**Dictionary.** Birkhoff's shifted iterate becomes a lifted iterate followed by an integer deck translation. A rational k/n gives opposite boundary displacements for the appropriate shifted map. Coprimality and orbit counting distinguish fixed states of an iterate from geometrically distinct periodic orbits. The required external input is a theorem giving distinct periodic orbits, not merely two fixed points. [Franks, §4, Theorem 4.1](https://arxiv.org/pdf/math/0303292) supplies the stated version.

**Grazing mechanism.** For curvature κ>0, cancelling quadratic drift in c(s)θ forces c′/c=−κ′/(3κ), giving J=θκ^(−1/3). The complementary weight κ^(2/3)ds normalizes the leading longitudinal advance. Together these are the leading Lazutkin coordinates; the approximate collision count is Cκ/(2J), with Cκ=∫κ^(2/3)ds. The preserved area becomes proportional to Y dX dY, not ordinary dX dY.

**Gain and cost.** Two fractional curvature powers become one normalization problem. Taylor expansion and Frenet geometry explain the local calculation; the sharper normal form and invariant-curve theory require additional machinery. A one-step remainder is not an exact first integral, an invariant curve, or a long-time estimate. [Zhang, equations (4)–(6)](https://arxiv.org/pdf/1610.00317) matches the formulas with radius ρ=1/κ; this conversion matters because the paper's prose calls ρ curvature.

**Evidence.** Written expansion and cancellation; 95 reduced rational circle cases, 48 reversal states, ellipse-axis orbits and decreasing-angle remainder checks. The local stability cross-reference and periodic-accumulation proposal are not proved.

**Deferred lead.** The later discussion derives A′+3B=0 from preserved near-grazing area for s₁=s+A(s)θ+…, θ₁=θ+B(s)θ²+…, explaining the exponent via area preservation and flight distance together. A comparison of higher corrections for circles, ellipses and perturbations was proposed, not conducted. The user deferred this investigation; no candidate-original claim follows.

## B07–B09: return maps and conjugate points (§10, pp. 180–185)

**Dictionary.** Crossing maps T± connect opposite-side annuli; F=T−∘T+ returns to the original side. The normal Jacobi equation j″+Kj=0, j(0)=0, j′(0)=1 gives first- and second-conjugate-point boundary limits. A Wronskian yields the conjugate-endpoint derivative C′=1/u_r(s,C)². This proves boundary order, not strict twist.

**Gain and cost.** The account separates global interception, local smoothness, tangent limits and lifted displacement. Signed self-crossings retain full turns lost by principal-value endpoint coordinates. On the round sphere c₂=L and F=id, exposing the strict-twist exception. The explicit centered lift uses the additional pinching hypothesis min K/max K>1/4; it is not extended silently to all positive-curvature surfaces. Prerequisites include Riemannian geometry, the unit tangent bundle, linearized geodesic equations and scalar ODEs.

**Evidence and limits.** [Abbondandolo–Bramham–Hryniewicz–Salomão, §2.1 and equations (38)–(43)](https://arxiv.org/pdf/1410.7790): global interception and full boundary regularity are invoked; local calculations are proved. The minimax input, limiting-set polygon argument and general signed-index continuation are not reproved. Exact sphere checks and independent variable-coefficient Jacobi integration test the examples and derivative identity.

## B10–B12: length, reversal and index (§11, pp. 185–188)

**Dictionary.** First variation gives dτ=F*λ−λ, λ=cosθ ds, paralleling chord length in §8. With crossings C:A+→A−, D:A−→A+ and velocity reversal J:A+→A−, the free involution R=J⁻¹C satisfies RFR=F⁻¹. Opposite orientations form pairs with equal nondegenerate indices. The boundary-displacement winding is zero in the chosen lift class; combined with nondegeneracy and Poincaré–Birkhoff this forces opposite signs and at least two geometric curves.

**Gain and cost.** Length variation unifies the invariant-area arguments without requiring contact geometry. Reversal prevents overcounting. The source already explicitly gives the reversal/index mechanism. First variation, geodesic uniqueness and planar degree are the additional prerequisites. Exactness does not produce a global endpoint generating function or imply twist.

**Evidence and limits.** Source pp. 185–188; the modern return-length identity is [Proposition 2.6](https://arxiv.org/pdf/1410.7790#page=22). The two-geodesic proof adds nondegeneracy to explicit strict twist; it does not prove Birkhoff's full degenerate assertion. Iterates require least-period checks. Reflection closes a given orthogonal segment but does not prove the segment exists. Stable-orbit accumulation and the suggested generality remain outside the proved scope. Checks cover 70 local matrix models and 108 exact sphere reversal states; a=2 has a line of fixed points, not index zero.

## Evidence classification

Use the [Mordell research framework](../mordellia/research/ranking.md), adapting its arithmetic structure rubric explicitly to dynamics. B01, B06 and B10 are D3 relative to the source language; the other mechanisms are D1/D2. All are established literature connections, adapted structure rank 4, with the stated proofs, references and example checks. No arithmetic interconnection rank or LEC tag is assigned, and no D4/D5 or original-structure rank is claimed.

The identification searches compared lifted displacement with Franks, κ versus ρ normal forms with Zhang, Jacobi boundary formulas and pinched lifts with Abbondandolo et al., and the source's reversal calculation with the reconstructed index argument. These positive matches rule out originality claims for the identified mechanisms. This was targeted identification, not an exhaustive negative novelty search.

## Completion of Chapter VI — §§1–6

All eleven sections now have Original and Modernized text. The six added Reinterpreted units supply the foundations for the earlier billiard and geodesic units. This completes chapter coverage, not every proof that Birkhoff invokes from elsewhere.

- **§§1–2:** the mechanism is twist accumulated over O(ε⁻²) iterates while higher-order errors stay small. A radial bootstrap and scaled derivative recurrence replace the longer scalar comparison. The curve-intersection argument needs a positive invariant density, not canonical coordinates after every normalization. Finite normal-form existence remains external; nonlinear stability and invariant circles are not inferred.
- **§3:** restricting the canonical action explains the reduced Hamiltonian and time change. Direct calculation gives the plus sign in the time-dependent momentum shift; the historical minus sign remains visible in Original and Modernized with an editorial note. The phase-coordinate tube is an explicit assumption.
- **§4:** action-angle variables distinguish ellipticity, twist, a frequency map and its fixed-energy restriction. A consistent oscillator model demonstrates why stability alone is insufficient. Rational targets must approximate the base frequency, not simply tend to zero. Invertible frequency Hessian is a sufficient model condition, not a universal necessity theorem.
- **§5:** lift data and degree isolate three different tasks: existence of a first fixed point, index cancellation for nondegenerate points, and the general two-distinct-points theorem. The source sketch is retained; the last theorem remains an external input.
- **§6:** the derivative of polygon perimeter is the momentum-matching equation for the same generating function used in §8. A support-function calculation proves the extremal-chord construction with positive curvature. Maximal winding-one polygons are proved to exist; the second-polygon minimax step and unrestricted instability are not inferred from maximization alone.

These are explanatory connections and explicit corrections, not new research claims. Their prerequisites include differentiated estimates, canonical forms, action-angle variables, degree and support functions; each unit states its own cost and limits. Checks in `checks/verify_foundations.py` cover 27 perturbed finite-time examples (maximum relative derivative discrepancy about 1.03×10⁻⁸), energy reduction, moving-reference shifts, rational targets, two displacement indices, and polygon first variation (error below 10⁻⁹). These tests do not establish the general theorems or reader comprehension.
