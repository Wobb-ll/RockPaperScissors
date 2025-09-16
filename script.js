let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;

    let cpuDecision;

    if (cpuChoice === 1) {
        cpuDecision = "rock"
    } else if (cpuChoice === 2) {
        cpuDecision = "paper"
    } else {
        cpuDecision = "scissors"
    }

    return cpuDecision;
}

function getHumanChoice() {
    let humanChoice = prompt("Please input Rock, Paper, or Scissors:").toLowerCase();
    
    return humanChoice;
}
  
function playRound(human, computer) {
    if (human === "rock" && computer === "paper" ) {
        console.log("CPU Win! Paper beats Rock")
        computerScore++;
    } else if (human === "rock" && computer === "rock") {
        console.log("Tie Round!")
    } else if (human === "rock" && computer === "scissors") {
        console.log("Player Win! Rock beats Scissors")
        humanScore++;
    } else if (human === "paper" && computer === "rock") {
        console.log("Player Win! Paper beats Rock")
        humanScore++;
    } else if (human === "paper" && computer === "paper") {
        console.log("Tie Round!")
    } else if (human === "paper" && computer === "scissors") {
        console.log("CPU Win! Scissors beats Paper")
        computerScore++;
    } else if (human === "scissors" && computer === "rock") {
        console.log("CPU Win! Rock beats Scissors")
        computerScore++;
    } else if (human === "scissors" && computer === "scissors") {
        console.log("Tie Round!")
    } else if (human === "scissors" && computer === "paper") {
        console.log("Player Win! Scissors beats Paper")
        humanScore++;
    }
}

function playGame() {
        playRound(getHumanChoice(), getComputerChoice(),);
}

console.log(playGame());