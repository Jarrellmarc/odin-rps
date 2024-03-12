//Return the computers choice of rock, paper, scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice == 1) {
        return "rock"
    }
    else if (choice == 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

//Input for player selection
function getPlayerChoice() {
     choice = prompt("Player's choice: ");
     return choice.toLowerCase()
}

//Compare computer vs player and determine winner
function playRound(computerSelection, playerSelection) {
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You Lose! Rock beats Scissors"
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return  "You Win! Paper beats Rock"
    }
    else if (computerSelection == "rock" && playerSelection == "rock") {
        return "Tie! Rock cannot beat itself"
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You Win! Rock beats Scissors"
    }
    else if (computerSelection == "scissors" && playerSelection == "scissors") {
        return "Tie! Scissors cannot beat scissors"
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You Lose! Scissors beats paper"
    }
    else if (computerSelection == "paper" && playerSelection == "paper") {
        return "Tie! Paper cannot beat paper"
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You Lose! Paper beats rock"
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "You Win! Scissors beats paper"
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let win = "Win";
    let lose = "Lose";
    let tie = "Tie";
    for (i = 0; i < 5; i++) {
        const playerSelect = getPlayerChoice();
        const computerSelect = getComputerChoice();
        let result = playRound(computerSelect, playerSelect);
        console.log(result)
            if (result.includes(win) == true) {
                playerScore += 1;
            }
            else if (result.includes(lose)== true) {
                computerScore += 1;
            }
    }
    return "Player: " + playerScore + " Computer: " + computerScore 
}

console.log(playGame());