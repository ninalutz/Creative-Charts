var cx = 100; 
var cy = 200;
var csize = 50;
 var overC, locked;

function setup() {
  createCanvas(1000, 500);
  ellipseMode(RADIUS);
   overC = false;
 locked = false;
}

function draw() {
  background(200);

  
   if (mouseX > cx-csize && mouseX < cx+csize && 
      mouseY > cy-csize && mouseY < cy+csize) {
    overC = true;  
    if(!locked) { 
      stroke(255); 
      fill(153);
    } 
  } else {
    stroke(153);
    fill(255);
    overC = false;
  }
  
    ellipse(cx, cy, 50, 50);
}


function mousePressed(){
    if(overC){
      locked = !locked;
    }
  
}
function mouseDragged(){
  if(locked){
    cx = mouseX;
    cy = mouseY;
  }
  
}

function mouseReleased(){
  locked = false;
}
