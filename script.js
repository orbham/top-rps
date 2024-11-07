function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function getHumanChoice(player, computer) {
    return (
            (player === "Rock" && computer === "Scissors") ||
            (player === "Scissors" && computer === "Paper")||
            (player === "Paper" && computer === "Rock")
        );
}

getHumanChoice();