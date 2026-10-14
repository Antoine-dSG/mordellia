'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const det=m=>m[0][0]*m[1][1]-m[0][1]*m[1][0];
const inverse=m=>{const d=det(m);return [[m[1][1]/d,-m[0][1]/d],[-m[1][0]/d,m[0][0]/d]]};
const displacement=m=>[[1-m[0][0],-m[0][1]],[-m[1][0],1-m[1][1]]];
function winding(m){const n=4096;let sum=0,previous;for(let k=0;k<=n;k++){const t=k*2*Math.PI/n,x=m[0][0]*Math.cos(t)+m[0][1]*Math.sin(t),y=m[1][0]*Math.cos(t)+m[1][1]*Math.sin(t),a=Math.atan2(y,x);if(k)sum+=Math.atan2(Math.sin(a-previous),Math.cos(a-previous));previous=a}return sum/(2*Math.PI)}
let maxWindingError=0,matrixCases=0,maxInverseDetError=0;
for(let k=-30;k<=40;k++){const a=k/10,A=[[a,-1],[1,0]],B=inverse(A),M=displacement(A),N=displacement(B);assert.equal(det(A),1);maxInverseDetError=Math.max(maxInverseDetError,Math.abs(det(M)-det(N)));if(k===20){assert.equal(det(M),0);assert.equal(M[0][0]+M[0][1],0);assert.equal(M[1][0]+M[1][1],0);continue}for(const m of [M,N]){const err=Math.abs(winding(m)-Math.sign(2-a));assert.ok(err<1e-10);maxWindingError=Math.max(maxWindingError,err)}matrixCases++}
let sphereCases=0,maxReversalError=0;
function state(s,theta,t){const q=[Math.cos(s),Math.sin(s),0],v=[-Math.cos(theta)*Math.sin(s),Math.cos(theta)*Math.cos(s),Math.sin(theta)];return {q:q.map((x,i)=>x*Math.cos(t)+v[i]*Math.sin(t)),v:q.map((x,i)=>-x*Math.sin(t)+v[i]*Math.cos(t))}}
for(let i=0;i<12;i++)for(let j=1;j<10;j++){const s=i*2*Math.PI/12,theta=j*Math.PI/10,z=state(s,theta,0),cross=state(s,theta,Math.PI),r=state(s+Math.PI,Math.PI-theta,0),rr=state(s+2*Math.PI,theta,0);for(let k=0;k<3;k++)maxReversalError=Math.max(maxReversalError,Math.abs(cross.q[k]-r.q[k]),Math.abs(cross.v[k]+r.v[k]),Math.abs(z.q[k]-rr.q[k]),Math.abs(z.v[k]-rr.v[k]));assert.ok(Math.hypot(...z.q.map((x,k)=>x-r.q[k]))>1.9);sphereCases++}
assert.ok(maxReversalError<1e-12);
const result={matrixCases,sphereCases,maxWindingError,maxInverseDetError,maxReversalError,degenerateModel:'a=2: line of fixed points, no individual index',scope:'Local linear index models and exact sphere reversal. Not a proof of global existence theorems.'};fs.writeFileSync(path.join(__dirname,'closed-geodesics-validation.json'),JSON.stringify(result,null,2)+'\n');console.log(result);
