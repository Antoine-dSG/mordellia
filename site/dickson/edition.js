'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const data = document.getElementById('edition-data');
  if (!data) return;
  const {groups, targetLabels = {}, sourcePageOffset = 12, sourcePageFiles = {}} = JSON.parse(data.textContent);
  const modes = ['original', 'modernized', 'reinterpreted'];
  const panels = Object.fromEntries(modes.map(mode => [mode, document.getElementById(`panel-${mode}`)]));
  const tabs = [...document.querySelectorAll('[data-edition-mode]')];
  const compare = document.getElementById('edition-compare');
  const choices = document.querySelector('.comparison-choices');
  const checks = [...choices.querySelectorAll('input')];
  const select = document.getElementById('edition-passage');
  const note = document.getElementById('correspondence-note');
  const nav = document.querySelector('.page-contents');
  const previous = document.getElementById('passage-previous');
  const next = document.getElementById('passage-next');
  let mode = 'original';
  let group = groups[0];

  const selectedModes = () => compare.checked ? checks.filter(c => c.checked).map(c => c.value) : [mode];
  function storeURL() {
    const url = new URL(location.href);
    if (mode === 'original') url.searchParams.delete('mode');
    else url.searchParams.set('mode', mode);
    if (compare.checked) url.searchParams.set('compare', selectedModes().join(','));
    else url.searchParams.delete('compare');
    url.hash = `passage-${group.id}`;
    history.replaceState(null, '', url);
  }
  function reveal(target) {
    for (let parent = target; parent; parent = parent.parentElement) {
      if (parent.tagName === 'DETAILS') parent.open = true;
    }
  }
  function moveTo(target, panel) {
    reveal(target);
    if (compare.checked) {
      const scroller = panel.querySelector('.edition-scroll');
      scroller.scrollTop += target.getBoundingClientRect().top - scroller.getBoundingClientRect().top - 12;
    } else target.scrollIntoView({behavior: 'instant', block: 'start'});
  }
  function navigate(scroll = true) {
    select.value = group.id;
    previous.disabled = groups.indexOf(group) === 0;
    next.disabled = groups.indexOf(group) === groups.length - 1;
    document.querySelectorAll('.aligned-passage').forEach(el => el.classList.remove('aligned-passage'));
    note.replaceChildren();
    const explanation = document.createElement('p');
    explanation.textContent = `${group.label}: ${group.note}`;
    note.append(explanation);
    if (group.pages.length) {
      const links = document.createElement('p');
      links.append('Source pages: ');
      for (const page of group.pages) {
        const link = document.createElement('a');
        link.href = sourcePageFiles[page] || `assets/source/scan-${Number(page) + sourcePageOffset}.png`;
        link.textContent = String(page);
        links.append(link, ' ');
      }
      note.append(links);
    }
    for (const activeMode of selectedModes()) {
      const panel = panels[activeMode];
      const targets = group[activeMode].map(id => document.getElementById(id));
      const missing = panel.querySelector('.unmatched-passage');
      missing.hidden = targets.length > 0;
      missing.textContent = `No corresponding ${activeMode} passage for “${group.label}”. ${group.note}`;
      const counterparts = panel.querySelector('.counterparts');
      counterparts.replaceChildren();
      counterparts.hidden = targets.length < 2;
      if (targets.length > 1) {
        const label = document.createElement('span');
        label.textContent = 'Corresponding sections:';
        counterparts.append(label);
      }
      targets.forEach(target => {
        target.classList.add('aligned-passage');
        if (targets.length > 1) {
          const link = document.createElement('a');
          link.href = `#${target.id}`;
          const heading = target.matches('h2,h3,h4') ? target : target.querySelector('h2,h3,h4');
          link.textContent = targetLabels[target.id] || heading?.textContent || group.label;
          link.addEventListener('click', event => { event.preventDefault(); moveTo(target, panel); });
          counterparts.append(link);
        }
      });
      // An unmatched comparison panel stays explicit instead of suggesting a false match.
      panel.querySelector('.edition-scroll').hidden = compare.checked && !targets.length;
      if (scroll && targets.length) moveTo(targets[0], panel);
      else if (scroll && !compare.checked) missing.scrollIntoView({behavior: 'instant', block: 'start'});
    }
    // A deep single-column scroll position can hide the starts of both new panels.
    if (scroll && compare.checked) document.querySelector('.edition-toolbar').scrollIntoView({behavior: 'instant', block: 'start'});
  }
  function render(scroll = true, save = true) {
    document.body.classList.toggle('comparing-editions', compare.checked);
    choices.hidden = !compare.checked;
    const visible = selectedModes();
    if (!visible.includes(mode)) mode = visible[0];
    document.querySelector('.edition-grid').style.setProperty('--edition-columns', visible.length);
    for (const m of modes) {
      panels[m].hidden = !visible.includes(m);
      // Multiple visible versions are named regions, not simultaneously selected tabpanels.
      panels[m].setAttribute('role', compare.checked ? 'region' : 'tabpanel');
      panels[m].querySelector('.edition-scroll').hidden = false;
    }
    for (const tab of tabs) {
      tab.setAttribute('aria-selected', String(tab.dataset.editionMode === mode));
      tab.tabIndex = tab.dataset.editionMode === mode ? 0 : -1;
    }
    const selectedCount = checks.filter(c => c.checked).length;
    for (const check of checks) check.disabled = selectedCount === 2 && check.checked;
    nav.replaceChildren();
    for (const item of groups) {
      if (!compare.checked && !item[mode].length) continue;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item.label;
      a.href = `#passage-${item.id}`;
      a.addEventListener('click', event => { event.preventDefault(); group = item; navigate(); storeURL(); });
      li.append(a); nav.append(li);
    }
    navigate(scroll);
    if (save) storeURL();
    // Canvas widgets initially hidden need a fresh size when their panel becomes visible.
    window.dispatchEvent(new Event('resize'));
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      mode = tab.dataset.editionMode; compare.checked = false; render();
    });
    tab.addEventListener('keydown', event => {
      const index = event.key === 'ArrowRight' ? (i + 1) % 3 : event.key === 'ArrowLeft' ? (i + 2) % 3 : event.key === 'Home' ? 0 : event.key === 'End' ? 2 : -1;
      if (index >= 0) { event.preventDefault(); tabs[index].focus(); tabs[index].click(); }
    });
  });
  compare.addEventListener('change', () => {
    if (compare.checked) {
      if (!checks.find(c => c.value === mode).checked) {
        checks.forEach(c => { c.checked = c.value === mode || c.value === 'original'; });
      }
    }
    render();
  });
  checks.forEach(check => check.addEventListener('change', () => render()));
  select.addEventListener('change', () => { group = groups.find(g => g.id === select.value); navigate(); storeURL(); });
  previous.addEventListener('click', () => { group = groups[Math.max(0, groups.indexOf(group) - 1)]; navigate(); storeURL(); });
  next.addEventListener('click', () => { group = groups[Math.min(groups.length - 1, groups.indexOf(group) + 1)]; navigate(); storeURL(); });

  function restore() {
    const params = new URLSearchParams(location.search);
    mode = modes.includes(params.get('mode')) ? params.get('mode') : 'original';
    const requested = [...new Set((params.get('compare') || '').split(',').filter(m => modes.includes(m)))];
    compare.checked = requested.length >= 2;
    checks.forEach(c => { c.checked = requested.length >= 2 ? requested.includes(c.value) : c.value !== 'modernized'; });
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { id = ''; }
    const concept = groups.find(g => `passage-${g.id}` === id);
    const target = document.getElementById(id);
    const targetPanel = target?.closest('.edition-panel');
    if (concept) group = concept;
    else if (targetPanel) {
      mode = modes.find(m => panels[m] === targetPanel);
      if (compare.checked && !checks.find(c => c.value === mode).checked) compare.checked = false;
      // Prefer the nearest aligned passage over a broad enclosing section.
      for (let passage = target; passage && passage !== targetPanel; passage = passage.parentElement) {
        const match = groups.find(g => g[mode].includes(passage.id));
        if (match) { group = match; break; }
      }
    } else if (params.has('exposition') || params.has('orbit')) mode = 'reinterpreted';
    render(Boolean(concept || targetPanel), false);
    // Old proof-route URLs now lead to the visible symplectic argument.
    if (!target && mode === 'reinterpreted' && ['symplectic', 'compare'].includes(params.get('exposition'))) {
      const proof = document.getElementById('symplectic-proof');
      if (proof) moveTo(proof, panels.reinterpreted);
    }
    // Keep old deep links exact, including proofs within a larger concept.
    if (target) { reveal(target); if (targetPanel) moveTo(target, targetPanel); else target.scrollIntoView({behavior:'instant'}); }
  }
  addEventListener('hashchange', restore);
  addEventListener('popstate', restore);
  restore();
});
