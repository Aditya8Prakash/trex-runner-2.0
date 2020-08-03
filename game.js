var score = 0;
var HighestScore = 0;
function changeBackgroundImageAtSetupWhenGameStateIs2 () {
    changedbackground.addImage(changedbackgroundImg2);
    selectionmenu.visible= false;
}
function createButtonsOfGamesWhenGameStarts () {
    backToMenubtn = createA('','Refresh');
    backToMenubtn.position(-9999,999);
}
//---Main Game Starts---//
var gameSetup = () => {
    sp = createSprite(45,window.innerHeight/1.5,10);
    sp.addAnimation("running", trex_running);
    sp.addAnimation("collided", trex_collided);
    sp.visible = false;
    sp.scale = 0.65;
    ground = createSprite(window.innerWidth/2, window.innerHeight-200+sp.width+20, window.innerWidth, 10);
    ground.addImage("ground", groundImage);
    ground.scale = 1.75;
    ground.visible = false;
    invisibleGround = createSprite(200, 190, 400, 10);
    invisibleGround.visible = false;
    cloudsGroup = new Group();
    obstaclesGroup = new Group();
    birdsGroup = new Group();
    scoreht = createElement('h3');
}
var gameDraw = () => {
  scoreht.html("Score : "+Math.round(score));
if (gameState === 1) {
    scoreht.position(-999,999);
}
  if (gameState > 1) {
    scoreht.position(window.innerWidth/1.5,window.innerHeight/999);
  }
    if (gameState === 2) {
        sp.visible = true;
        sp.velocity.y = sp.velocity.y+0.8;
        ground.visible = true;
        score = score + Math.round(getFrameRate() / 60)/4;
        ground.velocity.x = 3
        ground.velocity.x = -(6 + 3 * score / 80);
        if (sp.position.y>window.innerHeight-136) {
            sp.position.y=window.innerHeight-135;
            sp.velocity.y = sp.velocity.y-1;
        }
        if (ground.position.x<0) {
            ground.position.x = window.innerWidth/2;
        }
        if (touches.length>0 && sp.position.y === window.innerHeight-135) {
            sp.velocity.y = 0;
            sp.velocity.y = sp.velocity.y- 20;
        }
        if (keyDown("space") && sp.position.y === window.innerHeight-135) {
            sp.velocity.y = 0;
            sp.velocity.y = sp.velocity.y- 20;
        }
        spawnClouds();
        spawnClouds();
        spawnObstacles();
        for (let i = 0; i < obstaclesGroup.length; i++) {
          var element = obstaclesGroup[i];
          if (isTouching(element,sp)) {
            gameState = 3;
          }
        }
        if (gameState === 3) {
          sp.changeAnimation("collided", trex_collided);
          for (let i = 0; i < obstaclesGroup.length; i++) {
            var element = obstaclesGroup[i];
              element.velocity.x=0;
          }
          for (let i = 0; i < cloudsGroup.length; i++) {
            var element = cloudsGroup[i];
              element.velocity.x=0;
          }
        }
        if (HighestScore < score) {
          HighestScore = Math.round(score);
          d2.ref('/'+player.reg+'/data').set({
            score:HighestScore,
            name:player.name,
            email:player.email,
            reg:player.reg,
            pass:player.pass
          })
        }
    }
    if (gameState !== 2) {
            ground.position.x = window.innerWidth/2;
            sp.position.y=window.innerHeight-152;
            sp.velocity.y = 0;
    }
}
function spawnClouds() {
    if (frameCount % 90 === 0) {
      var cloud = createSprite(window.innerWidth+200 + random(random(100),random(100,250)),random(80,350));
      cloud.addImage(cloudImage);
      cloud.scale = random(1,1.5);
      cloud.velocity.x = -(2.5 + score / 700);
      cloud.depth = sp.depth;
      sp.depth = sp.depth + 1;
      cloudsGroup.add(cloud);
    }
  }
  function spawnObstacles() {
        if (frameCount % 100 === 0) {
            var obstacle = createSprite(window.innerWidth+100,window.innerHeight-117.5 , 10, 40);
            obstacle.velocity.x = -(6 + 3 * score / 70);
            var rand = Math.round(random(1, 6));
            switch (rand) {
              case 1:
                obstacle.addImage(obstacle1);
                break;
              case 2:
                obstacle.addImage(obstacle2);
                break;
              case 3:
                obstacle.addImage(obstacle3);
                break;
              case 4:
                obstacle.addImage(obstacle4);
                break;
              case 5:
                obstacle.addImage(obstacle5);
                break;
              case 6:
                obstacle.addImage(obstacle6);
                break;
              default:
                break;
            }
            obstacle.scale = 0.6;
            obstaclesGroup.add(obstacle);
    }
  }