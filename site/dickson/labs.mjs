import {factor, sigma, aliquot, gcd, eulerOne, trajectory} from './arithmetic.mjs';
const fmt = n => Number.isInteger(n) ? n.toLocaleString('en-US') : String(n);
const add = (parent, tag, text) => { const el = document.createElement(tag); el.textContent = text; parent.append(el); return el; };
const table = (parent, headings, rows) => {
  const wrapper = add(parent, 'div', ''); wrapper.className = 'table-scroll';
  const t = add(wrapper, 'table', ''); const head = add(t, 'thead', ''), tr = add(head, 'tr', '');
  headings.forEach(text => { const th = add(tr, 'th', text); th.scope = 'col'; });
  const body = add(t, 'tbody', '');
  rows.forEach(row => { const tr = add(body, 'tr', ''); row.forEach(text => add(tr, 'td', text)); });
};
for (const form of document.querySelectorAll('[data-lab]')) {
  const output = form.querySelector('.lab-output');
  function run(event) {
    event?.preventDefault(); output.replaceChildren();
    try {
      const data = new FormData(form);
      if (form.dataset.lab === 'divisors') {
        const n = Number(data.get('n'));
        if (n > 1e9) throw new Error('Use an integer at most one billion.');
        const fs = factor(n), sum = sigma(n), g = gcd(sum, n);
        add(output, 'p', `${fmt(n)} = ${fs.length ? fs.map(([p,a]) => `${p}${a > 1 ? '^' + a : ''}`).join(' × ') : '1 (empty prime product)'}`);
        table(output, ['Prime power', 'Divisor sum', 'Local ratio'], fs.map(([p,a]) => [`${p}^${a}`, fmt(sigma(p ** a)), `${sigma(p ** a)}/${p ** a}`]));
        add(output, 'p', `σ(n) = ${fmt(sum)}; s(n) = ${fmt(sum - n)}; A(n) = ${sum/g}/${n/g}. This number is ${sum === 2*n ? 'perfect' : sum < 2*n ? 'deficient' : 'abundant'}.`);
        if (sum >= 2*n) {
          const removals = fs.map(([p]) => [n/p, sigma(n/p)]);
          table(output, ['Proper divisor n/p', 'σ(n/p)', 'Compared with 2(n/p)'], removals.map(([m,s]) => [fmt(m),fmt(s),s < 2*m ? 'deficient' : 'non-deficient']));
          add(output, 'p', removals.every(([m,s]) => s < 2*m) ? 'Every maximal proper divisor is deficient: this number is primitive non-deficient.' : 'A proper divisor is non-deficient: this number is not primitive.');
        }
      } else if (form.dataset.lab === 'euler') {
        const result = eulerOne(Number(data.get('a')));
        if (result.reason) add(output, 'p', `D = ${result.D}. ${result.reason}`);
        else {
          add(output, 'p', `D = ${result.D}; b/c = ${result.b}/${result.c}; factor b² = ${result.b ** 2}.`);
          table(output, ['u, v', 'p, q, r', 'Outcome'], result.rows.map(row => [`${row.u}, ${row.v}`, [row.p,row.q,row.r].map(fmt).join(', '), row.pair ? `Verified pair: ${row.pair.map(fmt).join(', ')}` : row.reasons.join('; ')]));
          add(output, 'p', `${result.rows.filter(r => r.pair).length} accepted pair(s). Every unordered positive factor pair has been checked for this a.`);
        }
      } else {
        const result = trajectory(Number(data.get('n')), Number(data.get('steps')));
        const labels = {terminated:'Reached zero; the trajectory terminates.', 'step-limit':'Step limit reached; eventual behavior is unresolved.', 'value-limit':'Value limit exceeded; eventual behavior is unresolved.'};
        add(output, 'p', result.status === 'cycle' ? `Cycle detected with least period ${result.period}, beginning at ${fmt(result.values[result.cycleStart])}.` : labels[result.status]);
        const chain = add(output, 'p', result.values.map(fmt).join(' → ')); chain.className = 'trajectory';
        table(output, ['n', 'σ(n)', 'Next s(n)'], result.values.slice(0,-1).map((n,i) => [fmt(n),fmt(n+result.values[i+1]),fmt(result.values[i+1])]));
      }
    } catch (error) { add(output, 'p', error.message); }
  }
  form.addEventListener('submit', run); run();
}
