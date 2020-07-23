
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var bin1, bin2, bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(100, 500, 50);
	ground =new Ground(400,670,800,25);
	bin1= new Bin(590,640,200,20);
	bin2= new Bin(500,570,20,150);
	bin3= new Bin(680,570,20,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-185});
	}
}

