'use strict';
window.addEventListener('DOMContentLoaded',function(){
 var canvas=document.getElementById('billiard'),ctx=canvas.getContext('2d'),a=2,b=1;
 var pos=document.getElementById('position'),angle=document.getElementById('angle'),orbit=document.getElementById('orbit');
 var M=window.BilliardMath;
 function draw(){
  var t=Number(pos.value),th=Number(angle.value),c=M.step(t,th,a,b);
  var rect=canvas.getBoundingClientRect(),w=rect.width,h=rect.height,dpr=Math.min(window.devicePixelRatio||1,2);
  if(w<100||h<90)return; // The edition panel may be hidden.
  canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,w,h);
  var scale=Math.min((w-95)/(2*a+0.65),(h-80)/(2*b+0.65)),cx=w/2,cy=h/2;
  function xy(z){return [cx+scale*z[0],cy-scale*z[1]]}
  function line(x,y,color,width,dash){var p=xy(x),q=xy(y);ctx.strokeStyle=color;ctx.lineWidth=width||1.5;ctx.setLineDash(dash||[]);ctx.beginPath();ctx.moveTo(p[0],p[1]);ctx.lineTo(q[0],q[1]);ctx.stroke();ctx.setLineDash([])}
  function arrow(x,v,len,col){var y=[x[0]+len*v[0],x[1]+len*v[1]];line(x,y,col,2);var p=xy(x),q=xy(y),ang=Math.atan2(q[1]-p[1],q[0]-p[0]);ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(q[0],q[1]);ctx.lineTo(q[0]-9*Math.cos(ang-.4),q[1]-9*Math.sin(ang-.4));ctx.lineTo(q[0]-9*Math.cos(ang+.4),q[1]-9*Math.sin(ang+.4));ctx.closePath();ctx.fill()}
  ctx.beginPath();ctx.ellipse(cx,cy,a*scale,b*scale,0,0,2*Math.PI);ctx.fillStyle='#f8faf7';ctx.fill();ctx.lineWidth=1.6;ctx.strokeStyle='#3b555c';ctx.stroke();
  if(orbit.checked){var current=c;for(var i=0;i<12;i++){line(current.x,current.y,i===0?'#0d6870':'#0d687045',i===0?2.3:1.3);current=M.step(current.t1,current.theta1,a,b)}}
  else line(c.x,c.y,'#0d6870',2.3);
  arrow(c.x,c.u,Math.min(.5,c.ell*.45),'#0d6870');
  arrow(c.y,c.out,.5,'#0d6870');
  arrow(c.x,c.tau,.45,'#ab783c');arrow(c.y,c.tau1,.45,'#ab783c');
  [c.x,c.y].forEach(function(x){var p=xy(x);ctx.beginPath();ctx.arc(p[0],p[1],4,0,2*Math.PI);ctx.fillStyle='#0d6870';ctx.fill()});
  function label(x,text){var p=xy(x);var dx=x[0]>=0?10:-10;ctx.textAlign=x[0]>=0?'left':'right';ctx.fillStyle='#2f4850';ctx.font='italic 14px Georgia';ctx.fillText(text,Math.max(38,Math.min(w-40,p[0]+dx)),Math.max(20,Math.min(h-12,p[1]+(x[1]>=0?-12:24))))}
  label(c.x,'s');label(c.y,'s₁');
  // Angular arc in world coordinates; canvas orientation reverses angles.
  var start=Math.atan2(c.tau[1],c.tau[0]),p=xy(c.x);
  ctx.beginPath();ctx.arc(p[0],p[1],Math.min(30,scale*.22),-start,-start-th,true);ctx.lineWidth=1;ctx.strokeStyle='#6b9b95';ctx.stroke();
  document.getElementById('position-value').textContent=t.toFixed(3)+' rad';
  document.getElementById('angle-value').textContent=th.toFixed(3)+' rad';
  document.getElementById('next-angle').textContent=c.theta1.toFixed(8);
  document.getElementById('length').textContent=c.ell.toFixed(8);
  document.getElementById('jacobian').textContent=(Math.sin(th)/Math.sin(c.theta1)).toFixed(8);
  var j=M.jacobian(t,th,a,b),res=Math.abs(Math.sin(c.theta1)*M.speed(c.t1,a,b)*j/(Math.sin(th)*M.speed(t,a,b))-1);
  document.getElementById('residual').textContent=res.toExponential(2);
  document.getElementById('experiment-note').textContent=a===2?
   'Ellipse: x(t) = (2 cos t, sin t). Here t is not arclength; ds = √(4 sin²t + cos²t) dt. The Jacobian above uses arclength.':
   'Unit circle: t = s. The outgoing angle is constant and the map is a rigid rotation on each level p = cos θ. The arclength Jacobian is 1.';
  canvas.dataset.table=a===2?'ellipse':'circle';canvas.dataset.theta=String(th);canvas.dataset.residual=String(res);
 }
 function choose(isEllipse){a=isEllipse?2:1;document.getElementById('ellipse').classList.toggle('selected',isEllipse);document.getElementById('ellipse').setAttribute('aria-pressed',String(isEllipse));document.getElementById('circle-button').classList.toggle('selected',!isEllipse);document.getElementById('circle-button').setAttribute('aria-pressed',String(!isEllipse));draw()}
 document.getElementById('ellipse').addEventListener('click',function(){choose(true)});
 document.getElementById('circle-button').addEventListener('click',function(){choose(false)});
 document.getElementById('triangle').addEventListener('click',function(){pos.value='0.4';angle.value=String(Math.PI/3);orbit.checked=true;choose(false);document.getElementById('geometry').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})});
 [pos,angle,orbit].forEach(function(el){el.addEventListener('input',draw)});
 new ResizeObserver(draw).observe(canvas);
 if(new URLSearchParams(window.location.search).get('orbit')==='2-5'){pos.value='0.4';angle.value=String(2*Math.PI/5);orbit.checked=true;choose(false)}
 draw();
});
