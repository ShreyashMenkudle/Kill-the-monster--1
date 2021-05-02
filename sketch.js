const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;
var block26,block27,block28,block29,block30;
var block31,block32,block33,block34,block35,block36;

var superhero,monster,ground,ground2;

function preload() {
  bg = loadImage("Background.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (200, 400, 600, 5);
  ground2 = new Ground (700,275,100,1);
  superhero= new Superhero(150,200,100,100);
  monster = new Monster(700,200,150,150);
  
  block2 = new Block(310,350,30,40);
  block3 = new Block(341,350,30,40);
  block4 = new Block(372,350,30,40);
  block5 = new Block(403,350,30,40);
  block6 = new Block(434,350,30,40);
  block7 = new Block(465,350,30,40);
  
  block9 = new Block(310,315,30,40);
  block10 = new Block(341,315,30,40);
  block11 = new Block(372,315,30,40);
  block12 = new Block(403,315,30,40);
  block13 = new Block(434,315,30,40);
  block14 = new Block(465,315,30,40);

  block15 = new Block(310,280,30,40);
  block1 = new Block(341,280,30,40);  
  block8 = new Block(372,280,30,40);
  block16 = new Block(403,280,30,40);
  block17 = new Block(434,280,30,40);
  block18 = new Block(465,280,30,40);

  block19 = new Block(310,245,30,40);
  block20 = new Block(341,245,30,40);
  block21 = new Block(372,245,30,40);
  block22 = new Block(403,245,30,40);
  block23 = new Block(434,245,30,40);
  block24 = new Block(465,245,30,40);

  block25 = new Block(310,210,30,40);
  block26 = new Block(341,210,30,40);
  block27 = new Block(372,210,30,40);
  block28 = new Block(403,210,30,40);
  block29 = new Block(434,210,30,40);
  block30 = new Block(465,210,30,40);
  
  block31 = new Block(310,180,30,40);
  block32 = new Block(341,180,30,40);
  block33 = new Block(372,180,30,40);
  block34 = new Block(403,180,30,40);
  block35 = new Block(434,180,30,40);
  block36 = new Block(465,180,30,40);
	Engine.run(engine);
  

}

function draw() {
  rectMode(CENTER);
  background(bg);

  
  superhero.display();
  

  monster.display();

  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display(); 
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}