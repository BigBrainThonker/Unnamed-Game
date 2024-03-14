var player;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var loot1;
var loot2;
var scores;
var playerSpeed = 5;
var enemy1Speed = 1;
var enemy2Speed = -2;
var enemy3Speed = -3;
var enemy4Speed = 1;
var enemy5SpeedX = 2;
var enemy5SpeedY = 2;
var enemy6SpeedX = -3;
var enemy6SpeedY = -3;
var pauseCount = 1;

function setup() {

  createCanvas(400, 400)
  background(0, 255, 242)
  player = createSprite(width / 2, height / 2, 25, 25);
  enemy1 = createSprite(width / 2, 0, 40, 30);
  enemy2 = createSprite(width, 200, 30, 40);
  enemy3 = createSprite(width / 2, 400, 40, 30);
  enemy4 = createSprite(0, 200, 30, 40)
  enemy5 = createSprite(0, 0, 30, 30)
  enemy6 = createSprite(width, height, 30, 30)
  loot1 = createSprite(300, 100, 15, 15)
  loot2 = createSprite(100, 300, 15, 15)
  player.shapeColor = color('rgb(50, 50, 50)');
  enemy1.shapeColor = color('rgb(17, 0, 255)');
  enemy2.shapeColor = color('rgb(17, 0, 255)');
  enemy3.shapeColor = color('rgb(17, 0, 255)');
  enemy4.shapeColor = color('rgb(17, 0, 255)');
  enemy5.shapeColor = color('rgb(17, 0, 255)');
  enemy6.shapeColor = color('rgb(17, 0, 255)');
  loot1.shapeColor = color('rgb(138, 0, 0)');
  loot2.shapeColor = color('rgb(138, 0, 0)');
}

function draw() {
  if (player.overlap(loot1)) {
    loot1.position.y = random(5, 395)
    loot1.position.x = random(5, 395);
    document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 100;
  }
  if (player.overlap(loot2)) {
    document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 100;
    loot2.position.y = random(5, 395);
    loot2.position.x = random(5, 395);
  }
  background(0, 255, 242)
  drawSprites()
  if (keyDown(68) && player.position.x < width - 13) {
    player.position.x = player.position.x + playerSpeed
  }
  if (keyDown(RIGHT_ARROW) && player.position.x < width - 13) {
    player.position.x = player.position.x + playerSpeed
  }

  if (keyDown(65) && player.position.x > 13) {
    player.position.x = player.position.x - playerSpeed
  }
  if (keyDown(LEFT_ARROW) && player.position.x > 13) {
    player.position.x = player.position.x - playerSpeed
  }

  if (keyDown(87) && player.position.y > 13) {
    player.position.y = player.position.y - playerSpeed
  }
  if (keyDown(UP_ARROW) && player.position.y > 13) {
    player.position.y = player.position.y - playerSpeed
  }

  if (keyDown(83) && player.position.y < height - 13) {
    player.position.y = player.position.y + playerSpeed
  }
  if (keyDown(DOWN_ARROW) && player.position.y < height - 13) {
    player.position.y = player.position.y + playerSpeed
  }
  
  enemy1.velocity.y = enemy1Speed;
  enemy2.velocity.x = enemy2Speed;
  enemy3.velocity.y = enemy3Speed;
  enemy4.velocity.x = enemy4Speed;
  enemy5.velocity.y = enemy5SpeedX;
  enemy5.velocity.x = enemy5SpeedY;
  enemy6.velocity.x = enemy6SpeedX;
  enemy6.velocity.y = enemy6SpeedY;


  if (enemy1.position.y > height || keyDown(82) || keyDown(81) && keyDown(77)) {
    enemy1.position.y = 0
  }
  if (enemy2.position.x < 0 || keyDown(82) || keyDown(81) && keyDown(77)) {
    enemy2.position.x = width
  }
  if (enemy3.position.y < 0 || keyDown(82) || keyDown(81) && keyDown(77)) {
    enemy3.position.y = height
  }
  if (enemy4.position.x > height || keyDown(82) || keyDown(81) && keyDown(77)) {
    enemy4.position.x = 0
  }
  if (enemy5.position.y > height || keyDown(82) || keyDown(81) && keyDown(77)) {
    enemy5.position.y = 0
  }
  if (enemy5.position.x > height || keyDown(82) || keyDown(81) && keyDown(77)) {
    enemy5.position.x = 0
  }
  if (enemy6.position.y < 0 || keyDown(82) || keyDown(81) && keyDown(77)) {
    enemy6.position.y = width
  }
  if (enemy6.position.x < 0 || keyDown(82) || keyDown(81) && keyDown(77)) {
    enemy6.position.x = width
  }
  if (keyDown(82)) {
    restart();
  }
  if (keyDown(81) && keyDown(77)) {
    player.position.x = width / 2
    player.position.y = width / 2
    playerSpeed = 5;
    enemy1Speed = 1;
    enemy2Speed = -2;
    enemy3Speed = -3;
    enemy4Speed = 1;
    enemy5SpeedX = 2;
    enemy5SpeedY = 2;
    enemy6SpeedX = -3;
    enemy6SpeedY = -3;
  }

  onkeydown = function(keyPressed) {
    if (keyPressed.keyCode == 80) {
      pause();
    }
  }

  if (enemy1.overlap(player)) {
    gameOver()
  }
  if (enemy2.overlap(player)) {
    gameOver()
  }
  if (enemy3.overlap(player)) {
    gameOver()
  }
  if (enemy4.overlap(player)) {
    gameOver()
  }
  if (enemy5.overlap(player)) {
    gameOver()
  }
  if (enemy6.overlap(player)) {
    gameOver()
  }
}
function pause() {
  if (pauseCount % 2 == 1) {
    playerSpeed = 0;
    enemy1Speed = 0;
    enemy2Speed = 0;
    enemy3Speed = 0;
    enemy4Speed = 0;
    enemy5SpeedX = 0;
    enemy5SpeedY = 0;
    enemy6SpeedX = 0;
    enemy6SpeedY = 0;
    pauseCount += 1;
  } else if (pauseCount % 2 == 0) {
    playerSpeed = 5;
    enemy1Speed = 1;
    enemy2Speed = -2;
    enemy3Speed = -3;
    enemy4Speed = 1;
    enemy5SpeedX = 2;
    enemy5SpeedY = 2;
    enemy6SpeedX = -3;
    enemy6SpeedY = -3;
    pauseCount = +1;
  }
}
function restart() {
  player.position.x = width / 2
  player.position.y = width / 2
  playerSpeed = 5;
  enemy1Speed = 1;
  enemy2Speed = -2;
  enemy3Speed = -3;
  enemy4Speed = 1;
  enemy5SpeedX = 2;
  enemy5SpeedY = 2;
  enemy6SpeedX = -3;
  enemy6SpeedY = -3;
  document.getElementById('score').innerHTML = 0;
}
function gameOver() {
  background(0, 0, 0)
  playerSpeed = 0;
  enemy1.velocity.y = 0;
  enemy2.velocity.x = 0;
  enemy3.velocity.y = 0;
  enemy4.velocity.x = 0;
  enemy5.velocity.y = 0;
  enemy5.velocity.x = 0;
  enemy6.velocity.x = 0;
  enemy6.velocity.y = 0;
  //document.getElementById('score').innerHTML = 0;
  textSize(50);
  fill('white');
  text("Game Over!", 65, 150);
  let restartButton = createButton('Play Again?');
  restartButton.position(100, 300);
  restartButton.mousePressed(() => {
    restart();
  });
}
