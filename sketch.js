var bg1;
var ch1, ch2, ch3, ch4;
var obstacleGroup, rewardGroup;
var score = 0 


function preload(){
  
  bg1 = loadImage("bg2.jpg");
  ch1Image = loadImage("C-1.png");
  ch2Image = loadImage("C-2.png");
  ch3Image = loadImage("C-3.png");
  ch4Image = loadImage("C-4.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");

  reward1 = loadImage("reward1.png");
  reward2 = loadImage("reward2.png");
  reward3 = loadImage("reward3.png");
  
}

function setup(){
  createCanvas(1250,450);
  //background("white");

  bg = createSprite(625,225, 1250,450); 
  bg.addImage(bg1);

  ch1 = createSprite(170,350,10,10);
  ch1.addImage(ch1Image);
  ch1.scale = (0.5);
  ch1.debug = false
  ch1.setCollider("circle", 0,0,30)

  ch2 = createSprite(250,150,10,10);
  ch2.addImage(ch2Image);
  ch2.scale = (0.5);
  ch2.debug = false
  ch2.setCollider("circle", 0,0,30)

  ch3 = createSprite(950,150,10,10);
  ch3.addImage(ch3Image);
  ch3.scale = (0.5);
  ch3.debug = false
  ch3.setCollider("circle", 0,0,30)

  ch4 = createSprite(850,350,10,10);
  ch4.addImage(ch4Image);
  ch4.scale = (0.5);
  ch4.debug = false
  ch4.setCollider("circle", 0,0,30)

  
  obstacleGroup = new Group()

  rewardGroup = new Group()

}

function draw(){
 background("white");

     if(keyDown("d")){
      ch1.x +=5 
    }
 if(keyDown("a")){
  ch1.x -=5 
  }
 if(keyDown("s")){
  ch1.y +=5 
  } 
 if(keyDown("w")){
  ch1.y -=5 
  }


  if(keyDown("up")){
    ch2.y -= 5 
  }
  if(keyDown("down")){
    ch2.y += 5 
  }
  if(keyDown("right")){
    ch2.x += 5 
  }
  if(keyDown("left")){
    ch2.x -= 5 
  }


  if(keyDown("1")){
    ch4.y -= 5 
  }
  if(keyDown("2")){
    ch4.y += 5 
  }
  if(keyDown("3")){
    ch4.x += 5 
  }
  if(keyDown("4")){
    ch4.x -= 5 
  }

  



// for Team 1
      if(obstacleGroup.isTouching(ch1) || obstacleGroup.isTouching(ch2)){
          score = score-2;
      } 

      if(rewardGroup.isTouching(ch1) || rewardGroup.isTouching(ch2) ){
        score = score+2;
    } 

// for Team 2
      if(obstacleGroup.isTouching(ch3) || obstacleGroup.isTouching(ch4) ){
        score = score-2;
    }

      if(rewardGroup.isTouching(ch3) || rewardGroup.isTouching(ch4) ){
        score = score+2;
    }


  spawnRewards()

  spawnObstacles()
  

 drawSprites()

 textSize(50);
 fill("black");
 text("Score = " + score, 450,50 );
 

}


function mouseDragged(){

   ch3.x = mouseX;
   ch3.y = mouseY;
  
}


function spawnObstacles(){

  if (frameCount % 40 === 0) {
    obstacles = createSprite(random(50, 1200), 0, 100, 100);
    obstacles.debug = false
    obstacles.setCollider("circle",0,0,10)
    obstacles.velocityY = 6;
    obstacles.scale = 0.2;
    var rand = Math.round(random(1,3));
    switch(rand){
        case 1: obstacles.addImage("obstacle1",obstacle1);
        break;
        case 2: obstacles.addImage("obstacle2", obstacle2);
        break;
        case 3: obstacles.addImage("obstacle3", obstacle3);
        break;
    }
    obstacleGroup.add(obstacles);
    
}
}

function spawnRewards(){

  if (frameCount % 70 === 0) {
    rewards = createSprite(random(50, 1200), 0, 100, 100);
    rewards.debug = false
    rewards.velocityY = 6;
    rewards.scale = 0.2;
    var rand = Math.round(random(1,3));
    switch(rand){
        case 1: rewards.addImage("reward1",reward1);
        break;
        case 2: rewards.addImage("reward2", reward2);
        break;
        case 3: rewards.addImage("reward3", reward3);
        break;
    }
    rewardGroup.add(rewards);
    
}
}