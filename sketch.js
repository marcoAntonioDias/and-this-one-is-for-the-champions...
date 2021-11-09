var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  boy = loadAnimation (jake1.png,jake2.png,jake3.png,jake4.PNG,jake5.png)
 
}

function setup(){
  
  createCanvas(400,400);
 path=createSprite ()
path.addimage(path.png)
path.velocityY=3
path.scale=1.2;

boy=createSprite()
boy = addAnimation(boy)
boy.scale=0.08;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visibility(false)

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visibility(false)
}

function draw() {
  background(0);
  path.velocityY = 4;
  
 
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  function draw(){
    boy.x=World.mouseX;
    drawSprites();
  }
  
}
