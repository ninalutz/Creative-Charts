var numcountries   = 217;
var countries;
var rightcountries;

var curcountry;

function setup() {
  createCanvas(displayWidth-100, displayHeight-200);
  ellipseMode(RADIUS);
  
  overC = false;
  locked = false;
 
 countries = [];
 rightcountries = [];
 for(var i = 0; i<numcountries; i++){
   countries[i] = new country("USA", random(20, 40), createVector(random(width), random(height/2 - 40)), 255);
 }
 
}

function draw() {
  background(255);
  print(rightcountries.length);

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
  
  noStroke();
  fill(0);
  text("Percentage of world", width/4, height-90);
    text("Percentage of world", 3*width/4, height-90);
    noFill();
  
}




var country = function(name, size, location, amount){
  this.name = name;
  this.x = location.x;
  this.y = location.y;
  this.size = size;
  this.locked = false;
  this.overC = false;
  this.amount = amount;
  this.curcolor;
}

country.prototype.mouseupdate = function(){
  if (mouseX > this.x-this.size && mouseX < this.x+this.size && 
      mouseY > this.y-this.size && mouseY < this.y+this.size) {
    this.overC = true;  
    if(!this.locked) { 
      stroke(255, 0, 0); 
      this.curcolor = color(153, 50);
    } 

  } else {
    stroke(153);
    if(this != curcountry){
    fill(this.curcolor, 0, 0, 50);
    }
    else{
      fill(255);
    }
   this.curcolor = color(this.amount, 0, 0, 50);
  this.overC = false;
  }
  
  
}

  function mousePressed(){
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
if(this.y > height/2 && this.x < width/2){
  ellipse(this.x, this.y, 100, 100);
  curcountry = this;
}

else if(this.y > height/2 && this.x > width/2){
  if(rightcountries.indexOf(this) < 0){
  rightcountries.push(this);
  }
  fill(this.curcolor);
  ellipse(this.x, this.y, this.size, this.size);
}

else{
  fill(this.curcolor);
  ellipse(this.x, this.y, this.size, this.size);
  var index = rightcountries.indexOf(this);
  if (index > -1) {
    rightcountries.splice(index, 1);
  }
}
  noStroke();
  fill(0);
  text(this.name, this.x, this.y);
  stroke(255, 0, 0);
  fill(this.curcolor);
  
}