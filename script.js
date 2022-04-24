// establish variables to call HTML elements we created by Id. 
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
// establish variables that we will modify later in the code.
let userChoice;
let computerChoice;
let result;


// 'e' for event, 'click' to call for a click, 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice()
  getResult()
}))


//This function ensures the computer is choosing a random choice, based on our choices array, and that that choice is then displayed to the screen.
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'Scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'Paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}


//This function checks our game-winning, or losing conditions, and prints the result to our user's screen. 
function getResult() {
  //With the following if-statements, we are checking to see if these various scenarios occurs to produce our result. 
  if (computerChoice === userChoice) {
    result = "It's a Tie!"
  }
  if (computerChoice === 'Rock' && userChoice === "Paper") {
    result = "You win!"
  }
  if (computerChoice === 'Paper' && userChoice === "Scissors") {
    result = "You win!"
  }
  if (computerChoice === 'Scissors' && userChoice === "Rock") {
    result = "You win!"
  }
  if (computerChoice === 'Rock' && userChoice === "Scissors") {
    result = "You Lost! Try Again."
  }
  if (computerChoice === 'Scissors' && userChoice === "Paper") {
    result = "You Lost! Try Again."
  }
  if (computerChoice === 'Paper' && userChoice === "Rock") {
    result = "You Lost! Try Again."
  }  
  resultDisplay.innerHTML = result;
}


