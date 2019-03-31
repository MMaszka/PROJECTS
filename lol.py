import pgzrun
g = 20

o = 1680
p = 1050
WIDTH = o
HEIGHT = p
def drawaxcies ():
    osX = [ (o , p/2) , ( 0 , p/2) ]
    osY = [ (o/2 , p) , ( o/2 , 0 ) ]
    screen.draw.line ( osX [0] , osX [1] , 'white' ) 
    screen.draw.line ( osY [0] , osY [1] , 'white' )

    nextX = 0
    nextY = 0
    for x in range(int(o/g)) :
        nextX +=g
        screen.draw.line ((nextX,p/2-3) , (nextX, p/2 +3) , 'white')
    for y in range(int(p/g)) :
        nextY +=g
        screen.draw.line ((o/2-3,nextY) , (o/2 +3,nextY) , 'white')
def grid () :
    nextX = 0
    nextY = 0
    for x in range(int(o/g)) :
        nextX +=g
        screen.draw.line ((nextX,0) , (nextX, p) , (20,20,20))
    for y in range(int(p/g)) :
        nextY +=g
        screen.draw.line ((0,nextY) , (o,nextY) ,  (20,20,20))
        
def drawPointXY(x,y):

    
    c = x*g + o/2
    d = p/2 - y*g
    screen.draw.line ((c,d) , (c,d) , (255,0,0))


def function (x,y) : 
    for x in range(int (-(o/2 * g)),int(o/2 * g)) :
        X = x / (g * 100)
        Y = X**2 / 3*X
        drawPointXY (X,Y)
        
def draw():
    screen.clear()
    grid ()
    drawaxcies()
    drawPointXY(5,-10)
    function (10 , 10)
pgzrun.go()

