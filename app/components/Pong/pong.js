// $INIT: PLAYERS
const playerOne = document.querySelector("#paddle-left");
const playerTwo = document.querySelector("#paddle-right");

// $INIT: BALL
const ball = document.querySelector("#ball");

// $INIT: SCORES DISPALAY
const scorePlayerOneDisplay = document.querySelector("#playerscore1");
const scorePlayerTwoDisplay = document.querySelector("#playerscore2");

// $INIT: SCORES
let scorePlayerOne = 0;
let scorePlayerTwo = 0;

// $INIT: COMBO AND RANK
let combo = document.querySelector("#combo-count");
let rank = document.querySelector("#rank");
let count = 1;

// $INIT: PLAYER USERNAME
let UsernamePlayerOne = document.querySelector("#UsernamePlayerOne");
let UsernamePlayerTwo = document.querySelector("#UsernamePlayerTwo");

// $INIT: WINNER DISPLAY
let winnerDisplay = document.querySelector("#winner");

// $INIT: KEYBINDS
// Player one
let UpKeyPlayerOne = document.querySelector("#UpKeyPlayerOne");
let DownKeyPlayerOne = document.querySelector("#DownKeyPlayerOne");
// Player two
let UpKeyPlayerTwo = document.querySelector("#UpKeyPlayerTwo");
let DownKeyPlayerTwo = document.querySelector("#DownKeyPlayerTwo");

// PLAYERS SETTINGS
// :keybinds
// TODO Make player settings for keybinds ball color etc...

// GAME SETTINGS
// :GameBorder
let gameZoneXMax = 800;
let gameZoneXMin = 0;
let gameZoneYMax = 400;
let gameZoneYMin = 0;
// :Paddle
let paddleHeight = 115;
let paddleWidth = 5;
let paddleSpeed = 1;
// :Ball
let ballScale = 15;
let ballSpeedX = 1.5;
let ballSpeedY = 1.5;
// :ScoreToWin
let scoreToWin = 5;

// PLAYER AND BALL : INIT SPAWNING
// :Player
let playerOneY = 160;
let playerOneX = gameZoneXMin + paddleWidth;
let playerTwoY = 160;
let playerTwoX = gameZoneXMax - paddleWidth;
// :Ball
const BallInitalXSpawn = 400;
const BallInitalYSpawn = 200;
let ballXInit = 400;
let ballYInit = 200;
ball.style.left = ballXInit + "px";
ball.style.top = ballYInit + "px";

// TRUE || FALSE Mouvement check
let moveUpPlayerOne = false;
let moveDownPlayerOne = false;
let moveUpPlayerTwo = false;
let moveDownPlayerTwo = false;

let playerOneUsername = prompt("Qu'elle est votre nom ?");
let playerTwoUsername = prompt("Qu'elle est le nom de votre adversaire ?");
UsernamePlayerOne.textContent = playerOneUsername;
UsernamePlayerTwo.textContent = playerTwoUsername;

function keyboardAction() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "z") {
      moveUpPlayerOne = true;
      UpKeyPlayerOne.classList.add("keypressed");
    }

    if (e.key === "s") {
      moveDownPlayerOne = true;
      DownKeyPlayerOne.classList.add("keypressed");
    }

    if (e.key === "ArrowUp") {
      moveUpPlayerTwo = true;
      UpKeyPlayerTwo.classList.add("keypressed");
    }

    if (e.key === "ArrowDown") {
      moveDownPlayerTwo = true;
      DownKeyPlayerTwo.classList.add("keypressed");
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "z") {
      moveUpPlayerOne = false;
      UpKeyPlayerOne.classList.remove("keypressed");
    }
    if (e.key === "s") {
      moveDownPlayerOne = false;
      DownKeyPlayerOne.classList.remove("keypressed");
    }
    if (e.key === "ArrowUp") {
      moveUpPlayerTwo = false;
      UpKeyPlayerTwo.classList.remove("keypressed");
    }
    if (e.key === "ArrowDown") {
      moveDownPlayerTwo = false;
      DownKeyPlayerTwo.classList.remove("keypressed");
    }
  });
}
function gameMechanics() {
  // PLAYER ONE MOUVEMENT
  // Move paddle to top when UpKey pressed
  if (moveUpPlayerOne && playerOneY > 0) {
    playerOneY -= paddleSpeed;
    playerOne.style.top = playerOneY + "px";
  }
  // move paddle to bottom when downKey pressed
  if (moveDownPlayerOne && playerOneY < gameZoneYMax - paddleHeight) {
    playerOneY += paddleSpeed;
    playerOne.style.top = playerOneY + "px";
  }

  // PLAYER TWO  MOUVEMENT

  // Move paddle to top when UpKey pressed
  if (moveUpPlayerTwo && playerTwoY > 0) {
    playerTwoY -= paddleSpeed;
    playerTwo.style.top = playerTwoY + "px";
  }
  // move paddle to bottom when downKey pressed
  if (moveDownPlayerTwo && playerTwoY < gameZoneYMax - paddleHeight) {
    playerTwoY += paddleSpeed;
    playerTwo.style.top = playerTwoY + "px";
  }

  // BALL MOUVEMENT
  ballXInit += ballSpeedX;
  ballYInit += ballSpeedY;

  if (ballXInit <= gameZoneXMin || ballXInit >= gameZoneXMax - ballScale) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballYInit <= gameZoneYMin || ballYInit >= gameZoneYMax - ballScale) {
    ballSpeedY = -ballSpeedY;
  }

  ball.style.left = ballXInit + "px";
  ball.style.top = ballYInit + "px";
  paddleCollisions();
  ComboCounter();
  requestAnimationFrame(gameMechanics);
}

