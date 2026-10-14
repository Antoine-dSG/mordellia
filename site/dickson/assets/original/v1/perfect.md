<!-- passage:definitions -->
By the aliquot parts or divisors of a number are meant the divisors, including unity, which are less than the number. A number, like $6=1+2+3$, which equals the sum of its aliquot divisors is called perfect (vollkommen, vollständig). If the sum of the aliquot divisors is less than the number, as is the case with 8, the number is called deficient (diminute, defective, unvollkommen, unvollständig, mangelhaft). If the sum of the aliquot divisors exceeds the number, as is the case with 12, the number is called abundant (superfluos, plus quam-perfectus, redundantem, excédant, übervollständig, überflussig, überschiessende).

<!-- passage:euclid -->
Euclid<sup>1</sup> proved that, if $p=1+2+2^2+\cdots+2^n$ is a prime, $2^np$ is a perfect number. He showed that $2^np$ is divisible by $1,2,\ldots,2^n,p,2p,\ldots,2^{n-1}p$, but by no further number less than itself. By the usual theorem on geometrical progressions, he showed that the sum of these divisors is $2^np$.

<div class="historical-note"><sup>1</sup> Elementa, liber IX, prop. 36. Opera, 2, Leipzig, 1884, 408.</div>

<!-- passage:prime-tests -->
Fermat,<sup>59</sup> in a letter to Mersenne, June (?), 1640, stated three propositions which he had proved not without considerable trouble and which he called the basis of the discovery of perfect numbers: if $n$ is composite, $2^n-1$ is composite; if $n$ is a prime, $2^n-2$ is divisible by $2n$, and $2^n-1$ is divisible by no prime other than those of the form $2kn+1$ [cf. Euler<sup>87</sup>]. For example, $2^{11}-1=23\cdot89$, $2^{37}-1$ has the factor 223. Also $2^{23}-1$ has the factor 47, Oeuvres, 2, p. 210, letter to Frénicle, October 18, 1640.

<div class="historical-note"><sup>59</sup> Oeuvres de Fermat, 2, pp. 198–9; Varia Opera Math. d. Petri de Fermat, Tolosae, 1679, p. 177; Précis des Oeuvres math. de P. Fermat et de l'Arithmétique de Diophante, par E. Brassinne, Mém. Ac. Imp. Sc. Toulouse, (4), 3, 1853, 149–150.</div>

<!-- passage:euler-even -->
L. Euler,<sup>97</sup> in a posthumous paper, proved that every even perfect number is of Euclid's type. Let $a=2^nb$ be perfect, where $b$ is odd. Let $B$ denote the sum of the divisors of $b$. The sum $(2^{n+1}-1)B$ of the divisors of $a$ must equal $2a$. Thus $b/B=(2^{n+1}-1)/2^{n+1}$, a fraction in its lowest terms. Hence $b=(2^{n+1}-1)c$. If $c=1$, $b=2^{n+1}-1$ must be a prime since the sum of its divisors is $B=2^{n+1}$, whence Euclid's formula. If $c>1$, the sum $B$ of the divisors of $b$ is not less than $b+2^{n+1}-1+c+1$; hence

$$\frac{B}{b}\geqq\frac{2^{n+1}(c+1)}{b}>\frac{2^{n+1}}{2^{n+1}-1},$$

contrary to the earlier equation. The proof given in another posthumous paper by Euler<sup>98</sup> is not complete.

<div class="historical-note"><sup>97</sup> De numeris amicabilibus, Comm. Arith., 2, 1849, 630; Opera postuma, 1, 1862, 88.<br><sup>98</sup> Tractatus de numerorum doctrina, Comm. Arith., 2, 514; Opera postuma, 1, 14–15.</div>

<!-- passage:euler-odd -->
L. Euler<sup>98</sup> proved that any odd perfect number must be of the form $r^{4\lambda+1}P^2$, where $r$ is a prime of the form $4n+1$ [Frénicle<sup>64</sup>]. Express it as a product $ABC\ldots$ of powers of distinct primes. Denote by $a,b,c,\ldots$ the sums of the divisors of $A,B,C,\ldots$, respectively. Then $abc\ldots=2ABC\ldots$. Thus one of the numbers $a,b,\ldots$, say $a$, is the double of an odd number, and the remaining ones are odd. Thus $B,C,\ldots$ are even powers of primes, while $A=r^{4\lambda+1}$. In particular, no odd perfect number has the form $4n+3$. Amplifications of this proof have been given by Lionnet,<sup>128</sup> Stern,<sup>137</sup> Sylvester,<sup>149</sup> Lucas.<sup>157</sup> See also Liouville<sup>130</sup> in Chapter X.
