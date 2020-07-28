var testcar,wall
var speed,weight
function setup() {

  createCanvas(800,400);
testcar = createSprite(50,200,40,20)

wall = createSprite(650,200,20,350)
wall.shapeColor = (80,80,80)
speed=random(55,90);
weight=random(400,1500)
}

function draw() {
  background("lightblue");
 
testcar.velocityX=speed;

if(wall.x-testcar.x < (testcar.width+wall.width)/2)
{
  testcar.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
}
  if (deformation>180)

  {  
  testcar.shapeColor= color(255,0,0); 
}

if(deformation<180 && deformation>100)
{
  testcar.shapeColor=color(230,230,0);
}

if(deformation<100) 
 {
   testcar.shapeColor=color(0,255,0);
 }
  drawSprites();
}
