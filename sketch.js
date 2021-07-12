var hr,mn,sc;
var hrangle,scangle,mnangle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(50,72,108);
  translate(200,200);
  rotate(-90);

  hr=hour();
  sc=second();
  mn=minute();

  scangle=map(sc,0,60,0,360);
  mnangle=map(mn,0,60,0,360);
  hrangle=map(hr%12,0,12,0,360);

  push ();
  rotate(scangle);
  stroke(255,0,0);
  strokeWeight(5);
  line (0,0,100,0);
  pop ();

  push ();
  rotate(mnangle);
  stroke(0,255,0);
  strokeWeight(5);
  line (0,0,125,0);
  pop ();

  push ();
  rotate(hrangle);
  stroke(0,0,255);
  strokeWeight(5);
  line (0,0,150,0);
  pop ();

  stroke(255,0,255);
  point(0,0);

  noFill();
  strokeWeight(8);
  stroke(255,0,0);
  arc(0,0,300,300,0,scangle);

  stroke(0,255,0);
  arc(0,0,320,320,0,mnangle);

  stroke(0,0,255);
  arc(0,0,340,340,0,hrangle);
  
  drawSprites();
}