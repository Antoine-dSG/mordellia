// Exact integer arithmetic within Number's safe range. UI bounds are deliberately smaller.
export function positiveInteger(n) {
  if (!Number.isSafeInteger(n) || n < 1) throw new Error('Enter a positive whole number.');
  return n;
}
export function gcd(a, b) { while (b) [a, b] = [b, a % b]; return a; }
export function factor(n) {
  positiveInteger(n);
  const factors = [];
  for (let p = 2; p <= n / p; p += p === 2 ? 1 : 2) {
    let exponent = 0;
    while (n % p === 0) { n /= p; exponent++; }
    if (exponent) factors.push([p, exponent]);
  }
  if (n > 1) factors.push([n, 1]);
  return factors;
}
export function sigma(n) {
  let result = 1;
  for (const [p, a] of factor(n)) {
    let sum = 1, power = 1;
    for (let i = 0; i < a; i++) { power *= p; sum += power; }
    result *= sum;
    if (!Number.isSafeInteger(result)) throw new Error('The sum exceeds the exact arithmetic range.');
  }
  return result;
}
export const aliquot = n => sigma(n) - n;
export function isPrime(n) {
  if (!Number.isSafeInteger(n) || n < 2) return false;
  const fs = factor(n);
  return fs.length === 1 && fs[0][1] === 1;
}
export function divisors(n) {
  positiveInteger(n);
  const values = [];
  for (let d = 1; d <= n / d; d++) if (n % d === 0) {
    values.push(d); if (d !== n / d) values.push(n / d);
  }
  return values.sort((a, b) => a - b);
}
export function eulerOne(a) {
  positiveInteger(a);
  if (a > 200) throw new Error('Choose a common factor from 1 to 200.');
  const D = 2 * a - sigma(a);
  if (D <= 0) return {a, D, rows: [], reason: 'The common factor must be deficient; D must be positive.'};
  const divisor = gcd(a, D), b = a / divisor, c = D / divisor;
  const rows = [];
  for (const u of divisors(b * b)) {
    const v = b * b / u; if (u > v) break;
    const x = (u + b) / c, y = (v + b) / c;
    const p = x - 1, q = y - 1, r = x * y - 1;
    const reasons = [];
    if (!Number.isInteger(x) || !Number.isInteger(y)) reasons.push('nonintegral x or y');
    else {
      if (![p, q, r].every(isPrime)) reasons.push('not all three values are prime');
      if (new Set([p, q, r]).size !== 3) reasons.push('primes are not distinct');
      if ([p, q, r].some(z => gcd(a, z) !== 1)) reasons.push('a shares a prime factor');
    }
    const pair = reasons.length ? null : [a * p * q, a * r];
    if (pair && (aliquot(pair[0]) !== pair[1] || aliquot(pair[1]) !== pair[0])) throw new Error('Candidate verification failed.');
    rows.push({u, v, x, y, p, q, r, reasons, pair});
  }
  return {a, D, b, c, rows};
}
export function trajectory(start, steps = 35, limit = 1e9) {
  positiveInteger(start); positiveInteger(steps);
  if (steps > 100 || start > limit) throw new Error('Use at most 100 steps and a starting value at most one billion.');
  const values = [start], seen = new Map([[start, 0]]);
  for (let i = 0; i < steps; i++) {
    const next = aliquot(values.at(-1)); values.push(next);
    if (next === 0) return {values, status: 'terminated'};
    if (seen.has(next)) return {values, status: 'cycle', cycleStart: seen.get(next), period: values.length - 1 - seen.get(next)};
    if (next > limit) return {values, status: 'value-limit'};
    seen.set(next, values.length - 1);
  }
  return {values, status: 'step-limit'};
}
