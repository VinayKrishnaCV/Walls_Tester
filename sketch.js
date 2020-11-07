var bullet,wall;
var weight,speed,thickness;

function setup() {
  createCanvas(1600,400);

  //defining speed, thickness and weight
  speed=random(233,321);
  thickness=random(22,83);
  weight=random(30,52);


  //creating bullet
  bullet=createSprite(50, 200, 50, 30);
  bullet.velocityX = speed;
  bullet.shapeColor= "grey"

  //creating wall
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);
}

function draw() {
  //refreshing the screen
  background(255,255,255); 
  drawSprites();
  if(bullet.collide(wall)){
    bullet.velocityX=0;
    var Damage =0.5 * weight * speed* speed/(thickness*thickness*thickness);

    if (Damage<10){
      wall.shapeColor = rgb(0,255,0);
    }else if(Damage>10){
      wall.shapeColor = rgb(255,0,0);
    }
  }
}