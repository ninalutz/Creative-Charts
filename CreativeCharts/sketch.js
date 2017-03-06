var cx = 100; 
var cy = 200;
var csize = 50;
 var overC, locked;

var testC;

function setup() {
  createCanvas(1000, 500);
  ellipseMode(RADIUS);
   overC = false;
 locked = false;
 testC = new country("USA", 80, createVector(300, 200));
}

function draw() {
  background(200);

    testC.mouseupdate();
    testC.display();
}




var country = function(name, size, location){
  this.name = name;
  this.x = location.x;
  this.y = location.y;
  this.size = size;
  this.locked = false;
  this.overC = false;
}

country.prototype.mouseupdate = function(){
  if (mouseX > this.x-this.size && mouseX < this.x+this.size && 
      mouseY > this.y-this.size && mouseY < this.y+this.size) {
    this.overC = true;  
    if(!this.locked) { 
      stroke(255); 
      fill(153);
    } 
  } else {
    stroke(153);
    fill(255);
    this.overC = false;
  }
  
  function mousePressed(){
    if(this.overC){
      this.locked = !this.locked;
    }
}

function mouseDragged(){
  if(locked){
    this.x = mouseX;
    this.y = mouseY;
  }
}

function mouseReleased(){
  this.locked = false;
}
  
}

country.prototype.display = function(){
  
  ellipse(this.x, this.y, this.size, this.size);
  
}