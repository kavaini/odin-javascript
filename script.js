const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random()) * choices.length];
}

function playRound(computerSelection, playerSelection) {
  console.log({ computerSelection });
  console.log({ playerSelection });

  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
  } else computerSelection === playerSelection;
  {
    return "It's a draw";
  }
}

const computerSelection = getComputerChoice();
console.log(`Computer chose ${computerSelection}`);

const playerSelection = "Paper";
console.log(`Player chose ${playerSelection}`);

console.log(playRound(playerSelection, computerSelection));
