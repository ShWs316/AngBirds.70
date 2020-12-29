
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function preload()
{
 bckimg=loadImage("sprites/bg.png");
}
function setup()
{
createCanvas (1200,400);
 engine=Engine.create();
 world=engine.world;
 ground=new Ground(600,380,1200,40);
 box=new Box(700,310,70,70);
 box1=new Box(920,310,70,70);
 Pig1=new Pig(800,330,50,50);
 log1=new Log(810,290,300,PI/2);

 box2=new Box(700,220,70,70);
 box3=new Box(920,220,70,70);
 Pig2=new Pig(800,240,50,50);
 log2=new Log(810,200,300,PI/2);

 box4=new Box(810,130,70,70);
 log3=new Log(700,110,130,PI/7);
 log4=new Log(920,110,130,-PI/8);

 bird=new Bird(100,100,50,50);
 

}



function draw()
{
  background(bckimg);
  Engine.update(engine);
  ground.display();
  box.display();
  box1.display();
  Pig1.display();
  log1.display();
  
  box2.display();
  box3.display();
  Pig2.display();
  log2.display();

  box4.display();
  log3.display();
  log4.display();

  bird.display();
}