class Counter {
    public count: number;

    constructor(count: number) {
        this.count = count;
    }

    add(): void {
        this.count++;
    }

    subtract(): void {
        this.count--;
    }

    reset(): void {
        this.count = 0;
    }
}

export default Counter;