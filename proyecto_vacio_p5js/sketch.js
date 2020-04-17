function preload() {

}

function setup() {
    createCanvas(500,400)
    x = 20
    y = 20
    w = 20
    h = 20
    _x=6
    _y=6
}

function draw() {
    background(50, 80)
    noStroke()
    fill(0,100,100)
    circle(x,y,w,h)
    if(x >= width - w/2) _x*=-1
    if(x <= w/2) _x*=-1
    x+=_x
    if(y >= height - h/2) _y*=-1
    if(y <= h/2) _y*=-1
    y+=_y
}
