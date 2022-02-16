function setup() {
  // put setup code here
  createCanvas(400,200)
  j=0
}

function draw() {
  // put drawing code here
  background(223,225,249)
  strokeWeight(1)
  line(200,0,200,400)

  fill(217,108,116)
  strokeJoin(ROUND)
  strokeWeight(2)
  ellipse(80,130,40,50)
  ellipse(125,130,40,50)
  fill(248,212,220)
  ellipse(40,75,45,35)
  ellipse(160,75,45,35)

  fill(248,212,220)
  strokeJoin(ROUND)
  strokeWeight(2)
  ellipse(100,80,110,105)

  fill(196,211,255)
  ellipse(90,60,15,35)
  ellipse(110,60,15,35)
  
  fill(0)
  ellipse(90,58,10,18)
  ellipse(110,58,10,18)
  
  fill(255)
  ellipse(90,52,10,16)
  ellipse(110,52,10,16)

  strokeWeight(0)
  fill(220,124,124)
  ellipse(70,80,23,13)
  ellipse(130,80,23,13)

  fill(0)
  ellipse(100,100,20,10)

  fill(217,108,116)
  strokeJoin(ROUND)
  strokeWeight(2)
  ellipse(280,130,40,50)
  ellipse(325,130,40,50)
  fill(248,212,220)
  ellipse(240,75,45,35)
  ellipse(360,75,45,35)

  fill(248,212,220)
  strokeJoin(ROUND)
  strokeWeight(2)
  ellipse(300,80,110,105)

  strokeWeight(0)
  fill(220,124,124)
  ellipse(270,80,23,13)
  ellipse(330,80,23,13)

  strokeJoin(ROUND)
  strokeWeight(2)
  fill(196,211,255)
  ellipse(290,60,15,35)
  ellipse(310,60,15,35)
  fill(0)
  ellipse(290,58,10,18)
  ellipse(310,58,10,18)

  fill(255)
  var x=10+1*Math.sin(PI*j/20)
  j+=1
  ellipse(290,52,x,16)
  ellipse(310,52,x,16)

  strokeWeight(0)
  fill(0)
  var x=10+2*Math.sin(PI*j/20)
  j+=1
  ellipse(300,100,20,x)

}