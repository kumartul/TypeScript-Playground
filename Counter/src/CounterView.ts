import Counter from './Counter.js';

import DisplayClasses from './utils.js';

class CounterView {
    private readonly counter: Counter;

    constructor(counter: Counter) {
        this.counter = counter;
    }

    update(display: HTMLDivElement) {
        const count: number = this.counter.count;

        display.innerText = count.toString();

        if(count === 0) {
            display.classList.add(DisplayClasses.ZERO);
            display.classList.remove(DisplayClasses.POSITIVE);
            display.classList.remove(DisplayClasses.NEGATIVE);
        }
        else if(count > 0) {
            display.classList.remove(DisplayClasses.ZERO);
            display.classList.add(DisplayClasses.POSITIVE);
            display.classList.remove(DisplayClasses.NEGATIVE);
        }
        else {
            display.classList.remove(DisplayClasses.ZERO);
            display.classList.remove(DisplayClasses.POSITIVE);
            display.classList.add(DisplayClasses.NEGATIVE);
        }
    }
}

export default CounterView;