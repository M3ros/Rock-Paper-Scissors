const options = ["ROCK", "PAPER", "SCISSORS"];
// let playerSelection = getPlayerChoice();

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
  } else if (playerSelection == computerSelection) {
    console.log(
      "It's a draw! " + playerSelection + " draws " + computerSelection
    );
  } else {
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    playRound(playerSelection, computerSelection);
  }
}

game();
