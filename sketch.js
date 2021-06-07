
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,rubberobj 
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	rubberobj = new paper(1200,550,PI/7);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  rubberobj.display();


  keypressed();
}


function keypressed (){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paperobj.body,paperobj.body.position,{x:130 ,y:-145});
	}
}

