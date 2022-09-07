const choiceButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const yourScoreSpan = document.querySelector("data-score");
const computerScoreSpan = document.querySelector("data-computer-score");
const choices = [
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
choiceButtons.forEach((choiceButton) => {
  choiceButton.addEventListener("click", (e) => {
    const choiceName = choiceButton.dataset.selection;
    const choice = choices.find((choice) => choice.name === choiceName);
    makeAChoice(choice);
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan) + 1;
}

function addResult(choices, winner) {
  const div = document.createElement("div");
  div.innerText = choices.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}
function playRound(computerChoice, playerChoice) {
  return playerChoice.beats === computerChoice.name;
}
function makeAChoice(selection) {
  const computerChoice = getComputerChoice();
  const youWinner = playRound(selection, computerChoice);
  const computerWinner = playRound(computerChoice, selection);

  addResult(computerChoice, computerWinner);
  addResult(selection, youWinner);

  if (youWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan);
}
function gameEnds() {}
