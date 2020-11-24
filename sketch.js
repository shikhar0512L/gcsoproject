var car,wall;
var speed,weight;
function setup() {
  createCanvas(1370,400)
speed=random(55,90)
weight=random(400,1500)
car=createSprite(50,200,70,50)

car.velocityX = speed;
wall=createSprite(1360,200,100,400)
car.shapeColor="blue"
wall.shapeColor="grey"

}

function draw() {
  background(255,255,255); 
 
if (wall.x=car.x<(car.weight+wall.weight)/2) {
  car.velocityX=0;
  var deformation =0.5*weight*speed/22059;
if (deformation>180) {
  car.shapeColor=rgb(255,0,0);
}
if (deformation>100&&deformation<180) {
  car.shapeColor=rgb(230,230,0);
}
if (deformation<100) {
  car.shapeColor=rgb(0,255,0);
}
}

  drawSprites();
}
