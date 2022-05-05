import { STATES, generateRandomNum } from "./utils.js";
const guessNumField = document.getElementById('guess-number');
const submitBtn = document.getElementById('submit-btn');
const problemBar = document.querySelector('.problem');
const previousGuessBar = document.querySelector('.previous-guesses-bar');
const correctStatusBox = document.querySelector('.correct');
const incorrectStatusBox = document.querySelector('.incorrect');
const outOfMovesStatusBox = document.querySelector('.out-of-moves');
const statusBoxes = [correctStatusBox, incorrectStatusBox, outOfMovesStatusBox];
const randomNum = generateRandomNum();
const hideBox = box => {
    box.style.display = "none";
};
const showBox = box => {
    box.style.display = "block";
};
const displayMessage = message => {
    problemBar.textContent = message;
};
const disableInputAndButton = () => {
    guessNumField.disabled = true;
    submitBtn.disabled = true;
    guessNumField.style.cursor = "not-allowed";
    submitBtn.style.cursor = "not-allowed";
};
const displayResult = state => {
    statusBoxes.forEach(statusBox => hideBox(statusBox));
    if (state === STATES.WIN) {
        showBox(correctStatusBox);
        displayMessage("Congratulations! You guessed it right...");
        disableInputAndButton();
    }
    else if (state === STATES.HIGH) {
        showBox(incorrectStatusBox);
        displayMessage("Last guess was too high!");
    }
    else if (state === STATES.LOW) {
        showBox(incorrectStatusBox);
        displayMessage("Last guess was too low!");
    }
    else if (state === STATES.OUT_OF_MOVES) {
        showBox(outOfMovesStatusBox);
        displayMessage("Out Of Moves!");
    }
};
const evaluateResponse = (randomNum, num) => {
    let state;
    if (randomNum > num) {
        state = STATES.LOW;
    }
    if (randomNum < num) {
        state = STATES.HIGH;
    }
    if (randomNum === num) {
        state = STATES.WIN;
    }
    displayResult(state);
};
const addToPreviousGuess = num => {
    previousGuessBar.innerHTML += `<span class = "num">${num}</span>`;
};
const clearInputAndFocus = () => {
    guessNumField.value = "";
    guessNumField.focus();
};
let numOfGuesses = 0;
submitBtn.addEventListener('click', () => {
    let inputNum = Number(guessNumField.value);
    if (inputNum > 99 || inputNum < 1)
        return;
    if (numOfGuesses < 10) {
        addToPreviousGuess(inputNum);
        evaluateResponse(randomNum, inputNum);
        clearInputAndFocus();
        numOfGuesses++;
    }
    else {
        displayResult(STATES.OUT_OF_MOVES);
        disableInputAndButton();
    }
});
