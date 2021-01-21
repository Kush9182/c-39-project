var background
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground
var PLAY=1;
var END=0;
var score=0;
var gamestate=PLAY;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  b=loadImage("B.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bananaGroup=createGroup()
  obstacleGroup=createGroup()}



function setup() {
  
  createCanvas(1000,500);
  
  /*
  ba=createSprite(width/2,height/2,20,250);
  ba.addImage(b);
  ba.scale=4;*/
  
  monkey=createSprite(400,450,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2;

  ground=createSprite(width/2,470,100000,1)
}


function draw() {

  background(b);
  
  
  if(gamestate===PLAY){
    camera.position.x=monkey.x;
    //ba.velocityX=3;   
    banana()
    rock()
    
    ground.visible=false
    monkey.collide(ground);
    monkey.velocityX=3;
    monkey.velocityY=monkey.velocityY+0.8;
    
    fill("white");
    textSize(30);
    text("Score = "+score,monkey.x+300,monkey.y-300);
    
    //if(ba.x<100){
    //  ba.x=300}
    
    if(keyDown("space")&&monkey.y>350){
      monkey.velocityY=-11}
    
    if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach()
      score=score+1;
      monkey.scale=monkey.scale+0.01}
    
    if(monkey.isTouching(obstacleGroup)){
      gamestate=END;
      monkey.scale=0.1; 
  }
}

  if(gamestate===END){
    background(220);
    monkey.destroy()
    //ba.destroy();
    bananaGroup.destroyEach()
    obstacleGroup.destroyEach()   
    
    fill("black")
    textSize(40);
    text("Game Over",camera.position.x,camera.position.y);
  }

  drawSprites();

   }



function banana(){
  
  if(camera.position.x%50===0){
    var banana=createSprite(camera.position.x+600,random(300,430),10,10)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-8
    banana.lifetime=160
    bananaGroup.add(banana)}}



function rock(){
  
  if(camera.position.x%300===0){
    var rock=createSprite(camera.position.x+600,ground.y-30,10,10)
    rock.addImage(obstacleImage)
    rock.scale=0.15
    rock.velocityX=-8
    rock.lifetime=160
    obstacleGroup.add(rock)}}