function paddleCollisions() {
  if (
    ballXInit <= playerOneX + paddleWidth &&
    ballXInit >= playerOneX &&
    ballYInit + ballScale >= playerOneY &&
    ballYInit <= playerOneY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
    combo.textContent = `${count}`;
    accelerationBall();
    count++;
  }

  if (
    ballXInit + ballScale >= playerTwoX &&
    ballXInit <= playerTwoX + paddleWidth &&
    ballYInit + ballScale >= playerTwoY &&
    ballYInit <= playerTwoY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
    combo.textContent = `${count}`;
    accelerationBall();
    count++;
  }

  if (ballXInit <= playerOneX - paddleWidth) {
    scorePlayerTwo++;
    resetBall();
  }
  if (ballXInit + ballScale >= playerTwoX + paddleWidth) {
    scorePlayerOne++;
    resetBall();
  }
  updateScores();
}

function updateScores() {
  scorePlayerOneDisplay.textContent = scorePlayerOne;
  scorePlayerTwoDisplay.textContent = scorePlayerTwo;

  if (scorePlayerOne === scoreToWin) {
    winnerDisplay.textContent = `${playerOneUsername} Win the game!`;
    resetBall();
  } else if (scorePlayerTwo === scoreToWin) {
    winnerDisplay.textContent = `${playerTwoUsername} Win the game!`;
    resetBall();
  }
}

function accelerationBall() {
  if (ballSpeedX && ballSpeedY < 5) {
    ballSpeedX += 0.2;
    ballSpeedY += 0.2;
  } else {
    ballSpeedX += 0;
    ballSpeedY += 0;
  }

  if (ballSpeedX && ballSpeedY <= 2) {
    ball.style.backgroundColor = "red";
  }
}

function resetBall() {
  count = 1;
  combo.textContent = "Combo Loose :(";
  rank.classList.remove(
    "rank-c",
    "rank-b",
    "rank-a",
    "rank-s",
    "rank-ss",
    "rank-sss",
  );
  ball.style.backgroundColor = "white";
  ballXInit = BallInitalXSpawn;
  ballYInit = BallInitalYSpawn;
  ball.style.left = ballXInit + "px";
  ball.style.top = ballYInit + "px";
  ballSpeedX = 1.5;
  ballSpeedY = 1.5;

  ballSpeedX = Math.abs(ballSpeedX) * (Math.random() > 0.5 ? 1 : -1);
}

function ComboCounter() {
  if (count <= 10) {
    rank.textContent = `C`;
    rank.classList.add("rank-c");
  }
  if (count > 10) {
    rank.textContent = `B`;
    rank.classList.add("rank-b");
  }
  if (count > 20) {
    rank.textContent = `A`;
    rank.classList.add("rank-a");
  }
  if (count > 30) {
    rank.textContent = `S`;
    rank.classList.add("rank-s");
  }
  if (count > 40) {
    rank.textContent = `SS`;
    rank.classList.add("rank-ss");
  }
  if (count > 50) {
    rank.textContent = `SSS`;
    rank.classList.add("rank-sss");
  }
}

gameMechanics();
keyboardAction();
