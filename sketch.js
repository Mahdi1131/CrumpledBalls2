
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750,height,1500,50);
	paper = new Bird(100,550, 50);

	box = new Box(width/2 +100, height -35, 20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);

  ground.display();
  paper.display();
  box.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:5, y:-5});
	}
}
