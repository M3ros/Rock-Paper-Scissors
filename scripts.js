const choices = ["Rock", "Paper", "Scissors"];
let playerChoice = getPlayerSelection().toUpperCase();
let cpuChoice = getComputerChoice();

// Function to randomly pull a computer's choice from the array
function getComputerChoice () {
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice.toUpperCase();
}

// Function to get the player's choice from the input 
function getPlayerSelection () {
    let playerChoice = prompt("Please Select Rock, Paper, or Scissors");

 if (playerChoice.toUpperCase() === "ROCK" || playerChoice.toUpperCase() === "PAPER"|| playerChoice.toUpperCase() === "SCISSORS") {
        return playerChoice.toUpperCase();
    } else {
        prompt("Please try again! Select Rock, Paper, or Scissors");
    }
}

// Function to play a round of the game and prints the result in the console
function playRound () {
    getPlayerSelection();
    getComputerChoice();

   if (playerChoice == "ROCK" && cpuChoice == "SCISSORS")
     { console.log(`You Win! ${playerChoice} Beats ${cpuChoice}`);}
    else if (playerChoice == "SCISSORS" && cpuChoice == "PAPER") {
        console.log(`You Win! ${playerChoice} Beats ${cpuChoice}`)
    }
    else if (playerChoice == "PAPER" && cpuChoice == "ROCK") {
        console.log(`You Win! ${playerChoice} Beats ${cpuChoice}`)
    }
    else if (playerChoice == "ROCK" && cpuChoice == "PAPER") {
        console.log(`You Lose! ${cpuChoice} Beats ${playerChoice}`)
    }
    else if (playerChoice == "SCISSORS" && cpuChoice == " ROCK") {
        console.log(`You Lose! ${cpuChoice} Beats ${playerChoice}`)
    }
    else if (playerChoice == "PAPER" && cpuChoice == "SCISSORS") {
        console.log(`You Lose! ${cpuChoice} Beats ${playerChoice}`)
    }else if (playerChoice == "PAPER" && cpuChoice == "SCISSORS") {
        console.log(`You Lose! ${cpuChoice} Beats ${playerChoice}`)
    }else {
        console.log(`Its A Draw! Player Picked ${playerChoice} and Computer picked ${cpuChoice}`)
    }
}

// Funtcion to run a game of 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        reset();
     }
}

// Function to reset the game before playing again
function reset() {
    cpuChoice = getComputerChoice();
    return cpuChoice;
}

game();
