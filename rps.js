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

//Compare computer vs player and determine winner
function playRound(computerSelection, playerSelection) {
    if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore += 1;
        return "You Lose! Rock beats Scissors"
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore += 1;
        return  "You Win! Paper beats Rock"
    }
    else if (computerSelection == "rock" && playerSelection == "rock") {
        return "Tie! Rock cannot beat itself"
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        playerScore += 1;
        return "You Win! Rock beats Scissors"
    }
    else if (computerSelection == "scissors" && playerSelection == "scissors") {
        return "Tie! Scissors cannot beat scissors"
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore += 1;
        return "You Lose! Scissors beats paper"
    }
    else if (computerSelection == "paper" && playerSelection == "paper") {
        return "Tie! Paper cannot beat paper"
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore += 1;
        return "You Lose! Paper beats rock"
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        playerScore += 1;
        return "You Win! Scissors beats paper"
    }
}

//Get players choice
function playerChoice(id) {
    if (id == 'rock') {
       newResult.textContent = playRound(getComputerChoice(), "rock");
       resultsDiv.appendChild(newResult);
       newScore.textContent = "Player Score: " + playerScore + " Computer  Score: " + computerScore;
       newResult.appendChild(newScore);
    } else if (id == 'paper') {
        newResult.textContent = playRound(getComputerChoice(), "paper");
        resultsDiv.appendChild(newResult);
        newScore.textContent = "Player Score: " + playerScore + " Computer  Score: " + computerScore;
        newResult.appendChild(newScore);
    } else if (id == 'scissors') {
        newResult.textContent = playRound(getComputerChoice(), "scissors");
        resultsDiv.appendChild(newResult);
        newScore.textContent = "Player Score: " + playerScore + " Computer  Score: " + computerScore;
        newResult.appendChild(newScore);
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultsDiv = document.querySelector(".results");
const newResult = document.createElement("p");
const newScore = document.createElement("p");
const finalScore = document.createElement("p");
let playerScore = 0;
let computerScore = 0;

if ((playerScore != 5) && (computerScore != 5)) {
    rock.addEventListener('click', () => {
        playerChoice('rock');
    });
    paper.addEventListener('click', () => {
        playerChoice('paper');
    });
    scissors.addEventListener('click', () => {
        playerChoice('scissors');
    });
} else if (playerScore == 5) {
    finalScore.textContent =  "Player Wins!";
    resultsDiv.appendChild(finalScore);
    playerScore =  0;
    computerScore = 0;
} else if (computerScore == 5) {
    finalScore.textContent =  "Computer Wins!";
    resultsDiv.appendChild(finalScore);
    playerScore =  0;
    computerScore = 0;
}