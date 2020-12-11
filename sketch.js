var fixedRect
var movingRect
var rect1
var rect2
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 150, 70, 50);
  movingRect= createSprite(600,350,100,50)
  rect1 = createSprite(500,200,50,70)
  rect2 = createSprite(200,200,70,50)
  fixedRect.velocityY=2
  movingRect.velocityY=-2
  fixedRect.shapeColor ="green"
  movingRect.shapeColor="green"
  rect1.velocityX=-2
  rect2.velocityX=2
  rect1.shapeColor="green"
  rect2.shapeColor="green"

  
}

function draw() {
  background(0);  
  
  console.log(movingRect.x - fixedRect.x)
   bounce(movingRect,fixedRect);

   if(isTouching(rect1,rect2)){
    rect1.shapeColor="red";
    rect2.shapeColor="red";

  }
  else{
    rect1.shapeColor="green";
    rect2.shapeColor="green"
   
  }
  
  
    drawSprites();
    
}
