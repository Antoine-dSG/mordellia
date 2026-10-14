'use strict';
window.addEventListener('DOMContentLoaded',function(){
 const map=document.querySelector('.roadmap'),group=map.querySelector('svg g');
 function draw(){
  const box=map.getBoundingClientRect(),nodes=new Map([...map.querySelectorAll('[data-unit]')].map(n=>[n.dataset.unit,n]));
  group.replaceChildren();
  for(const node of nodes.values())for(const id of node.dataset.prerequisites.split(' ').filter(Boolean)){
   const from=nodes.get(id).getBoundingClientRect(),to=node.getBoundingClientRect();
   const path=document.createElementNS('http://www.w3.org/2000/svg','path');
   const fromY=(from.top+from.bottom)/2-box.top,toY=(to.top+to.bottom)/2-box.top;
   const adjacent=node.previousElementSibling===nodes.get(id);
   // Route a skipped prerequisite beside the nodes, never through an unrelated unit.
   const d=adjacent
    ? `M ${(from.left+from.right)/2-box.left} ${from.bottom-box.top+8} V ${to.top-box.top-8}`
    : `M ${from.left-box.left-8} ${fromY} H 8 V ${toY} H ${to.left-box.left-8}`;
   path.setAttribute('d',d);path.setAttribute('fill','none');
   path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','1.5');
   path.setAttribute('marker-end','url(#prerequisite-arrow)');group.append(path);
  }
 }
 new ResizeObserver(draw).observe(map);draw();
});
