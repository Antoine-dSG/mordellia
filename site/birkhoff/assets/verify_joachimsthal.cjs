const assert=require('node:assert/strict');
const M=require('../preview/static/billiards.js');
let states=0,maxIntegralError=0,maxJacobianError=0;
for(const [a,b] of [[1,1],[2,1],[3,1.5]])
for(const t of [.05,.4,1.2,2.8,4.9,6.23])
for(const th of [.15,.3,1.1,Math.PI/2,2.6,2.99]){
 const c=M.step(t,th,a,b);
 const initial=M.speed(t,a,b)*Math.sin(th);
 const next=M.speed(c.t1,a,b)*Math.sin(c.theta1);
 maxIntegralError=Math.max(maxIntegralError,Math.abs(next/initial-1));
 maxJacobianError=Math.max(maxJacobianError,Math.abs(M.jacobian(t,th,a,b)-1));
 states++;
}
assert(maxIntegralError<1e-12);assert(maxJacobianError<1e-6);
const result={states,maxIntegralError,maxJacobianError,scope:'Numerical consistency checks; analytic proof in the reading page.'};
require('node:fs').writeFileSync(require('node:path').join(__dirname,'joachimsthal-validation.json'),JSON.stringify(result,null,2)+'\n');
console.log(result);
