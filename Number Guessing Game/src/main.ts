import { STATES, generateRandomNum } from "./utils.js";

// Input Field
const guessNumField: HTMLInputElement = document.getElementById('guess-number') as HTMLInputElement;

const submitBtn: HTMLButtonElement = document.getElementById('submit-btn') as HTMLButtonElement;

const problemBar: HTMLDivElement = document.querySelector('.problem') as HTMLDivElement;
const previousGuessBar: HTMLDivElement = document.querySelector('.previous-guesses-bar') as HTMLDivElement;

const correctStatusBox: HTMLDivElement = document.querySelector('.correct') as HTMLDivElement;
const incorrectStatusBox: HTMLDivElement = document.querySelector('.incorrect') as HTMLDivElement;
const outOfMovesStatusBox: HTMLDivElement = document.querySelector('.out-of-moves') as HTMLDivElement;

const statusBoxes: HTMLDivElement[] = [correctStatusBox, incorrectStatusBox, outOfMovesStatusBox];

const randomNum = generateRandomNum();

console.log(randomNum)

const hideBox: (box: HTMLDivElement) => void = box => {
    box.style.display = "none";
}

const showBox: (box: HTMLDivElement) => void = box => {
    box.style.display = "block";
}

const displayMessage: (message: string) => void = message => {
    problemBar.textContent = message;
}

const disableInputAndButton: () => void = () => {
    guessNumField.disabled = true;
    submitBtn.disabled = true;

    guessNumField.style.cursor = "not-allowed";
    submitBtn.style.cursor = "not-allowed";
}

const displayResult: (state: STATES) => void = state => {
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
}

const evaluateResponse: (randomNum: number, num: number) => void = (randomNum, num) => {
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

    displayResult(state as STATES);
}

const addToPreviousGuess: (num: number) => void = num => {
    previousGuessBar.innerHTML += `<span class = "num">${num}</span>`;
}

const clearInputAndFocus: () => void = () => {
    guessNumField.value = "";
    guessNumField.focus();
}

let numOfGuesses = 0;

submitBtn.addEventListener('click', (): void => {
    let inputNum = Number(guessNumField.value);

    if (inputNum > 99 || inputNum < 1) return;

    if (numOfGuesses < 10) {
        addToPreviousGuess(inputNum);

        evaluateResponse(randomNum!, inputNum);

        clearInputAndFocus();

        numOfGuesses++;
    }
    else {
        displayResult(STATES.OUT_OF_MOVES);

        disableInputAndButton();
    }
});