(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.GeodesicMath=factory()})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 function state(s,theta,t,R=1){
  const a=s/R,c=Math.cos(a),d=Math.sin(a),ct=Math.cos(t/R),st=Math.sin(t/R);
  const q=[R*c,R*d,0],v=[-Math.cos(theta)*d,Math.cos(theta)*c,Math.sin(theta)];
  return {q:q.map((x,i)=>x*ct+R*v[i]*st),v:q.map((x,i)=>-x*st/R+v[i]*ct),jacobi:R*st,normal:R*Math.sin(theta)*st};
 }
 return {state};
});
