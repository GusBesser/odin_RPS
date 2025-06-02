console.log("Hello World!");

let playerScore = 0
let computerScore = 0

function getComputerChoice() {

    choice = Math.floor(Math.random() * 3 + 1)
    
    if (choice === 1) {
        return "rock"
    }
    if (choice === 2) {
        return "paper"
    }
    if (choice === 3) {
        return "scissors"
    }
}

function getPlayerChoice() {
    choice = prompt('Type "Rock", "Paper" or "Scissors": ')
    return choice
}

function playRound(playerSelection, computerSelection) {

    playerChoice = playerSelection
    computerChoice = computerSelection
    
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a tie! we both chose Rock.")
        }
        if (computerChoice === "paper") {
            console.log("I Win! Paper covers Rock.")
            computerScore = computerScore++
            return computerScore
        }
        if (computerChoice === "scissors") {
            console.log("You Win! Rock breaks Scissors.")
            playerScore = playerScore++
            return playerScore
        }
    }

    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You Win! Paper covers Rock.")
            playerScore = playerScore++
            return playerScore
        }
        if (computerChoice === "paper") {
            console.log("It's a tie! we both chose Paper.")
        }
        if (computerChoice === "scissors") {
            console.log("I win! Scissors cut Paper.")
            computerScore = computerScore++
            return computerScore
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("I Win! Rock breaks Scissors.")
            computerScore = computerScore++
            return computerScore
        }
        if (computerChoice === "paper") {
            console.log("You Win! Scissors cut Paper.")
            playerScore = playerScore++
            return playerScore
        }
        if (computerChoice === "scissors") {
            console.log("It's a tie! we both chose Scissors.")
        }
    }
}

let playerChoice = getPlayerChoice().toLowerCase()
let computerChoice = getComputerChoice()

console.log(playerChoice);
console.log(computerChoice);

round = playRound(playerChoice, computerChoice)
console.log(round)
