//array with strings for the options of games.
const options = ["rock", "paper", "scissors"];

//logic for random computer choice using math.floor and math.random.
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

//logic for human choice using while loop, prompt and alert method, and if/else statement.
function getHumanChoice() {
    let userInput;

    while(true) {
        userInput = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
        if (options.includes(userInput)) {
            break;
        } else {
            alert("Invalid choice. Choose Rock, Paper, or Scissors!");
        }
    }
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

//function to play single round using humanChoice/computerChoice as args, also used if/else if/else.
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
        computerScore++;
        console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);
    }
    console.log(`Scoreboard - You: ${humanScore} / Computer: ${computerScore}`);
}

//play game using for loop and if/else if/else
function playGame() {
    for (let i=1; i<6; i++) {
        console.log(`\nRound ${i}:`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    console.log("\nFinal Scores:");
    console.log(`You: ${humanScore} / Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
