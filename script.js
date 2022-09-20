const gameOptions = document.querySelectorAll("[data-selection]");
const computerScoreDiv = document.getElementById("final-column");
const humanScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const resetButton = document.querySelector(".reset");
const possibleGameOptions = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "🤚",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];

gameOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const playerSelectedGameOption = option.dataset.selection;
    const choice = possibleGameOptions.find(
      (possibleOption) => possibleOption.name === playerSelectedGameOption
    );

    calculateWinnerAndAddScore(choice);
  });
});

function calculateWinnerAndAddScore(humanOption) {
  const computerOption = getComputerPlayHand();
  const isHumanWinner = isWinner(humanOption, computerOption);
  const isComputerWinner = isWinner(computerOption, humanOption);

  addScore(computerOption, isComputerWinner);
  addScore(humanOption, isHumanWinner);

  if (isHumanWinner) incrementScore(humanScore);
  if (isComputerWinner) incrementScore(computerScore);
  keepCount();
}

function isWinner(optionOne, optionTwo) {
  return optionOne.beats === optionTwo.name;
}
function incrementScore(scoreSpan) {
  scoreSpan.innerText = Number(scoreSpan.innerText) + 1;
}

function getComputerPlayHand() {
  const idx = Math.floor(Math.random() * possibleGameOptions.length);

  return possibleGameOptions[idx];
}

function addScore(playerSelectedOption, winner) {
  const div = document.createElement("div");

  div.innerText = playerSelectedOption.emoji;
  div.classList.add("result-selection");

  if (winner) {
    div.classList.add("winner");
  }

  computerScoreDiv.after(div);
}

const keepCount = () => {
  if (
    (Number(humanScore.innerText) === 5) |
    (Number(computerScore.innerText) === 5)
  ) {
    resetGame();
    console.log("Game over");
  }
};

resetButton.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  humanScore.innerText = 0;
  computerScore.innerText = 0;
}
