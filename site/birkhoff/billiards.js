(function(root){
'use strict';
function dot(a,b){return a[0]*b[0]+a[1]*b[1]}
function unit(a){var n=Math.hypot(a[0],a[1]);return [a[0]/n,a[1]/n]}
function delta(a,b){return Math.atan2(Math.sin(a-b),Math.cos(a-b))}
function speed(t,a,b){return Math.hypot(a*Math.sin(t),b*Math.cos(t))}
function step(t,theta,a,b){
 var x=[a*Math.cos(t),b*Math.sin(t)],tau=unit([-a*Math.sin(t),b*Math.cos(t)]);
 var u=[Math.cos(theta)*tau[0]-Math.sin(theta)*tau[1],Math.cos(theta)*tau[1]+Math.sin(theta)*tau[0]];
 var ell=-2*(x[0]*u[0]/(a*a)+x[1]*u[1]/(b*b))/(u[0]*u[0]/(a*a)+u[1]*u[1]/(b*b));
 var y=[x[0]+ell*u[0],x[1]+ell*u[1]];
 var t1=Math.atan2(y[1]/b,y[0]/a);if(t1<0)t1+=2*Math.PI;
 var n=unit([y[0]/(a*a),y[1]/(b*b)]),normal=dot(u,n);
 var out=[u[0]-2*normal*n[0],u[1]-2*normal*n[1]];
 var tau1=unit([-a*Math.sin(t1),b*Math.cos(t1)]);
 var theta1=Math.acos(Math.max(-1,Math.min(1,dot(out,tau1))));
 return {t:t,theta:theta,t1:t1,theta1:theta1,x:x,y:y,tau:tau,tau1:tau1,u:u,out:out,ell:ell};
}
function jacobian(t,th,a,b,h){
 h=h||1e-6;var ap=step(t,th+h,a,b),am=step(t,th-h,a,b),bp=step(t+h,th,a,b),bm=step(t-h,th,a,b);
 return ((ap.theta1-am.theta1)*delta(bp.t1,bm.t1)-(bp.theta1-bm.theta1)*delta(ap.t1,am.t1))/(4*h*h);
}
var api={step:step,jacobian:jacobian,speed:speed,delta:delta};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.BilliardMath=api;
})(typeof window!=='undefined'?window:this);
