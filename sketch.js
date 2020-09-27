var fixedRect, movingRect;
var gameo1, gameo2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameo1 = createSprite(200,450,50,80);
  gameo1.shapeColor = "pink";
  gameo1.velocityX = 2;

  gameo2 = createSprite(700,450,50,80);
  gameo2.shapeColor = "pink";
  gameo2.velocityX = -2;
}

function draw() {
  background(0,0,0);  
  
  bounceOff(movingRect,fixedRect);
  bounceOff(gameo1,gameo2);
  
  drawSprites();
}
