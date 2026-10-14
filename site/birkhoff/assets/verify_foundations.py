"""Independent examples for Chapter VI §§1–6; no external theorem is tested."""
from pathlib import Path
import json
import math

report = {}
def close(a, b, tol=1e-7):
    assert abs(a-b) <= tol * max(1, abs(a), abs(b)), (a,b)
def step(rho,theta):
    return (rho + .05*rho**3*math.sin(theta), theta + math.sqrt(2) + rho + .03*rho**2*math.cos(theta))
def orbit(rho,theta,n):
    for _ in range(n): rho,theta=step(rho,theta)
    return rho,theta
max_derivative_error=0.; min_twist=float('inf'); cases=0
for eps in [.08,.12,.18]:
    n=math.ceil(7/eps**2)
    for fraction in [.25,.5,1]:
        for theta in [0,.7,2.4]:
            rho0=eps**2*fraction;rho=rho0;angle=theta;u=1.;v=0.
            for _ in range(n):
                a=1+.15*rho**2*math.sin(angle);b=.05*rho**3*math.cos(angle)
                c=1+.06*rho*math.cos(angle);d=1-.03*rho**2*math.sin(angle)
                u,v=a*u+b*v,c*u+d*v
                rho,angle=step(rho,angle)
                assert rho0/2 < rho < 2*rho0
                assert v>0
            h=rho0*1e-4
            numeric=(orbit(rho0+h,theta,n)[1]-orbit(rho0-h,theta,n)[1])/(2*h)
            err=abs(numeric-v)/v;max_derivative_error=max(max_derivative_error,err)
            assert err<1e-5
            min_twist=min(min_twist,v/n)
            if fraction==1:assert angle-theta-n*math.sqrt(2)>2*math.pi
            cases+=1
report['finite_time_twist']={'cases':cases,'min_derivative_per_iterate':min_twist,'max_relative_finite_difference_error':max_derivative_error,'scope':'A map satisfying the remainder estimates, not a test of a general existence theorem.'}
# H=p1+p1²/2+(p²+q²)/2: fixed-energy elimination and physical time.
for h,p,q in [(.1,.2,.3),(.3,-.4,.1),(0,.1,-.2)]:
    root=math.sqrt(1+2*h-p*p-q*q);K=1-root;p1=-K
    close(p1+p1*p1/2+(p*p+q*q)/2,h)
    close(p/root,p/(1+p1));close(q/root,q/(1+p1));close(1/root,1/(1+p1))
# A moving reference orbit p=sin(t), q=0. Correct shift has plus phi' Q.
for t,P,Q in [(0,.2,.3),(.7,-.2,.1),(2,.1,-.4)]:
    phi=math.sin(t);dphi=math.cos(t);p=P+phi
    K=.5*(p-phi)**2+.5*Q**2-dphi*Q
    close(K+dphi*Q,.5*(P*P+Q*Q))
    close(-Q+dphi-dphi,-Q)
report['reduction']={'energy_examples':3,'moving_reference_examples':3,'scope':'Energy substitution and the sign of the time-dependent canonical shift.'}
# Invertible symmetric frequency matrix; rational targets have residual zero.
D=((2.,.3),(.3,1.));det=2-.09;c=(math.sqrt(2),math.sqrt(3));Istar=(.2,.3)
errors=[]
for n in [31,113,503]:
    target=tuple(2*math.pi*round((c[j]+sum(D[j][k]*Istar[k] for k in range(2)))*n/(2*math.pi))/n for j in range(2))
    b=(target[0]-c[0],target[1]-c[1]);I=((b[0]-.3*b[1])/det,(2*b[1]-.3*b[0])/det)
    for j in range(2):close(c[j]+sum(D[j][k]*I[k] for k in range(2)),target[j])
    errors.append(math.dist(I,Istar))
report['frequency_targets']={'action_errors':errors,'scope':'Rational approximation to the base frequency, not ratios tending to zero.'}
# Winding of displacement of two symplectic linear maps.
def index(M):
    angles=[]
    for j in range(1001):
        t=2*math.pi*j/1000;x=math.cos(t);y=math.sin(t)
        angles.append(math.atan2(M[1][0]*x+(M[1][1]-1)*y,(M[0][0]-1)*x+M[0][1]*y))
    turn=sum(math.atan2(math.sin(b-a),math.cos(b-a)) for a,b in zip(angles,angles[1:]))/(2*math.pi)
    return turn
close(index(((2,0),(0,.5))),-1)
close(index(((math.cos(.8),-math.sin(.8)),(math.sin(.8),math.cos(.8)))),1)
report['displacement_indices']={'hyperbolic':-1,'elliptic':1}
# Perimeter derivative at arbitrary ellipse vertices, checked independently by differences.
def pt(t):return (2*math.cos(t),math.sin(t))
def perimeter(ts):return sum(math.dist(pt(ts[j]),pt(ts[(j+1)%len(ts)])) for j in range(len(ts)))
ts=[.1,1.3,2.8,4.6];max_err=0
for j,t in enumerate(ts):
    prev=pt(ts[j-1]);cur=pt(t);nxt=pt(ts[(j+1)%4]);v=(-2*math.sin(t),math.cos(t))
    incoming=tuple((cur[k]-prev[k])/math.dist(cur,prev) for k in range(2))
    outgoing=tuple((nxt[k]-cur[k])/math.dist(nxt,cur) for k in range(2))
    analytic=sum((incoming[k]-outgoing[k])*v[k] for k in range(2))
    plus=ts.copy();minus=ts.copy();plus[j]+=1e-6;minus[j]-=1e-6
    numeric=(perimeter(plus)-perimeter(minus))/2e-6
    close(analytic,numeric);max_err=max(max_err,abs(analytic-numeric))
report['polygon_first_variation']={'vertices':4,'max_absolute_error':max_err}
report['limits']='Examples check formulas and finite-time estimates. They do not prove the general annulus theorem, minimax multiplicity, normal-form existence or reader comprehension.'
out=Path(__file__).with_name('foundations-validation.json');out.write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))
