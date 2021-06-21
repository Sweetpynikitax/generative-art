/* 👇 Start writing your p5.js code here */

var points = []
var mult= 0.004

// var r1
// var r2
// var g1
// var g2
// var b1
// var b2



function setup() {
  createCanvas(windowWidth, windowHeight)
 
  background(20)
  noiseDetail(1)
  colorMode(HSB, 180, 400, 150);
  angleMode(DEGREES)
 


  var density = 100;
  var space = width/ density

  for(var x = 0; x < width; x  += space) {
    for(var y=0; y< height; y  += space){
      var p = createVector(x + random(-10,10),y + random(-10,10))
      points.push(p)
    }

  }

  mult= random(0.004,0.01);
  density=random(50,120);
  HSB=random();
  
  
  
  // r1= random(255)
  // r2= random(255)
  // g1= random(255)
  // g2= random(255)
  // b1= random(255)
  // b2= random(255)
  

}
// 

function draw() {
  noStroke()
  fill(255)

  


  for (var i = 0; i< points.length; i++){
    if (dist(width / 2, height/ 2, points[i].x, points[i].y,) <350)
    ellipse(points[i].x, points[i].y, 1)

    var angle = map(noise(points[i].x * mult, points[i].y * mult,),0,1,0,820)
    points[i].add(createVector(cos(angle),sin(angle)))

    let alpha = map(dist(width/2,height/2,points[i].x, points[i].y),0,350,400,0)
    
    let hue = map(mouseX, 0, width, 0, 360);
    fill(alpha);
    fill(hue, 100, 1000);
   
    // var r= map(points[i].mouseX, 0, width,r1,r2) 
    // var g= map(points[i].mouseY, 0, height,g1,g2)
    // var b= map(points[i].mouseX, 0, width,b1,b2)

    // fill(r,g,b,alpha)
    
  }
 
}

function mouseClicked(){
  saveCanvas('SilkBubble','png')
}


// function keyPressed(){
//     if(keyCode == UP_ARROW){
//       background (200);
//     } else if(keyCode == DOWN_ARROW){
//       background (0);
//     } else if(keyCode == LEFT_ARROW){
//       background (100);
//     }else if(keyCode == RIGHT_ARROW){
//       background (50);
//     }
//   }
  

