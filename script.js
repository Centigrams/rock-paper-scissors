let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let selection = ["rock", "paper", "scissors"];
    return selection[Math.floor(Math.random() * selection.length)];
}

function playerPlay() {
    let playerPick = prompt("Rock, Paper, or Scissors?");
    return playerPick.toLowerCase();
}


function game() {

    function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection) {
            console.log("Tie!");
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            console.log(`You won, ${playerSelection} beats ${computerSelection}.`);
            playerScore++;
        } else if (
            (playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors")
        ) {
            console.log(`You lost, ${playerSelection} beats ${computerSelection}.`);
            computerScore++;
        }
    }

    while (playerScore <= 5 || computerScore <= 5) {
        playRound(playerPlay(),computerPlay());
        if (playerScore === 5) {
            alert("Congratulations, You Won!");
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            alert("Yikes, better luck next time.");
            playerScore = 0;
            computerScore = 0;
        }
    }
}

game()
