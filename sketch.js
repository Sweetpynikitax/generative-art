/* 👇 Start writing your p5.js code here */

  
let mic;



var points = []
var mult= 0.007

var r1
var r2
var g1
var g2
var b1
var b2



function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  
  
  angleMode(DEGREES)
  noiseDetail(1)


  var density = 120;
  var space = width/ density

  for(var x = 0; x < width; x  += space) {
    for(var y=0; y< height; y  += space){
      var p = createVector(x+random(-10,10),y+random(-10,10))
      points.push(p)
    }

  }

  
  r1= random(255)
  r2= random(255)
  g1= random(255)
  g2= random(255)
  b1= random(255)
  b2= random(255)

  var paragraph = document.getElementById("h1");
  paragraph.textContent += "Silk Bubble";;
  var paragraph = document.getElementById("p");
  paragraph.textContent += "Made by Nikita";
  var paragraph = document.getElementById("pp");
  paragraph.textContent += "Play With the arrow keys";
  var paragraph = document.getElementById("ppp");
  paragraph.textContent += "Click to save";


  

}
function keyPressed(){
  if(keyCode == UP_ARROW){
    background (200);
  } else if(keyCode == DOWN_ARROW){
    background (0);
  } else if(keyCode == LEFT_ARROW){
    background (100);
  }else if(keyCode == RIGHT_ARROW){
    background (50);
  }
}


function draw() {
  noStroke()


  for (var i = 0; i< points.length; i++){

    var r= map(points[i].x, 0, width,r1,r2)
    var g= map(points[i].y, 0, height,g1,g2)
    var b= map(points[i].x, 0, width,b1,b2)
    var alpha = map(dist(width/2,height/2,points[i].x, points[i].y),0,350,400,0)

    fill(r,g,b,alpha)
    

    var angle = map(noise(points[i].x * mult, points[i].y * mult,),0,1,0,820)

    points[i].add(createVector(cos(angle),sin(angle)))

    if (dist(width / 2, height/ 2, points[i].x, points[i].y,) <350)
    ellipse(points[i].x, points[i].y, 1)

  }
 
}



function mouseClicked(){
  saveCanvas('SilkBubble','png')
}





  


