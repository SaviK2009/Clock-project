



function setup() {
  createCanvas(800,400);

  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
  translate(width/2 , height/2 );
  
  scAngle  = map(sc, 0, 60, 0, 360);
  mnAngle  = map(mn, 0, 60, 0, 360);
  hrAngle  = map(hr, 0, 60, 0, 360);
  
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(10);
  line(0, 0, 100, 200);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 0, 255);
  strokeWeight(10);
  line(0, 0, 100, 100);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 200, 0);
  strokeWeight(10);
  line(0, 0, 100, 0);
  pop();
  
}