const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const M=require('../preview/static/geodesic-math.js');
let maxSphere=0,maxSpeed=0,maxTangent=0,maxCrossing=0,maxJacobi=0,states=0;
const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0);
for(const R of [.7,1,2])for(const s of [0,.4,2.7,5.8])for(const theta of [0,.03,.65,Math.PI/2,2.8,Math.PI]){
 const initial=M.state(s,theta,0,R);
 for(const u of [.2,1,Math.PI,4.2,2*Math.PI]){
  const a=M.state(s,theta,u*R,R);states++;
  maxSphere=Math.max(maxSphere,Math.abs(dot(a.q,a.q)-R*R));maxSpeed=Math.max(maxSpeed,Math.abs(dot(a.v,a.v)-1));maxTangent=Math.max(maxTangent,Math.abs(dot(a.q,a.v)));
  if(u===Math.PI||u===2*Math.PI){const sign=u===Math.PI?-1:1;for(let i=0;i<3;i++)maxCrossing=Math.max(maxCrossing,Math.abs(a.q[i]-sign*initial.q[i]),Math.abs(a.v[i]-sign*initial.v[i]));}
 }
 for(const t of [.4*R,1.3*R,3.7*R]){const eps=1e-5;maxJacobi=Math.max(maxJacobi,Math.abs(M.state(s,eps,t,R).q[2]/eps-M.state(s,0,t,R).jacobi));}
}
assert(maxSphere<1e-12&&maxSpeed<1e-12&&maxTangent<1e-12&&maxCrossing<1e-12&&maxJacobi<1e-9);
// Independent integration: compare moving conjugate endpoints with the Wronskian identity.
function k(x){return 1+.2*Math.cos(x)}
function rk(x,y,h){const f=(x,y)=>[y[1],-k(x)*y[0]],add=(y,z,a)=>y.map((v,i)=>v+a*z[i]);const a=f(x,y),b=f(x+h/2,add(y,a,h/2)),c=f(x+h/2,add(y,b,h/2)),d=f(x+h,add(y,c,h));return y.map((v,i)=>v+h*(a[i]+2*b[i]+2*c[i]+d[i])/6)}
function zeros(s){let x=s,y=[0,1],out=[];const h=.002;for(let i=0;i<10000&&out.length<2;i++){let z=rk(x,y,h);if(y[0]*z[0]<0){let lo=0,hi=h;for(let j=0;j<35;j++){let m=(lo+hi)/2;if(y[0]*rk(x,y,m)[0]>0)lo=m;else hi=m;}let dt=(lo+hi)/2;out.push({x:x+dt,derivative:rk(x,y,dt)[1]});}x+=h;y=z;}assert.equal(out.length,2);return out}
let maxEndpointDerivativeError=0,maxPeriodicityError=0,unequalSpacing=0;
for(const s of [0,.3,.9,1.7,2.8,4.1,5.6]){
 const z=zeros(s),eps=1e-4,plus=zeros(s+eps),minus=zeros(s-eps),period=zeros(s+2*Math.PI);
 z.forEach((root,i)=>{let derivative=(plus[i].x-minus[i].x)/(2*eps),expected=1/root.derivative**2;maxEndpointDerivativeError=Math.max(maxEndpointDerivativeError,Math.abs(derivative-expected));maxPeriodicityError=Math.max(maxPeriodicityError,Math.abs(period[i].x-root.x-2*Math.PI));assert(derivative>0)});
 unequalSpacing=Math.max(unequalSpacing,Math.abs(z[1].x-z[0].x-(z[0].x-s)));
}
assert(maxEndpointDerivativeError<1e-6);assert(maxPeriodicityError<1e-8);assert(unequalSpacing>.01);
const result={sphereStates:states,maxSphereError:maxSphere,maxUnitSpeedError:maxSpeed,maxTangencyError:maxTangent,maxCrossingError:maxCrossing,maxJacobiLimitError:maxJacobi,jacobiStartingPoints:7,maxEndpointDerivativeError,maxPeriodicityError,unequalZeroSpacingExample:unequalSpacing,scope:'Explicit sphere formulas and a variable positive Jacobi coefficient; not a proof of global interception or general strict boundary twist.'};
fs.writeFileSync(path.join(__dirname,'geodesic-validation.json'),JSON.stringify(result,null,2)+'\n');console.log(result);
