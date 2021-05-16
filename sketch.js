
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  FoodGroup = new Group()
  obstacleGroup = new Group()
  
}



function setup() {
  
  createCanvas(670,400);
  score = 0;
  survivalTime = 0;
  
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
//console.log(ground.x)
  
  

  
}


function draw() {

  background("lightgreen");
  
  if(ground.x<0){
    ground.x = ground.width/2;
   // ground.velocityX = -20;
  }
  
  if(keyDown("space") ) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  
if(World.frameCount%200===0){
  fruits();
  }
  
   if(World.frameCount%300===0){
   stones();
  }
  
  // fruits();  
  
  drawSprites();
  
  if(monkey.isTouching(FoodGroup))
    FoodGroup.destroyEach()
  
  if(monkey.isTouching(obstacleGroup))
    monkey.destroy()     

 
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
   fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time: " +  survivalTime , 100, 50);
  
  
  function fruits(){
     
  banana = createSprite(670,Math.round(random(170,230)) ,10,1, 0);
 
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    FoodGroup.add(banana);
    
    
    
  }
  
  function stones(){
    
    obstacle = createSprite(670,380,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.3
    obstacleGroup.add(obstacle);

  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}






