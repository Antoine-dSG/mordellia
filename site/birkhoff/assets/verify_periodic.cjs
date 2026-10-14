const assert=require('node:assert/strict'),fs=require('node:fs');
const M=require('../preview/static/billiards.js'),pi=Math.PI,tau=2*pi;
const gcd=(a,b)=>b?gcd(b,a%b):a;
let cases=0,maxClosure=0,maxWinding=0,maxReverse=0;
for(let n=2;n<=17;n++)for(let k=1;k<n;k++)if(gcd(k,n)===1){
 let t=.4,th=pi*k/n,sum=0;
 for(let j=1;j<=n;j++){
  const c=M.step(t,th,1,1);sum+=(c.t1-t+tau)%tau;t=c.t1;th=c.theta1;
  if(j<n)assert(Math.abs(M.delta(t,.4))>1e-6);
 }
 maxClosure=Math.max(maxClosure,Math.abs(M.delta(t,.4)),Math.abs(th-pi*k/n));
 maxWinding=Math.max(maxWinding,Math.abs(sum/tau-k));cases++;
}
for(const a of [1,2,3])for(const t of [.1,.7,2.4,5.8])for(const th of [.2,.8,1.9,2.9]){
 const c=M.step(t,th,a,1),r=M.step(c.t1,pi-c.theta1,a,1);
 maxReverse=Math.max(maxReverse,Math.abs(M.delta(r.t1,t)),Math.abs(r.theta1-(pi-th)));
}
const axis=[];
for(const t of [0,pi/2]){
 const a=M.step(t,pi/2,2,1),b=M.step(a.t1,a.theta1,2,1);
 const error=Math.max(Math.abs(M.delta(b.t1,t)),Math.abs(b.theta1-pi/2));
 assert(error<1e-12);axis.push({start:t,closureError:error});
}
function arc(t,h,a,b){let sum=0,N=64;for(let j=0;j<=N;j++)sum+=(j===0||j===N?1:j%2?4:2)*M.speed(t+j*h/N,a,b);return sum*h/(3*N)}
const grazing=[];
for(const t of [.4,1.1,2.2]){
 const a=2,b=1,v=M.speed(t,a,b),kap=a*b/v**3,kp=-3*a*b*(a*a-b*b)*Math.sin(t)*Math.cos(t)/v**6;
 const errors=[];
 for(const theta of [.08,.04,.02,.01]){
  const c=M.step(t,theta,a,b),h=arc(t,(c.t1-t+tau)%tau,a,b),kap1=a*b/M.speed(c.t1,a,b)**3;
  const hError=Math.abs(h-(2*theta/kap-4*kp*theta*theta/(3*kap**3)));
  const angleError=Math.abs(c.theta1-theta-2*kp*theta*theta/(3*kap**2));
  const invariantError=Math.abs(c.theta1*kap1**(-1/3)-theta*kap**(-1/3));
  errors.push({theta,hError,angleError,invariantError});
  assert(hError<30*theta**3&&angleError<30*theta**3&&invariantError<30*theta**3);
 }
 assert(errors[3].hError<errors[0].hError/100);
 assert(errors[3].angleError<errors[0].angleError/100);
 grazing.push({t,errors});
}
assert(maxClosure<1e-10&&maxWinding<1e-10&&maxReverse<1e-10);
const result={rationalCircleCases:cases,maxClosure,maxWinding,maxReverse,axis,grazing,scope:'Numerical consistency checks for explicit examples, reversal and local asymptotics; not a proof of the Poincare–Birkhoff theorem.'};
fs.writeFileSync(require('node:path').join(__dirname,'periodic-validation.json'),JSON.stringify(result,null,2)+'\n');
console.log({cases,maxClosure,maxWinding,maxReverse,axis,grazing:'Second-order remainders checked at three ellipse positions and four angles'});
