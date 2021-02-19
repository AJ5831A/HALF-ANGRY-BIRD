const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld , myEngine;
var ground12, box1,box2;



function setup() {
  createCanvas(800,800);
  myEngine = Engine.create();
   myWorld = myEngine.world;
 ground12 = new DECENTGROUND()
box1 = new Box(400,400,50,50)
box2 = new Box(500,400,50,50)

}

function draw() {
  background("black"); 
  Engine.update(myEngine)
 ground12.display()
box1.display()
box2.display()

}


