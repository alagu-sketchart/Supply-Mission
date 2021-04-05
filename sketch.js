const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.3

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(155)


	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution: 3.5, isStatic:true});
	//packageBody = Bodies.rectangle(width/2, 200, 5, {restitution: 2, isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	rectMode(CENTER)
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic: true} );
 	World.add(world, ground, packageBody);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	packageSprite.velocityY = 4;
	packageBody.velocityY = 4;
	
	background(105);
	
  }
}