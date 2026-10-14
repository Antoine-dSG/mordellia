'use strict';
window.addEventListener('DOMContentLoaded',function(){
 const angle=document.getElementById('geodesic-angle'),time=document.getElementById('geodesic-time');
 const sphere=document.getElementById('geodesic-sphere'),chart=document.getElementById('geodesic-jacobi');
 let exactTime=null;
 function context(canvas){const box=canvas.getBoundingClientRect(),ratio=Math.min(devicePixelRatio||1,2);canvas.width=box.width*ratio;canvas.height=box.height*ratio;const c=canvas.getContext('2d');c.setTransform(ratio,0,0,ratio,0,0);c.clearRect(0,0,box.width,box.height);return [c,box.width,box.height]}
 function draw(){
  if(!sphere.getClientRects().length)return;
  const theta=Math.PI*Number(angle.value),t=exactTime===null?Number(time.value):exactTime;
  let [c,w,h]=context(sphere),scale=Math.min(w,h)*.34,cx=w/2,cy=h/2+10;
  function project(q){const x=.8*q[0]-.6*q[1],depth=.6*q[0]+.8*q[1];return [cx+scale*x,cy-scale*(.84*q[2]-.54*depth),.84*depth+.54*q[2]]}
  c.fillStyle='#f5f8f5';c.beginPath();c.arc(cx,cy,scale,0,2*Math.PI);c.fill();c.strokeStyle='#d9ded9';c.stroke();
  function curve(point,color,width){for(let i=1;i<=200;i++){let a=project(point(2*Math.PI*(i-1)/200)),b=project(point(2*Math.PI*i/200));c.strokeStyle=color;c.lineWidth=width;c.setLineDash(b[2]<0?[2,3]:[]);c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.stroke()}c.setLineDash([])}
  curve(a=>[Math.cos(a),Math.sin(a),0],'#a5b4b5',1.2);
  curve(a=>GeodesicMath.state(0,theta,a).q,'#0d6870',2);
  c.font='12px -apple-system, sans-serif';c.fillStyle='#697579';c.fillText('Geodesic and equator',16,23);
  [[1,0,0],[-1,0,0]].forEach((q,i)=>{const p=project(q);c.fillStyle='#ab783c';c.beginPath();c.arc(p[0],p[1],4,0,2*Math.PI);c.fill();c.fillStyle='#1c2d38';c.fillText(i?'π':'0, 2π',p[0]+7,p[1]-7)});
  let p=project(GeodesicMath.state(0,theta,t).q);c.fillStyle='#0d6870';c.beginPath();c.arc(p[0],p[1],6,0,2*Math.PI);c.fill();
  [c,w,h]=context(chart);const left=37,right=w-18,mid=h/2+6,amp=h*.29;
  const px=a=>left+(right-left)*a/(2*Math.PI),py=y=>mid-amp*y;
  c.font='12px -apple-system, sans-serif';c.fillStyle='#697579';c.fillText('Normal separation',16,23);
  c.strokeStyle='#d9ded9';c.lineWidth=1;
  [0,Math.PI,2*Math.PI].forEach((a,i)=>{c.beginPath();c.moveTo(px(a),py(1.15));c.lineTo(px(a),py(-1.15));c.stroke();c.fillText(['0','π','2π'][i],px(a)-5,h-23)});
  c.beginPath();c.moveTo(left,mid);c.lineTo(right,mid);c.stroke();
  [-1,1].forEach(v=>c.fillText(String(v),14,py(v)+4));
  [[1,'#ab783c'],[Math.sin(theta),'#0d6870']].forEach(([factor,color])=>{c.strokeStyle=color;c.lineWidth=2;c.beginPath();for(let i=0;i<=200;i++){let a=2*Math.PI*i/200;i?c.lineTo(px(a),py(factor*Math.sin(a))):c.moveTo(px(a),py(factor*Math.sin(a)))}c.stroke();c.fillStyle=color;c.beginPath();c.arc(px(t),py(factor*Math.sin(t)),4,0,2*Math.PI);c.fill()});
  c.strokeStyle='#697579';c.setLineDash([3,4]);c.beginPath();c.moveTo(px(t),py(1.1));c.lineTo(px(t),py(-1.1));c.stroke();c.setLineDash([]);
  document.getElementById('geodesic-angle-value').textContent=theta.toFixed(3)+' rad';
  angle.setAttribute('aria-valuetext',theta.toFixed(3)+' radians');
  time.setAttribute('aria-valuetext',(t/Math.PI).toFixed(3)+' pi');
  document.getElementById('geodesic-time-value').textContent=(t/Math.PI).toFixed(3)+' π';
  let tangent=theta<1e-8||Math.PI-theta<1e-8;
  let status=tangent?'Tangent state: no transverse crossing. π and 2π are limiting conjugate times.':t<1e-8?'Initial state: leaving the equator toward the + side.':Math.abs(t-Math.PI)<1e-8?'First crossing: entering the − side; position and velocity are reversed.':Math.abs(t-2*Math.PI)<1e-8?'Full return: the initial position and velocity are both restored.':t<Math.PI?'First excursion: on the + side.':'Second excursion: on the − side.';
  document.getElementById('geodesic-status').textContent=status;
  sphere.dataset.time=String(t);sphere.dataset.angle=String(theta);
 }
 angle.addEventListener('input',draw);time.addEventListener('input',()=>{exactTime=null;draw()});
 document.querySelectorAll('[data-geodesic-time]').forEach(button=>button.addEventListener('click',()=>{exactTime=Number(button.dataset.geodesicTime)*Math.PI;time.value=String(exactTime);draw()}));
 new ResizeObserver(draw).observe(sphere);new ResizeObserver(draw).observe(chart);draw();
});
