class Counter {
    constructor(count) {
        this.count = count;
    }
    add() {
        this.count++;
    }
    subtract() {
        this.count--;
    }
    reset() {
        this.count = 0;
    }
}
export default Counter;
