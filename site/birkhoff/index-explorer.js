'use strict';
window.addEventListener('DOMContentLoaded',()=>{
 const control=document.getElementById('index-trace');if(!control)return;
 function draw(id,a,inverse){
  const canvas=document.getElementById(id),rect=canvas.getBoundingClientRect(),dpr=window.devicePixelRatio||1;
  if(!rect.width||!rect.height)return;
  canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);
  const ctx=canvas.getContext('2d');ctx.scale(dpr,dpr);
  const w=rect.width,h=rect.height,scale=Math.min(w,h)/11,cx=w/2,cy=h/2;
  const point=t=>{const x=Math.cos(t),y=Math.sin(t);return inverse?[x-y,x+(1-a)*y]:[(1-a)*x+y,y-x]};
  ctx.strokeStyle='#d4d9d4';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(16,cy);ctx.lineTo(w-16,cy);ctx.moveTo(cx,16);ctx.lineTo(cx,h-16);ctx.stroke();
  ctx.strokeStyle=inverse?'#9c633b':'#176c66';ctx.lineWidth=2.2;ctx.beginPath();
  for(let k=0;k<=240;k++){const [x,y]=point(k*2*Math.PI/240);if(k===0)ctx.moveTo(cx+scale*x,cy-scale*y);else ctx.lineTo(cx+scale*x,cy-scale*y)}ctx.stroke();
  for(const t of [.45,2.7,4.7]){const p=point(t),q=point(t+.035),x=cx+scale*p[0],y=cy-scale*p[1],angle=Math.atan2(-(q[1]-p[1]),q[0]-p[0]);ctx.beginPath();ctx.moveTo(x-7*Math.cos(angle-.5),y-7*Math.sin(angle-.5));ctx.lineTo(x,y);ctx.lineTo(x-7*Math.cos(angle+.5),y-7*Math.sin(angle+.5));ctx.stroke()}
  ctx.fillStyle='#253a36';ctx.beginPath();ctx.arc(cx,cy,3,0,2*Math.PI);ctx.fill();ctx.font='12px sans-serif';ctx.fillText('0',cx+7,cy+15);
  canvas.setAttribute('aria-label',`${inverse?'Inverse':'Forward'} displacement loop: ${a===2?'passes through zero; index undefined':a<2?'counterclockwise, index +1':'clockwise, index −1'}`);
 }
 function update(){const a=Number(control.value),det=2-a;document.getElementById('index-value').value=a.toFixed(1);document.getElementById('index-status').textContent=a===2?'det(I − A) = 0. The loops pass through zero; the origin is not an isolated fixed point.':`det(I − A) = det(I − A⁻¹) = ${det.toFixed(1)}. Both indices are ${det>0?'+1 (counterclockwise)':'−1 (clockwise)'}.`;draw('index-forward',a,false);draw('index-inverse',a,true)}
 control.addEventListener('input',update);document.querySelectorAll('[data-trace]').forEach(b=>b.addEventListener('click',()=>{control.value=b.dataset.trace;update()}));new ResizeObserver(update).observe(document.getElementById('index-explorer'));update();
});
