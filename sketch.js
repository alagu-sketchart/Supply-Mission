const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;

var helicopterIMG, helicopterSprite, packageSprite ,packageIMG;
var world, engine;
var ground, packageBody, box1, box2, box3;
var packageBody_p;

function preload(){
helicopterIMG = loadImage("helicopter.png");
packageIMG = loadImage("package.png");
}

function setup(){
  createCanvas(700,700);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  packageSprite = createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6
  
  ground = createSprite(width/2, height-200, width, 10);
  ground.shapeColor = color(255);

  box1 = new Boxes(275, height-250, 15, 85);
  box2 = new Boxes(350, height-215, 165, 15);
  box3 = new Boxes(425, height-250, 15, 85);

var ground_p = {
    isStatic : true 
}

  ground = Bodies.rectangle(width/2, 930, 100, 20, ground_p);
  packageBody = Bodies.circle(width/2,100,20,packageBody_p);
}

function draw(){
  background(0);
  Engine.update(engine);
  packageSprite.y = packageBody.position.y
  packageSprite.x = packageBody.position.x
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}

function keyPressed() {
        if (keyCode === DOWN_ARROW) {
          var packageBody_p = {
          restitution: 0.5
        }
      packageBody = Bodies.circle(width/2,100,20,packageBody_p);
      World.add(world,packageBody);
    }
}