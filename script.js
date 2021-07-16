let playerScore = 0;
let computerScore = 0;
const message = document.querySelector('#message');
const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', function () {
        playRound(choice.alt);
    });
});

function disableChoices() {
    /* The first version uses the value attribute of the buttons
    to pass the playerSelection parameter. Here, the alt attribute from 
    the images can be used as a parameter. */
    choices.forEach(choice => {
        choice.alt = null;
    });
}

function enableChoices() {
    /* Since disableChoices() nulls the alt attribute, enableChoices()
    reverts the attribute to make the game restart.*/
    choices.forEach(choice => {
        if (choice.id === "rock") choice.alt = 'rock';
        if (choice.id === "paper") choice.alt = 'paper';
        if (choice.id === "scissors") choice.alt = 'scissors';
    });
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    enableChoices();
}

function resetButtonActivate() {
    let buttonMessage;
    if (playerScore === 5) {
        buttonMessage = 'Victory!'
    } else if (computerScore === 5) {
        buttonMessage = 'Defeat!'
    }
    const resetButton = document.createElement('button');
    resetButton.setAttribute('class', 'reset-button')
    resetButton.textContent = `${buttonMessage} Click here to restart.`;
    message.appendChild(resetButton);
    resetButton.addEventListener('click', reset);
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
            resetButtonActivate();
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
            resetButtonActivate();
        }
    }
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}