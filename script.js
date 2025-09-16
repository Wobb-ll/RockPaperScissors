let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;

    let cpuDecision;

    if (cpuChoice === 1) {
        cpuDecision = "Rock"
    } else if (cpuChoice === 2) {
        cpuDecision = "Paper"
    } else {
        cpuDecision = "Scissors"
    }

    return cpuDecision;
}

function getHumanChoice() {
    let humanChoice = prompt("Please input Rock, Paper, or Scissors:")
    
    let humanDecision;

    if (humanChoice === "Rock") {
        humanDecision = "Rock"
    } else if (humanChoice === "Paper"){
        humanDecision = "Paper"
    } else {
        humanDecision = "Scissors"
    }

    return humanDecision;
}
  