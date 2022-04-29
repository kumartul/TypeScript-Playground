import Counter from './Counter.js';
import CounterView from './CounterView.js';
import LocalStorage from './LocalStorage.js';

const counterLocalStorge: LocalStorage = new LocalStorage();
const counter: Counter = new Counter(counterLocalStorge.count);
const counterView: CounterView = new CounterView(counter);

counterLocalStorge.update(counter);

const display = document.querySelector('.display')! as HTMLDivElement;
const addBtn = document.querySelector('.btn-add')! as HTMLButtonElement;
const subtractBtn = document.querySelector('.btn-subtract')! as HTMLButtonElement;
const resetBtn = document.querySelector('.btn-reset')! as HTMLButtonElement;

counterView.update(display);

const updateState: () => void = () => {
    counterView.update(display);
    counterLocalStorge.update(counter);
}

addBtn.addEventListener('click', (): void => {
    counter.add();

    updateState();
});

resetBtn.addEventListener('click', (): void => {
    counter.reset();

    updateState();
});

subtractBtn.addEventListener('click', (): void => {
    counter.subtract();
    
    updateState();
});
