const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const M=require('../preview/static/billiards.js');
let maxDensity=0,maxBoundary=0,maxCircle=0;
for(const a of [1,2])for(const t of [.05,.4,1.2,2.8,4.9,6.23])for(const theta of [.15,.3,1.1,Math.PI/2,2.6,2.99]){
 const c=M.step(t,theta,a,1);
 assert(c.ell>0&&c.theta1>0&&c.theta1<Math.PI);
 maxBoundary=Math.max(maxBoundary,Math.abs(c.y[0]**2/a**2+c.y[1]**2-1));
 const j=M.jacobian(t,theta,a,1);
 maxDensity=Math.max(maxDensity,Math.abs(Math.sin(c.theta1)*M.speed(c.t1,a,1)*j/(Math.sin(theta)*M.speed(t,a,1))-1));
 if(a===1)maxCircle=Math.max(maxCircle,Math.abs(c.theta1-theta),Math.abs(M.delta(c.t1,t+2*theta)));
}
assert(maxDensity<1e-6);assert(maxBoundary<1e-12);assert(maxCircle<1e-12);
let t=.4,th=Math.PI/3;
for(let i=0;i<3;i++){let c=M.step(t,th,1,1);t=c.t1;th=c.theta1}
assert(Math.abs(M.delta(t,.4))<1e-12);
const result={states:72,maxDensityResidual:maxDensity,maxBoundaryResidual:maxBoundary,maxCircleFormulaError:maxCircle,triangleClosureError:Math.abs(M.delta(t,.4))};
fs.writeFileSync(path.join(__dirname,'billiard-validation.json'),JSON.stringify(result,null,2)+'\n');
console.log(result);
