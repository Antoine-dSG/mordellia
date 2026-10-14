"""Independent numerical checks for the local Birkhoff VI.8 pilot.
Run with Python 3; no third-party dependencies. Numerical evidence is not proof.
"""
from math import sin, cos, sqrt, atan2, acos, pi
import json
from pathlib import Path

def dot(a,b): return sum(x*y for x,y in zip(a,b))
def scale(a,c): return tuple(c*x for x in a)
def add(a,b): return tuple(x+y for x,y in zip(a,b))
def sub(a,b): return tuple(x-y for x,y in zip(a,b))
def norm(a): return sqrt(dot(a,a))
def unit(a): return scale(a,1/norm(a))
def point(t): return (2*cos(t),sin(t))
def speed(t): return sqrt(4*sin(t)**2+cos(t)**2)
def tangent(t): return unit((-2*sin(t),cos(t)))
def angle_delta(a,b): return (a-b+pi)%(2*pi)-pi

def collision(t,theta):
    x=point(t); tau=tangent(t); inward=(-tau[1],tau[0])
    u=add(scale(tau,cos(theta)),scale(inward,sin(theta)))
    # Positive nonzero root of (x+ell*u)_x^2/4+(x+ell*u)_y^2=1.
    ell=-2*(x[0]*u[0]/4+x[1]*u[1])/(u[0]**2/4+u[1]**2)
    y=add(x,scale(u,ell))
    t1=atan2(y[1],y[0]/2)%(2*pi)
    n=unit((y[0]/4,y[1]))
    out=sub(u,scale(n,2*dot(u,n)))
    theta1=acos(max(-1,min(1,dot(out,tangent(t1)))))
    return theta1,t1,x,y,u,out,ell

def jacobian(t,theta,h):
    # Coordinate order is (theta,t), as in Birkhoff's (theta,phi).
    ap=collision(t,theta+h); am=collision(t,theta-h)
    bp=collision(t+h,theta); bm=collision(t-h,theta)
    a=(ap[0]-am[0])/(2*h); c=angle_delta(ap[1],am[1])/(2*h)
    b=(bp[0]-bm[0])/(2*h); d=angle_delta(bp[1],bm[1])/(2*h)
    return a*d-b*c

rows=[]; max_boundary=max_reflection=max_length=0
for t in [0.17,0.8,1.7,3.1,4.8]:
 for theta in [0.3,0.8,1.5,2.2,2.8]:
    th1,t1,x,y,u,out,ell=collision(t,theta)
    assert ell>0 and 0<th1<pi
    max_boundary=max(max_boundary,abs(y[0]**2/4+y[1]**2-1))
    max_reflection=max(max_reflection,abs(dot(u,tangent(t1))-dot(out,tangent(t1))))
    max_length=max(max_length,abs(norm(out)-1))
    expected=sin(theta)*speed(t)/(sin(th1)*speed(t1))
    rows.append((t,theta,expected))
errors={str(h):max(abs(jacobian(t,th,h)-ex)/abs(ex) for t,th,ex in rows) for h in [1e-4,1e-5,1e-6]}
assert errors['1e-05']<1e-7
# Independent finite differences of chord length versus endpoint tangential momentum.
t=0.4; th=1.1
th1,t1,x,y,u,out,ell=collision(t,th)
def length(a,b): return norm(sub(point(b),point(a)))
h=1e-5
Hs=(length(t+h,t1)-length(t-h,t1))/(2*h*speed(t))
Hs1=(length(t,t1+h)-length(t,t1-h))/(2*h*speed(t1))
length_error=max(abs(Hs+cos(th)),abs(Hs1-cos(th1)))
assert length_error<1e-8
# Circle: theta unchanged, s increases by 2 theta (unit radius).
closure=abs(angle_delta(0.2+3*2*pi/3,0.2))
assert closure<1e-12
result={
 'ellipse':'x^2/4+y^2=1; t is eccentric parameter, not arclength',
 'sample_count':len(rows), 'relative_jacobian_error_by_step':errors,
 'max_boundary_residual':max_boundary,'max_tangent_reflection_residual':max_reflection,
 'max_unit_speed_residual':max_length,'chord_derivative_error':length_error,
 'circle_triangle_closure_error':closure,
 'worked_example':{'t':t,'theta':th,'t1':t1,'theta1':th1,'chord_length':ell,
 'det_theta_t_numeric':jacobian(t,th,1e-5),'det_theta_t_predicted':sin(th)*speed(t)/(sin(th1)*speed(t1)),
 'det_theta_s_predicted':sin(th)/sin(th1)},
 'limits':'25 non-grazing states, finite differences, double precision; no theorem or recurrence-time proof.'}
path=Path(__file__).with_name('validation.json')
path.write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2))
