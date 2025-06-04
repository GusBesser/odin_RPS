console.log("Hello and welcome to the game!");

let playerScore = 0
let computerScore = 0

function getPlayerChoice() {
    choice = prompt('Before Starting the Game, please open the Developer Console!\n(Press Ctrl + Shift + C)\n\nType "Rock", "Paper" or "Scissors" in the box below!: ')
    return choice
}

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

function playRound(playerSelection, computerSelection) {
    
    let playerChoice = playerSelection
    let computerChoice = computerSelection
    
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a tie! we both chose Rock.")
        }
        if (computerChoice === "paper") {
            console.log("I Win! Paper covers Rock.")
            computerScore = computerScore + 1
            return computerScore
        }
        if (computerChoice === "scissors") {
            console.log("You Win! Rock breaks Scissors.")
            playerScore = playerScore + 1
            return playerScore
        }
    }

    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You Win! Paper covers Rock.")
            playerScore = playerScore + 1
            return playerScore
        }
        if (computerChoice === "paper") {
            console.log("It's a tie! we both chose Paper.")
        }
        if (computerChoice === "scissors") {
            console.log("I win! Scissors cut Paper.")
            computerScore = computerScore + 1
            return computerScore
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("I Win! Rock breaks Scissors.")
            computerScore = computerScore + 1
            return computerScore
        }
        if (computerChoice === "paper") {
            console.log("You Win! Scissors cut Paper.")
            playerScore = playerScore + 1
            return playerScore
        }
        if (computerChoice === "scissors") {
            console.log("It's a tie! we both chose Scissors.")
        }
    }
}

function playGame() {
    
    playerScore = 0
    computerScore = 0

    for (let round = 0; round < 5; round++) {

        let playerChoice = getPlayerChoice().toLowerCase()
        let computerChoice = getComputerChoice()

        console.log(playerChoice);
        console.log(computerChoice);
        playRound(playerChoice, computerChoice)

        if (playerScore >= 3) {
            console.log("You win the game!")
            break
        }

        if (computerScore >= 3) {
            console.log("I, the computer! Win the Game!")
            break
        }

        else if (round === 4) {
            if (playerScore > computerScore) {
                console.log("\nYou win the game!")
            }
            if (playerScore < computerScore) {
                console.log("\nI, the computer! Win the Game!")
            }
            if (playerScore === computerScore)
                console.log("\nIt's a tie! no one wins the game!")
        }
    }
}

playGame()
