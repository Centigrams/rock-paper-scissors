let playerScore = 0;
let computerScore = 0;
const message = document.querySelector('#message');
const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', function () {
        playRound(choice.value);
    });
});

function disableChoices() {
    choices.forEach(choice => {
        choice.disabled = true;
    });
}

function reset() {
    window.location.reload();
}

function computerPlay() {
    let selection = ["rock", "paper", "scissors"];
    return selection[Math.floor(Math.random() * selection.length)];
}

function playRound(playerSelection) {

    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        message.textContent = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        message.textContent = `You won, ${playerSelection} beats ${computerSelection}.`;
        playerScore++;

        if (playerScore === 5) {
            disableChoices();
            message.textContent = "Victory!";
        }
    } else if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        message.textContent = `You lost, ${playerSelection} beats ${computerSelection}.`;
        computerScore++;

        if (computerScore === 5) {
            disableChoices();
            message.textContent = "Defeat!";
        }
    }
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}