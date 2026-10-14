<!-- passage:common-factor -->
L. Euler<sup>364</sup> obtained, in addition to two special pairs, 62 pairs [including two false pairs] of amicable numbers of the type $am,an$, in which the common factor $a$ is relatively prime to both $m$ and $n$. Write $\sigma(m)$ for the sum of all positive divisors of $m$ (Euler’s $\int m$). The conditions are therefore

$$\sigma(m)=\sigma(n),\qquad\sigma(a)\cdot\sigma(m)=a(m+n).$$

If $m$ and $n$ are both primes, then $m=n$ and we have a repeated perfect number. Euler treated five problems.

<div class="historical-note"><sup>364</sup> De numeris amicabilibus, Opuscula varii argumenti, 2, 1750, 23–107, Berlin; Comm. Arith., 1, 1849, 102–145. French transl. in Sphinx-Oedipe, Nancy, 1, 1906–7, Supplement I–LXXVI.</div>

<!-- passage:problem-one -->
(1) Euler's problem 1 is to find amicable numbers $apq,ar$, where $p,q,r$, are distinct primes not dividing the given number $a$. From the first condition we have $r=xy-1$, where $x=p+1$, $y=q+1$. From the second,

$$xy\sigma(a)=a(2xy-x-y).$$

Let $a/(2a-\sigma(a))$ equal $b/c$, a fraction in its lowest terms. Then

$$y=bx/(cx-b),\qquad(cx-b)(cy-b)=b^2.$$

Thus $x$ and $y$ are to be found by expressing $b^2$ as a product of two factors, increasing each by $b$, and dividing the results by $c$.

<!-- passage:problem-two -->
(2) Euler's problem 2 is to find amicable numbers $apq,ars$, where $p,q,r,s$ are distinct primes not dividing the given number $a$. Since $\sigma(p)\cdot\sigma(q)=\sigma(r)\cdot\sigma(s)$, we may set

$$p=\alpha x-1,\quad q=\beta y-1,\quad r=\beta x-1,\quad s=\alpha y-1.$$

We set $\sigma(a):a=2b-c:b$, where $b$ and $c$ are relatively prime. The second condition $\sigma(a)\cdot\sigma(pq)=a(pq+rs)$ gives

$$c\alpha\beta xy=b(\alpha+\beta)(x+y)-2b.$$

Multiply it by $c\alpha\beta$. Then

$$[c\alpha\beta x-b(\alpha+\beta)][c\alpha\beta y-b(\alpha+\beta)]=b^2(\alpha+\beta)^2-2bc\alpha\beta.$$

Given $\alpha,\beta,a$ and hence $b,c$, we are to express the second member as a product of two factors and then find $x,y$.

<!-- passage:problem-three -->
(3) Problem 3 is derived from problem 2 by replacing $s$ by a number $f$ not necessarily prime. Let $h$ be the greatest common divisor of $\sigma(f)=hg$ and $p+1=hx$. Then $r+1=xy$, $q+1=gy$. Also

$$ghxy\sigma(a)=\sigma(afr)=a(pq+fr)=a\{(hx-1)(gy-1)+f(xy-1)\}.$$

Multiply by $b/a$ and replace $b\sigma(a)$ by $2ab-ac$ [see case (1)]. Thus

$$exy-bhx-bgy=b(f-1),\qquad e=bf-bgh+cgh.$$

Thus $L=b^2gh+be(f-1)$ is to be expressed as the product $PQ$ of two factors and they are to be equated to $ex-bg$, $ey-bh$. The case $a=2$ is unfruitful.

<!-- passage:problem-four -->
(4) Problem 4 relates to amicable numbers $agpq,ahr$, where $p,q,r$ are primes. Eventually he took also $g$ and $h$ as primes. We may then set $g+1=km$, $h+1=kn$. For $m=1$, $n=3$, $a=4$ or 8, no amicables are found. For $m=3$, $n=1$, the cases $a=10$, $k=8$ and $a=3^3\cdot5$, $k=8$, yield (38), (55).

<!-- passage:problem-five -->
(5) Euler's final problem 5 is of a new type. He discussed amicable numbers $zap,zbq$, where $a$ and $b$ are given numbers, $p$ and $q$ are unknown primes, while $z$ is unknown but relatively prime to $a,b,p,q$. Set $\sigma(a):\sigma(b)=m:n$, where $m$ and $n$ are relatively prime. Since $(p+1)\sigma(a)=(q+1)\sigma(b)$, we may set $p+1=nx$, $q+1=mx$. The usual second condition gives

$$nx\sigma(a)\cdot\sigma(z)=za(nx-1)+zb(mx-1),\qquad\frac{z}{\sigma(z)}=\frac{nx\sigma(a)}{(na+mb)x-a-b}.$$

Let the latter fraction in its lowest terms be $r/s$. Then $z=kr$, $\sigma(z)=ks$. Since $\sigma(kr)\geqq k\sigma(r)$, we have $s\geqq\sigma(r)$. Hence we have the useful theorem:

if $z:\sigma(z)=r':s'$, $s'<\sigma(r')$, then $r'$ and $s'$ have a common factor $>1$.

<!-- passage:paganini -->
Paganini<sup>372</sup>, at age 16, announced the amicable numbers $1184=2^5\cdot37$, $1210=2\cdot5\cdot11^2$, not in the list by Euler<sup>364</sup>, but gave no indication of the method of discovery.

<div class="historical-note"><sup>372</sup> B. Nicolò I. Paganini, Atti della R. Accad. Sc. Torino, 2, 1866–7, 362. Cf. Cremona's Ital. transl. of Baltzer's Mathematik, pt. III.</div>
