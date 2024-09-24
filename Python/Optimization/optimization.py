import sympy as sp
x, y = sp.symbols('x y')
print("Given Function f(x,y) is:- f=x**2+y**2+3*x+4*y+5 ")
f = x**2 + y**2 + 3*x + 4*y + 5
print("Derivative w.r.t x: ")
dfdx = sp.diff(f, x)
print(dfdx)

print("Derivative w.r.t y: ")
dfdy = sp.diff(f, y)
print(dfdy)

val = sp.solve([dfdx, dfdy], [x, y])
x_val = val[x].evalf()
y_val = val[y].evalf()
val1 = [x_val, y_val]
print("Minimum found at (x,y):- ", val1)

min_f = f.subs({x: x_val, y: y_val})
print("Minimum value of the function is:-", min_f)
