const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,wall2,wall3,ground1,border1,border2,border3;
var dustbin,DI;

function preload(){
  DI = loadImage("dustbinn.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;

	ground1 = new Ground(width/2,650,width,10);
	border1 = new Ground(800,350,10,height);
	border2 = new Ground(400,0,width,10);
	border3 = new Ground(0,400,10,height);

	wall2 = new Wall(590,563,20,160);
  wall3 = new Wall(750,563,20,160);

  ball1 = new Ball(250,600);

  dustbin = createSprite(670,553,40,40);
  dustbin.addImage(DI);
  dustbin.scale = 0.6;

  ball1.depth = dustbin.depth + 1;

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background("white");
  
  drawSprites();

  keyPressed();

  textSize(20);

  fill(50, 50, 168)
  text("Press Up and Down arrows to control ball's movement",50,20);

  ground1.display();
  wall2.display();
  wall3.display();
  ball1.display();
  dustbin.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){
    Body.applyForce(ball1.body, ball1.body.position, {x:25,y:-25})
    
	}
}

