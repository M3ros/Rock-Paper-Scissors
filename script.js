const options = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let cpuScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper, or Scissors");
  return playerChoice.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "ROCK" && computerSelection == "PAPER") ||
    (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
    (playerSelection == "SCISSORS" && computerSelection == "ROCK")
  ) {
    console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    cpuScore++;
    document.getElementById("cScore").innerHTML = cpuScore;
    console.log("cpu " + cpuScore);
  } else if (playerSelection == computerSelection) {
    console.log(
      "It's a draw! " + playerSelection + " draws " + computerSelection
    );
  } else {
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
    playerScore++;
    document.getElementById("pScore").innerHTML = playerScore;
    console.log("player " + playerScore);
  }
}

function game() {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();
  playRound(playerSelection, computerSelection);
}

// game();
// for (let i = 0; i < 5; i++)
