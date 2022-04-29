import Counter from './Counter.js';

class LocalStorage {
    private readonly key: string = 'count';
    public count: number;

    constructor() {
        const _count = this.getCount();
        this.count = _count;
    }

    private getCount(): number {
        const _count = localStorage.getItem(this.key);
        return Number(_count);
    }

    update(counter: Counter): void {
        this.count = counter.count;
        localStorage.setItem(this.key, this.count.toString());
    }
}

export default LocalStorage;