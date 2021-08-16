let playerScore = 0;
let computerScore = 0;
const message = document.querySelector('#message');
const choices = document.querySelectorAll('.choice');

const disableChoices = () => {
  /* The first version uses the value attribute of the buttons
    to pass the playerSelection parameter. Here, the alt attribute from
    the images can be used as a parameter. */
  choices.forEach((choice) => {
    const playerChoice = choice;
    playerChoice.alt = null;
  });
};

const enableChoices = () => {
  /* Since disableChoices() nulls the alt attribute, enableChoices()
    reverts the attribute to make the game restart. */
  choices.forEach((choice) => {
    const gameChoice = choice;
    if (choice.id === 'rock') gameChoice.alt = 'rock';
    if (choice.id === 'paper') gameChoice.alt = 'paper';
    if (choice.id === 'scissors') gameChoice.alt = 'scissors';
  });
};

const reset = () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
  enableChoices();
};

const resetButtonActivate = () => {
  let buttonMessage;
  if (playerScore === 5) {
    buttonMessage = 'Victory!';
  } else if (computerScore === 5) {
    buttonMessage = 'Defeat!';
  }
  const resetButton = document.createElement('button');
  resetButton.setAttribute('class', 'reset-button');
  resetButton.textContent = `${buttonMessage} Click here to restart.`;
  message.appendChild(resetButton);
  resetButton.addEventListener('click', reset);
};

const computerPlay = () => {
  const selection = ['rock', 'paper', 'scissors'];
  return selection[Math.floor(Math.random() * selection.length)];
};

const playRound = (playerSelection) => {
  const computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    message.textContent = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    message.textContent = `You won, ${playerSelection} beats ${computerSelection}.`;
    playerScore += 1;

    if (playerScore === 5) {
      disableChoices();
      resetButtonActivate();
    }
  } else if (
    (playerSelection === 'scissors' && computerSelection === 'rock')
        || (playerSelection === 'rock' && computerSelection === 'paper')
        || (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    message.textContent = `You lost, ${playerSelection} beats ${computerSelection}.`;
    computerScore += 1;

    if (computerScore === 5) {
      disableChoices();
      resetButtonActivate();
    }
  }
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
};

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    playRound(choice.alt);
  });
});
