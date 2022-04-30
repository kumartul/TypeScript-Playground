const button: HTMLButtonElement = document.querySelector('button')! as HTMLButtonElement;

const generateRandomHexColor: () => string = () => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()}`;

button.addEventListener('click', () => {
    document.body.style.backgroundColor = generateRandomHexColor();
});