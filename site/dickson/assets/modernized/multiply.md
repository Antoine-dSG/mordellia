<!-- passage:multiplicity -->
## Multiplicity

A number $n$ is **multiply perfect**, or **pluperfect**, if $\sigma(n)=kn$ for an integer $k$, its **multiplicity**. Here $\sigma$ includes both 1 and $n$. Dickson writes $P_k$ for a number of multiplicity $k$; an ordinary perfect number is a $P_2$.

Recorde<sup>39</sup> cited 120 as abundant in 1557 because its proper divisors sum to 240. Dickson dates the naming and investigation of such numbers to seventeenth-century French writers. A $P_3$ is half the sum of its proper divisors and was called a *sous-double*; a $P_4$ is one-third of that sum, a *sous-triple*; a $P_5$ is a *sous-quadruple*; and so on.

<!-- passage:fermat-rule -->
## Fermat’s rule as reported by Mersenne

Mersenne<sup>304</sup> states that Fermat found the $P_3$ 672 and possessed infallible methods for finding infinitely many such numbers. He later gives the construction:<sup>305</sup> start with $2,4,8,\ldots$, place each term minus 1 above it and each term plus 1 below it:

$$\begin{array}{rrrr}1&3&7&15\cdots\\2&4&8&16\cdots\\3&5&9&17\cdots\end{array}$$

If the $(n+3)$rd term of the upper row divided by the $n$th term of the lower row is a prime $p$, multiply $3p$ by the $(n+2)$nd term of the middle row to obtain a $P_3$. For $n=1$, the quotient is $15/3=5$ and the result is $120$; for $n=3$, the quotient is $63/9=7$ and the result is $672$. Dickson expresses the rule as

$$p=\frac{2^{n+3}-1}{2^n+1}\text{ prime}\quad\Longrightarrow\quad N=3\cdot2^{n+2}p\text{ is a }P_3.$$

<div class="historical-note"><sup>304</sup> Harmonie Universelle, Paris, 1636, Première Préface Générale (preceded by a preface of two pages), unnumbered page 9, remark 10. Extract in Oeuvres de Fermat, 2, 1894, 20–21.<br><sup>305</sup> Mersenne, Seconde Partie de l'Harmonie Universelle, Paris, 1637. Final subdivision: Nouvelles Observations Physiques et Mathématiques, p. 26, Observation 13. Extract in Oeuvres de Fermat, 2, 1894, p. 21.</div>

<!-- passage:descartes-rules -->
## Descartes’ five rules

Descartes<sup>312</sup> gives the following rules. Write $v_p(n)$ for the exponent of the prime $p$ in $n$.

I. If $\sigma(n)=3n$ and $3\nmid n$, then $\sigma(3n)=4(3n)$.

II. If $\sigma(n)=3n$, $v_3(n)=1$ and $5\nmid n$, then $45n$ has multiplicity 4.

III. If $\sigma(n)=3n$, $v_3(n)=1$, and neither 7 nor 13 divides $n$, then $3\cdot7\cdot13n$ has multiplicity 4.

IV. If $v_2(n)=9$, and none of $31,43,127$ divides $n$, the two numbers $31n$ and $16\cdot43\cdot127n$ have the same ratio to their respective proper-divisor sums.

V. If $3\nmid n$ and $3n$ has multiplicity $4k$, then $n$ has multiplicity $3k$.

<div class="historical-note"><sup>312</sup> Oeuvres, 2, 1898, 427–9, letter to Mersenne, Nov. 15, 1638.</div>

