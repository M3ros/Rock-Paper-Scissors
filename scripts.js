const choices = ["ROCK", "PAPER", "SCISSORS"];
let cpuChoice = getComputerChoice();
let playerSelections = "";
let compChoiceInt = 0;
let playerChoiceInt = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let compScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;
const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;
const output = document.querySelector('.output');
output.textContent = "Ready?";


// Function to randomly pull a computer's choice from the array
function getComputerChoice () {
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}

buttons.forEach((button)=>{button.addEventListener('click',()=>{

    playerSelections = button.id;
    if (playerSelections == "ROCK"){
        playerSelections = "ROCK";
    }
    else if (playerSelections == "PAPER"){
        playerSelections = "PAPER";
    }
    else if (playerSelections == "SCISSORS")
        playerSelections = "SCISSORS";
        game();
        })
});


// Function to play a round of the game and prints the result in the console
function playRound () {
    getComputerChoice();

   if (playerSelections == "ROCK" && cpuChoice == "SCISSORS")
     { output.textContent = `You Win! ${playerSelections} Beats ${cpuChoice}`;
     playerScore++;}
    else if (playerSelections == "SCISSORS" && cpuChoice == "PAPER") {
        
        output.textContent = `You Win! ${playerSelections} Beats ${cpuChoice}`;
        playerScore++;
    }
    else if (playerSelections == "PAPER" && cpuChoice == "ROCK") {
        output.textContent = `You Win! ${playerSelections} Beats ${cpuChoice}`;
        playerScore++;

    }
    else if (playerSelections == "ROCK" && cpuChoice == "PAPER") {
        output.textContent = `You Lose! ${cpuChoice} Beats ${playerSelections}`;
        compScore++;
    }
    else if (playerSelections == "SCISSORS" && cpuChoice == " ROCK") {
        output.textContent = `You Lose! ${cpuChoice} Beats ${playerSelections}`;
        compScore++;
    }
    else if (playerSelections == "PAPER" && cpuChoice == "SCISSORS") {
        output.textContent = `You Lose! ${cpuChoice} Beats ${playerSelections}`;
        compScore++;
    }else if (playerSelections == "PAPER" && cpuChoice == "SCISSORS") {
        output.textContent = `You Lose! ${cpuChoice} Beats ${playerSelections}`;
        compScore++;
    }else {
        output.textContent = `Its A Draw! Player Picked ${playerSelections} and Computer picked ${cpuChoice}`
    }
}

// Funtcion to run a game of 5 rounds
function game() {
    output.textContent = "Choose Rock, Paper, or Scissors";
    playRound();
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
        if (playerScore == 5){
            output.textContent = "You Won the Game! Congrats!";
            playerScore = 0;
            compScore = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${compScore}`;
        }
        else if (compScore == 5){
            output.textContent = "You Lost the game! You Suck.... Tomato Tomato!"
            playerScore = 0;
            compScore = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${compScore}`;
        }
}



