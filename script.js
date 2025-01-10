const options = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
  return options[Math.floor(Math.random() * options.length)];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// Hide the reset button initially
resetGameBtn.style.display = "none";

function showResults(userOption) {
  const result = getRoundResults(userOption);
  roundResultsMsg.innerText = result;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  if (playerScore === 5 || computerScore === 5) {
    winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;
    resetGameBtn.style.display = "block"; // Show the reset button when the game ends
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = "0";
  computerScoreSpanElement.innerText = "0";
  resetGameBtn.style.display = "none"; // Hide the reset button after resetting
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

document.getElementById("rock-btn").addEventListener("click", () => showResults("Rock"));
document.getElementById("paper-btn").addEventListener("click", () => showResults("Paper"));
document.getElementById("scissors-btn").addEventListener("click", () => showResults("Scissors"));

document.getElementById('theme-toggle').addEventListener('click', function () {
  const body = document.body;
  const isDarkMode = body.classList.contains('dark');

  // toggle between light and dark mode
  if (isDarkMode) {
    body.classList.remove('dark');
    body.classList.add('light');
    this.textContent = ' Dark Theme'; // Switch to dark theme icon
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    this.textContent = 'Light Theme'; // Switch to light theme icon
  }
});
