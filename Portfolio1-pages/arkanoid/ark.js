let $canvas = document.getElementById("canvas");
//variables generales
let ctx = $canvas.getContext("2d");
$canvas.width = 400;
$canvas.height = 400;

//variables de la pelota
let positionBallX = $canvas.width / 2;
let positionBallY = $canvas.height - 50;
let radiusBall = 5;
let movementX = 2;
let movementY = -2;

// varaibles de la paleta
let positionPaletteX = 170;
let positionPaletteY = $canvas.height - 50;
let paletteWidth = 60;
let paletteHeight = 10;
let movementPaletteX = 8;
let movementPaletteY = -8;

let rightPressed = false;
let leftPressed = false;

let $ark = document.querySelector("#ark");
let $brick = document.querySelector("#brick");

//variables de los ladrillos
let widthBrick = 83;
let heightBrick = 43;
let brickRows = 6;
let brickColumns = 4;
let offsetLeft = 32;
let offsetTop = 20;
let paddingBrick = 0;
let bricks = [];

let brickStatus = {
  ACTIVE: 1,
  DESTROYED: 0,
};

for (let c = 0; c < brickColumns; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRows; r++) {
    let positionBrickX = c * (widthBrick + paddingBrick) + offsetLeft;
    let positionBrickY = r * (heightBrick + paddingBrick) + offsetTop;
    bricks[c][r] = {
      x: positionBrickX,
      y: positionBrickY,
      status: brickStatus.ACTIVE,
      color: Math.floor(Math.random() * 6),
    };
  }
}

console.log(bricks);

function drawBricks() {
  for (let c = 0; c < brickColumns; c++) {
    for (let r = 0; r < brickRows; r++) {
      let currentBrick = bricks[c][r];
      if (currentBrick.status === brickStatus.DESTROYED) continue;

      let changeColor = currentBrick.color * 88;

      ctx.drawImage(
        $brick,
        changeColor,
        4,
        widthBrick,
        heightBrick,
        currentBrick.x,
        currentBrick.y,
        widthBrick,
        heightBrick
      );
    }
  }
}

console.log(bricks);

function initEvents() {
  document.addEventListener("keydown", handlerEventDown);
  document.addEventListener("keyup", handlerEventUp);

  function handlerEventDown(e) {
    let { key } = e;

    if (key === "ArrowRight" || e.key === "Right") {
      rightPressed = true;
      animatePalette();
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      leftPressed = true;
      animatePalette();
    }
  }

  function handlerEventUp(e) {
    let { key } = e;

    if (key === "ArrowRight" || e.key === "Right") {
      rightPressed = false;
      animatePalette();
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      leftPressed = false;
      animatePalette();
    }
  }
}

function drawPalette() {
  ctx.drawImage(
    $ark,
    31,
    174,
    44,
    paletteHeight,
    positionPaletteX,
    positionPaletteY,
    paletteWidth,
    paletteHeight
  );
}
function drawBall() {
  ctx.beginPath();
  ctx.arc(positionBallX, positionBallY, radiusBall, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}
function animateBall() {
  positionBallY += movementY;
  positionBallX += movementX;
}
function animatePalette() {
  if (rightPressed && positionPaletteX < $canvas.width - paletteWidth) {
    positionPaletteX += movementPaletteX;
  } else if (leftPressed && positionPaletteX > 0) {
    positionPaletteX -= movementPaletteX;
  }
}

function checkCollision() {
  if (positionBallX > $canvas.width - radiusBall) {
    movementX = -movementX;
  }

  if (positionBallY < radiusBall) {
    movementY = -movementY;
  }

  if (positionBallX < radiusBall) {
    movementX = -movementX;
  }

  let isInsideWithPalette =
    positionBallX > positionPaletteX &&
    positionBallX < positionPaletteX + paletteWidth;
  let isCollisionWithPalette = positionBallY > positionPaletteY;

  if (isInsideWithPalette && isCollisionWithPalette) {
    movementY = -movementY;
  }

  console.log(isCollisionWithPalette, isInsideWithPalette);

  positionBallY += movementY;
  positionBallX += movementX;
}
function clearDraws() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}

function collisionBricks() {
  for (let c = 0; c < brickColumns; c++) {
    for (let r = 0; r < brickRows; r++) {
      let currentBrick = bricks[c][r];
      if (currentBrick.status === brickStatus.DESTROYED) continue;
      let isBallSamePositionBrickX =
        positionBallX > currentBrick.x &&
        positionBallX < currentBrick.x + widthBrick;
      let isBallSamePositionBrickY =
        positionBallY > currentBrick.y &&
        positionBallY < currentBrick.y + heightBrick;

      if (isBallSamePositionBrickX && isBallSamePositionBrickY) {
        positionBallY += movementY;
        currentBrick.status = brickStatus.DESTROYED;
      }
    }
  }
}

function draw() {
  clearDraws();

  drawBall();
  drawPalette();
  drawBricks();

  collisionBricks();
  animateBall();
  animatePalette();

  checkCollision();

  window.requestAnimationFrame(draw);
}

draw();
initEvents();
