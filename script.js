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

console.log(getComputerChoice());