// var cx = 100; 
// var cy = 200;
// var csize = 50;
// var overC, locked;

var numcountries   = 150;
var countries;

function setup() {
  createCanvas(displayWidth-100, displayHeight-200);
  ellipseMode(RADIUS);
   overC = false;
 locked = false;
 countries = [];
 for(var i = 0; i<numcountries; i++){
   countries[i] = new country("USA", random(20, 40), createVector(random(width), random(height/2 - 40)), random(0, 1000));
 }
}

function draw() {
  background(200);

  for(var i = 0; i<numcountries; i++){
   countries[i].mouseupdate();
     countries[i].display();
  }
  
  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Drag country here for comparisons", width/4, height/2 + 20);  
  text("Drag other countries here for comparisons", 3*width/4, height/2 + 20);
  
  stroke(0);
  strokeWeight(2);
  line(width/2, height/2 + 20, width/2, height - 100);

  
}




var country = function(name, size, location, amount){
  this.name = name;
  this.x = location.x;
  this.y = location.y;
  this.size = size;
  this.locked = false;
  this.overC = false;
  this.amount = amount;
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
    fill(this.amount, 0, 0, 50);
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