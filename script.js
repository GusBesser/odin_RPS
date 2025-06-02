console.log("Hello World!");

function getComputerChoice() {

    choice = Math.floor(Math.random() * 3 + 1)

    if (choice === 1) {
        return "Rock"
    }
    if (choice === 2) {
        return "Paper"
    }
    if (choice === 3) {
        return "Scissor"
    }
}

function getPlayerChoice() {
    choice = prompt('Type "Rock", "Paper" or "Scissors": ')
    return choice
}

console.log(playerChoice);
console.log(computerChoice);

