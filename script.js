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
    if (human )
}
