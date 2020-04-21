const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,engine,world;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(400,390,800,20);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display(); 
  
  
}