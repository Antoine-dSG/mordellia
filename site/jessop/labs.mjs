export function ramification(nodes) {
  if (![8,9,10].includes(nodes)) throw new RangeError('Choose 8, 9 or 10 nodes.');
  return {genus:10-nodes, degree:2, ramification:22-2*nodes};
}
export function sexticBudget(degrees, internal) {
  if (!degrees.length || degrees.some(d=>!Number.isInteger(d)||d<1) || degrees.reduce((a,b)=>a+b,0)!==6) throw new RangeError('Component degrees must be positive and sum to six.');
  const capacity=degrees.reduce((n,d)=>n+(d-1)*(d-2)/2,0);
  const intersections=degrees.reduce((n,d,i)=>n+degrees.slice(i+1).reduce((s,e)=>s+d*e,0),0);
  if (!Number.isInteger(internal)||internal<0||internal>capacity) return {valid:false,capacity,intersections};
  return {valid:true,capacity,intersections,internal,nodes:intersections+internal,totalGenus:capacity-internal};
}
if (typeof document !== 'undefined') for (const lab of document.querySelectorAll('[data-lab]')) {
  const output=lab.querySelector('output');
  const update=()=>{
    if(lab.dataset.lab==='ramification') {
      const n=Number(lab.querySelector('[data-input="nodes"]').value), r=ramification(n);
      output.textContent=`Genus 10 − ${n} = ${r.genus}. The degree-two pencil has 2g + 2 = ${r.ramification} ramified fibres, giving ${r.ramification} tangent cubics under the stated hypotheses.`;
    } else {
      const degrees=lab.querySelector('[data-input="partition"]').value.split(',').map(Number);
      const input=lab.querySelector('[data-input="internal"]');
      const r=sexticBudget(degrees,input.value===''?NaN:Number(input.value));
      input.max=r.capacity;
      output.textContent=r.valid?`${r.intersections} intersections between components + ${r.internal} internal nodes = ${r.nodes} nodes. The normalization genera sum to ${r.totalGenus}. In a valid nodal projection this would correspond to ${r.nodes+1} surface nodes.`:`Choose an integer from 0 to ${r.capacity}. These components cannot have more than ${r.capacity} internal ordinary nodes.`;
    }
  };
  lab.addEventListener('input',update); lab.addEventListener('change',update); update();
}
