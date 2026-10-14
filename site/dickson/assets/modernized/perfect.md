<!-- passage:definitions -->
## Proper divisors

For a positive integer $n$, a **proper divisor** is a positive divisor smaller than $n$. Thus 1 is included when $n>1$. Write $s(n)$ for their sum. A number is **perfect** if $s(n)=n$, **deficient** if $s(n)<n$, and **abundant** if $s(n)>n$. The source's examples are $6=1+2+3$, $8$ and $12$, respectively.

Dickson records the synonyms *vollkommen, vollständig* for perfect; *diminute, defective, unvollkommen, unvollständig, mangelhaft* for deficient; and *superfluos, plus quam-perfectus, redundantem, excédant, übervollständig, überflussig, überschiessende* for abundant.

<!-- passage:euclid -->
## Euclid’s construction

Euclid<sup>1</sup> proves that if

$$q=1+2+2^2+\cdots+2^a$$

is prime, then $N=2^a q$ is perfect. Its proper divisors are precisely

$$1,2,\ldots,2^a,\quad q,2q,\ldots,2^{a-1}q.$$

The geometric-sum formula gives the sum of these divisors as $2^a q=N$.

<div class="historical-note"><sup>1</sup> Elementa, liber IX, prop. 36. Opera, 2, Leipzig, 1884, 408.</div>

<!-- passage:prime-tests -->
## Fermat’s reported prime tests

In his letter to Mersenne of June (?) 1640, Fermat<sup>59</sup> reports three propositions which he had proved with considerable difficulty, calling them the basis for discovering perfect numbers: if $n$ is composite, $2^n-1$ is composite; if $n$ is prime, $2n\mid 2^n-2$, and every prime divisor of $2^n-1$ has the form $2kn+1$ [compare Euler<sup>87</sup>]. His examples are

$$2^{11}-1=23\cdot89,\qquad223\mid 2^{37}-1.$$

The letter to Frénicle of October 18, 1640 also gives $47\mid2^{23}-1$ (Oeuvres, 2, p. 210).

<div class="historical-note"><sup>59</sup> Oeuvres de Fermat, 2, pp. 198–9; Varia Opera Math. d. Petri de Fermat, Tolosae, 1679, p. 177; Précis des Oeuvres math. de P. Fermat et de l'Arithmétique de Diophante, par E. Brassinne, Mém. Ac. Imp. Sc. Toulouse, (4), 3, 1853, 149–150.</div>

<!-- passage:euler-even -->
## Euler’s converse

Euler's posthumous paper<sup>97</sup> proves that every even perfect number has Euclid's form. Write $N=2^a m$, with $m$ odd, and set $S=\sigma(m)$, where $\sigma(m)$ denotes the sum of all positive divisors of $m$. Since $N$ is perfect,

$$(2^{a+1}-1)S=2N,\qquad \frac mS=\frac{2^{a+1}-1}{2^{a+1}}.$$

The fraction on the right is reduced, so $m=(2^{a+1}-1)c$. If $c=1$, then $S=2^{a+1}=m+1$, forcing $m$ to be prime and giving Euclid's formula. For $c>1$, the source uses

$$S\ge m+(2^{a+1}-1)+c+1$$

and hence

$$\frac Sm\ge\frac{2^{a+1}(c+1)}m>\frac{2^{a+1}}{2^{a+1}-1},$$

contradicting the preceding equality. Dickson states that the proof in another posthumous paper<sup>98</sup> is incomplete.

<div class="historical-note"><sup>97</sup> De numeris amicabilibus, Comm. Arith., 2, 1849, 630; Opera postuma, 1, 1862, 88.<br><sup>98</sup> Tractatus de numerorum doctrina, Comm. Arith., 2, 514; Opera postuma, 1, 14–15.</div>

<!-- passage:euler-odd -->
## Euler’s necessary form in the odd case

Euler<sup>98</sup> proves that an odd perfect number must have the form $q^{4k+1}u^2$, with $q$ a prime congruent to 1 modulo 4 [Frénicle<sup>64</sup>]. Write the number as a product of powers of distinct primes, $N=A_1\cdots A_t$, and put $S_i=\sigma(A_i)$. Then

$$S_1\cdots S_t=2A_1\cdots A_t.$$

Exactly one of the $S_i$, say $S_1$, is twice an odd number; the others are odd. Thus $A_2,\ldots,A_t$ are even powers of primes, while $A_1=q^{4k+1}$. In particular $N$ cannot be congruent to 3 modulo 4. Dickson cites amplifications by Lionnet,<sup>128</sup> Stern,<sup>137</sup> Sylvester,<sup>149</sup> and Lucas,<sup>157</sup> and refers to Liouville<sup>130</sup> in Chapter X.
