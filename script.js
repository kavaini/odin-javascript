const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random()) * choices.length];
}

let computerPoints = 0;
let playerPoints = 0;

const roundsToWin = 5;

function playRound(computerSelection, playerSelection) {
  console.log({ computerSelection });
  console.log({ playerSelection });

  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    gameLog.innerHTML = "You Lose! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    gameLog.innerHTML = "You Win! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    gameLog.innerHTML = "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    gameLog.innerHTML = "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    gameLog.innerHTML = "You Win! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    gameLog.innerHTML = "You Win! Scissors beats Paper";
  } else computerSelection === playerSelection;
  {
    gameLog.innerHTML = "It's a draw";
  }
}

// const options = document.querySelectorAll(".options");

// options.forEach((option) => {
//   option.addEventListener("click", function () {});
// });

function checkIfGameIsOver() {
  console.log("checking the winner");
  if (playerPoints == 5 || computerPoints == 5) {
    if (playerPoints > computerPoints) {
      return console.log("You win!");
    } else if (playerPoints < computerPoints) {
      return console.log("You lost :(");
    } else {
      return console.log("ongoing game");
    }
  }
}
