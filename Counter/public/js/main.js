import Counter from './Counter.js';
import CounterView from './CounterView.js';
import LocalStorage from './LocalStorage.js';
const counterLocalStorge = new LocalStorage();
const counter = new Counter(counterLocalStorge.count);
const counterView = new CounterView(counter);
counterLocalStorge.update(counter);
const display = document.querySelector('.display');
const addBtn = document.querySelector('.btn-add');
const subtractBtn = document.querySelector('.btn-subtract');
const resetBtn = document.querySelector('.btn-reset');
counterView.update(display);
const updateState = () => {
    counterView.update(display);
    counterLocalStorge.update(counter);
};
addBtn.addEventListener('click', () => {
    counter.add();
    updateState();
});
resetBtn.addEventListener('click', () => {
    counter.reset();
    updateState();
});
subtractBtn.addEventListener('click', () => {
    counter.subtract();
    updateState();
});
