'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const errors = [];
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '\\[', right: '\\]', display: true},
        {left: '\\(', right: '\\)', display: false},
        {left: '$', right: '$', display: false}
      ],
      throwOnError: false,
      errorCallback: error => errors.push(error)
    });
  } else errors.push('KaTeX failed to load');
  document.body.dataset.mathErrors = String(errors.length + document.querySelectorAll('.katex-error').length);
  if (errors.length) console.error(errors);

  const progress = document.getElementById('progress');
  function updateProgress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? 100 * scrollY / max : 0}%`;
  }
  addEventListener('scroll', updateProgress, {passive: true});
  updateProgress();
  const contents = [...document.querySelectorAll('.page-contents a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      for (const link of contents) link.classList.toggle('active', link.hash === '#' + entry.target.id);
    }
  }, {rootMargin: '-15% 0px -60% 0px'});
  for (const link of contents) {
    const target = document.getElementById(link.hash.slice(1));
    if (target) observer.observe(target);
  }
  function revealHash() {
    const target = document.getElementById(location.hash.slice(1));
    if (target?.tagName === 'DETAILS') {
      target.open = true;
      target.scrollIntoView();
    }
  }
  revealHash();
  addEventListener('hashchange', revealHash);
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.hash.slice(1));
      if (target?.tagName === 'DETAILS') target.open = true;
    });
  });
});
