'use strict';

// A row holds its concept index followed by a landing place in each edition.
// Repeated landing places deliberately allow different proofs to converge.
class ComparisonBlocks {
  constructor(panels, rows, onAlign) {
    this.rows = rows;
    this.onAlign = onAlign;
    this.columns = Object.entries(panels).map(([mode, panel], index) => {
      const scroller = panel.querySelector('.edition-scroll');
      const starts = new Map();
      for (const row of rows) {
        const start = row[index + 1];
        if (!starts.has(start)) starts.set(start, []);
        starts.get(start).push(row);
      }
      for (const matches of starts.values()) matches.sort((a, b) => a[1] - b[1]);
      const column = {
        mode, panel, scroller, index, starts,
        landmarks: [...scroller.querySelectorAll('[data-reading]')],
        ordered: [...starts.keys()].sort((a, b) => a - b)
      };
      scroller.addEventListener('dblclick', event => {
        if (!this.active || event.target.closest('a,button,input,select,textarea,label,summary,canvas,[contenteditable="true"]')) return;
        event.preventDefault();
        const selection = window.getSelection();
        if (selection.anchorNode && scroller.contains(selection.anchorNode)) selection.removeAllRanges();
        this.align(column, event.clientY - scroller.getBoundingClientRect().top);
      });
      const alignVisible = () => this.align(column, Math.min(80, scroller.clientHeight / 4));
      panel.querySelector('.align-reading').addEventListener('click', alignVisible);
      scroller.addEventListener('keydown', event => {
        if (event.key === 'Enter' && event.target === scroller && this.active) {
          event.preventDefault();
          alignVisible();
        }
      });
      return column;
    });
  }

  reset(active) {
    this.active = active;
    this.last = null;
    for (const {scroller} of this.columns) scroller.querySelector('.reading-flash')?.remove();
  }

  landing(groupIndex, mode) {
    const column = this.columns.find(item => item.mode === mode);
    const row = this.rows.find(item => item[0] === groupIndex);
    return column.landmarks[row[column.index + 1]];
  }

  // Measure only on activation, after math typesetting, reflow or a disclosure
  // change. Geometry divides a long argument locally. Its partners come from the
  // authored rows, independent of the length and order of the other editions.
  blocks(column) {
    const {scroller, landmarks, ordered} = column;
    const origin = scroller.getBoundingClientRect().top - scroller.scrollTop;
    const limit = Math.max(32, Math.min(320, Math.floor(scroller.clientHeight * 0.65)));
    const points = [];
    let stop = 0;
    for (const node of landmarks) {
      const index = Number(node.dataset.reading);
      while (stop + 1 < ordered.length && ordered[stop + 1] <= index) stop++;
      const rect = node.getBoundingClientRect();
      if (!rect.height || (node.closest('details:not([open])') && !node.matches('summary'))) continue;
      const top = Math.max(0, rect.top - origin);
      if (points.length && top <= points.at(-1).top + 1) continue;
      points.push({node, top, key: ordered[stop]});
    }
    const blocks = [];
    for (const [i, point] of points.entries()) {
      const end = points[i + 1]?.top ?? Math.max(point.top + 1, scroller.scrollHeight - 12);
      // Prefer paragraph/equation boundaries. Inside a long paragraph cut at
      // rendered line boundaries so that the flash includes complete lines.
      let top = point.top;
      if (end - top > limit) {
        const range = document.createRange();
        range.selectNodeContents(point.node);
        const lineTops = [...range.getClientRects()].filter(rect => rect.height > 8)
          .map(rect => rect.top - origin).sort((a, b) => a - b);
        while (end - top > limit) {
          const cutoff = top + limit;
          const cut = lineTops.findLast(y => y <= cutoff && y >= top + limit * 0.65) ?? cutoff;
          blocks.push({top, end: cut, key: point.key});
          top = cut;
        }
      }
      const last = blocks.at(-1);
      if (last && last.key === point.key && end - last.top <= limit) last.end = end;
      else blocks.push({top, end, key: point.key});
    }
    return blocks;
  }

  align(source, offset) {
    if (!this.active) return;
    const sourceBlocks = this.blocks(source);
    const y = source.scroller.scrollTop + offset;
    const block = sourceBlocks.findLast(item => item.top <= y) || sourceBlocks[0];
    if (!block) return;
    const candidates = source.starts.get(block.key);
    const ordinal = sourceBlocks.filter(item => item.key === block.key).indexOf(block);
    const returning = candidates.includes(this.last?.row) && this.last.positions[source.index] === ordinal;
    const row = returning ? this.last.row : candidates[0];
    const positions = [];
    positions[source.index] = ordinal;
    const level = block.top - source.scroller.scrollTop;
    this.onAlign(row[0]);
    this.flash(source.scroller, block);
    for (const column of this.columns) {
      if (column === source || column.panel.hidden) continue;
      const key = row[column.index + 1];
      const target = column.landmarks[key];
      for (let parent = target.parentElement; parent; parent = parent.parentElement) {
        if (parent.tagName === 'DETAILS') parent.open = true;
      }
      const blocks = this.blocks(column).filter(item => item.key === key);
      if (!blocks.length) continue;
      const targetY = target.getBoundingClientRect().top - column.scroller.getBoundingClientRect().top + column.scroller.scrollTop;
      const first = Math.max(0, blocks.findIndex(item => item.end > targetY + 1));
      // Original and Modernized follow the same proof. For an unshared pair
      // of stops, pair their smaller visual blocks in order, up to the last one.
      // Reinterpreted starts at the assigned mathematical step.
      const sameProof = source.mode !== 'reinterpreted' && column.mode !== 'reinterpreted';
      const paired = sameProof && candidates.every(item => item[column.index + 1] === key)
        && column.starts.get(key).every(item => item[source.index + 1] === block.key);
      let destination = paired ? first + ordinal : first;
      if (returning) destination = this.last.positions[column.index] ?? destination;
      const position = Math.min(destination, blocks.length - 1);
      positions[column.index] = position;
      const match = blocks[position];
      const margin = Math.max(8, Math.min(level, column.scroller.clientHeight - (match.end - match.top) - 8));
      column.scroller.scrollTop = match.top - margin;
      this.flash(column.scroller, match);
    }
    this.last = {row, positions};
  }

  flash(scroller, block) {
    scroller.querySelector('.reading-flash')?.remove();
    const flash = document.createElement('span');
    flash.className = 'reading-flash';
    flash.setAttribute('aria-hidden', 'true');
    flash.style.top = block.top + 'px';
    flash.style.height = Math.max(1, block.end - block.top - 2) + 'px';
    scroller.append(flash);
    setTimeout(() => flash.remove(), 1000);
  }
}
