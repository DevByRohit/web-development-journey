let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector("#sbmt");
let userInput = document.querySelector("#guessInput");
let preGuess = document.querySelector(".preGuess");
let attemptRemain = document.querySelector(".attemptsRemaining");
let hiOrLow = document.querySelector(".HiOrLow");
let startOver = document.querySelector("body");

let div = document.createElement("div");

let previousGuess = [];
let numberOfGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let userGuessNumber = parseInt(userInput.value);
    validateGuess(userGuessNumber);
  });
}

function validateGuess(guess) {
  if (guess === "" || guess < 1 || guess > 100 || isNaN(guess)) {
    if (guess === "") {
      displayMessage("You did not enter a number.");
    } else if (guess < 1) {
      displayMessage("Number should be between 1 and 100.");
    } else if (guess > 100) {
      displayMessage("Number should be between 1 and 100.");
    } else if (isNaN(guess)) {
      displayMessage("Please enter a valid number.");
    }
  } else {
    previousGuess.push(guess);
    if (numberOfGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOOO high`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  preGuess.innerHTML += `${guess}, `;
  numberOfGuess++;
  attemptRemain.innerHTML = `${11 - numberOfGuess}`;
}
function displayMessage(message) {
  hiOrLow.innerHTML = `<h3>${message}</h3>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  div.classList.add("button");
  div.innerHTML = `<h2 id="newGame">New Game</h2>`;
  startOver.appendChild(div);
  playGame = false;
  newGame();
}
function newGame() {
  let newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numberOfGuess = 1;
    hiOrLow.innerHTML = "";
    preGuess.innerHTML = "";
    attemptRemain.innerHTML = `${11 - numberOfGuess}`;
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(div);
    playGame = true;
  });
}
