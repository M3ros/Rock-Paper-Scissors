const options = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let cpuScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice() {
  let playerSelection = "";
  if ((document.getElementsByClassName(".btn").innerHTML = "Rock")) {
    let selection = "ROCK";
    return (playerSelection = selection);
  } else if ((document.getElementsByClassName(".btn").innerHTML = "Paper")) {
    let selection = "Paper";
    return (playerSelection = selection);
  } else if ((document.getElementsByClassName(".btn").innerHTML = "Scissors")) {
    let selection = "SISSORS";
    return (playerSelection = selection);
  }
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
    return cpuScore;
  } else if (playerSelection == computerSelection) {
    console.log(
      "It's a draw! " + playerSelection + " draws " + computerSelection
    );
  } else {
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
    playerScore++;
    document.getElementById("pScore").innerHTML = playerScore;
    return playerScore;
  }
}

function game() {
  if (cpuScore <= 4 && playerScore <= 4) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    playRound(playerSelection, computerSelection);
  } else if (playerScore == 5 && cpuScore < 5) {
    document.getElementById("winner").innerHTML = "Winner: Player! ";
    newGame();
  } else if (cpuScore == 5 && playerScore < 5) {
    document.getElementById("winner").innerHTML = "Winner: CPU!";
    newGame();
  }
}
function newGame() {
  document.getElementById("cScore").innerHTML = 0;
  document.getElementById("pScore").innerHTML = 0;
  cpuScore = 0;
  playerScore = 0;
}
