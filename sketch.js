const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
const World = Matter.World;

var helicopterIMG, helicopterSprite, packageSprite ,packageIMG;
var world, engine;
var ground, packageBody;

function preload(){
helicopterIMG = loadImage("helicopter.png");
packageIMG = loadImage("package.png");
}

function setup(){
  createCanvas(700,800);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  packageSprite = createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6
  
  ground = createSprite(width/2, height-150, width, 20);
  ground.shapeColor = color(255);

var ground_p = {
    isStatic : true 
}

  ground = Bodies.rectangle(width/2, 650, 100, 40, ground_p);
  World.add(world, ground);

  var packageBody_p = {
    restitution: 0.5 
}

packageBody = Bodies.circle(width/2,100,20,packageBody_p);
}

function draw(){
  background(0);
  Engine.update(engine);
  packageSprite.y = packageBody.position.y
  
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(packageBody.position.x, packageBody.position.y, 20, 20);
  drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
     //Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
     var packageBody_p = {
     restitution: 0.5
   }
   packageBody = Bodies.circle(width/2,100,20,packageBody_p);
   World.add(world,packageBody);
   }
 }