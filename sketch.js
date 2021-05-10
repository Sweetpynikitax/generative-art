/* 👇 Start writing your p5.js code here */

var points = []
var mult= 0.006

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(30)
  angleMode(DEGREES)
  noiseDetail(1)

  var density = 80;
  var space = width/ density

  for(var x = 0; x < width; x  += space) {
    for(var y=0; y< height; y  += space){
      var p = createVector(x+random(-10,10),y+random(-10,10))
      points.push(p)
    }
  }

}

function draw() {
  noStroke()


  for (var i = 0; i< points.length; i++){

    var r= map(points[i].x, 0, width,50,255)
    var g= map(points[i].y, 0, height,50,255)
    var b= map(points[i].x, 0, width,50,255)

    fill(r,g,b)


    var angle = map(noise(points[i].x * mult, points[i].y * mult,),0,1,0,820)

    points[i].add(createVector(cos(angle),sin(angle)))

    
    ellipse(points[i].x, points[i].y, 1)

  }
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

  console.log(Math.random());
  