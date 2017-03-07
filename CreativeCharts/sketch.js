// var cx = 100; 
// var cy = 200;
// var csize = 50;
// var overC, locked;

var numcountries   = 6;
var countries;


function setup() {
  createCanvas(displayWidth-100, displayHeight-200);
  ellipseMode(RADIUS);
   overC = false;
 locked = false;
 countries = [];
 for(var i = 0; i<numcountries; i++){
   countries[i] = new country("USA", random(80, 200), createVector(random(width), random(height)));
 }
}

function draw() {
  background(200);

  for(var i = 0; i<numcountries; i++){
   countries[i].mouseupdate();
     countries[i].display();
  }
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
  
  
}

  function mousePressed(){
    // if(testC.overC){
    //   testC.locked = !testC.locked;
    // }
    for(var i = 0; i<numcountries; i++){
        if(countries[i].overC){
          countries[i].locked = !countries[i].locked;
        }
      
    }
}


function mouseDragged(){
    for(var i = 0; i<numcountries; i++){
        if(countries[i].locked){
          countries[i].x = mouseX;
          countries[i].y = mouseY;
        }
      
    }
}

function mouseReleased(){
      for(var i = 0; i<numcountries; i++){
          countries[i].locked = false;
    }
}

country.prototype.display = function(){
  
  ellipse(this.x, this.y, this.size, this.size);
  
}