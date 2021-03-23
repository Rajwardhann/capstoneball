const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(400,400);
ground = new Ground(200,375,400,20);
box1 = new block(300,365,40,40)
box2 = new block(300,325,40,40)
box3 = new block(300,295,40,40)
box4 = new block(300,255,40,40)
box5 = new block(300,215,40,40)
box6 = new block(300,195,40,40)

box7 = new block(250,365,40,40)
box8 = new block(250,325,40,40)
box9 = new block(250,295,40,40)
box10 = new block(250,255,40,40)
box11= new block(250,215,40,40)
box12= new block(250,195,40,40)
ball1 = new ball(100,300,50);
slingshot = new rope(ball1.body,{x: 100, y: 100})
   
}

function draw(){

    Engine.update(engine)
    background("yellow");
    drawSprites();
    

   
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ball1.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ball1.display();
    slingshot.display();
    fill("red");
    text("Press space key frequently and fast to destroy the building and leave",2,10)
    text( "when reached maximum length",2,25)
}

function keyPressed()
{
    if(keyCode ===32)
    {
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x: -300 , y: 0})
    }
   
}


