import pgzrun
import random
import math

color1 = random.randrange(0,255)
color2 = random.randrange(0,255)
color3 = random.randrange(0,255)

WIDTH = 1680
HEIGHT = 1050
DRAG = 0.7

MAX_AGE=5
particles = []

def explode(x,y, speed = 300):
    age = 0
    color = (random.randrange(100,255),random.randrange(100,255),random.randrange(100,255))
    for _ in range(1000):
        angle = random.uniform(0,2 * math.pi)
        radius = random.uniform(0,1)** 0.5
        vx = speed * radius * math.sin(angle)
        vy = speed * radius * math.cos(angle)
        
        particles.append((x,y,color,vx,vy,age))
        
def draw():
    screen.clear()
    for x , y, color,  * _ in particles:
        
            screen.surface.set_at((int(x),int(y)), color)
def update (dt):
    new_particles = []
    for (x,y,color,vx,vy,age)  in particles :
        if age + dt > random.randrange( MAX_AGE , 13) :
                continue
        drag = DRAG ** dt
        vx *= drag
        vy *= drag
        x += vx * dt
        y += vy * dt
        age += dt
        new_particles.append((x,y,color,vx,vy,age))
    particles [:] = new_particles
def explode_random()  :
    x = random.randrange(WIDTH)
    y = random.randrange(HEIGHT)
    explode(x,y)
clock.schedule_interval(explode_random,7)

pgzrun.go()
