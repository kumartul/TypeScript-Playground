"use strict";
const button = document.querySelector('button');
const generateRandomHexColor = () => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()}`;
button.addEventListener('click', () => {
    document.body.style.backgroundColor = generateRandomHexColor();
});
