class LocalStorage {
    constructor() {
        this.key = 'count';
        const _count = this.getCount();
        this.count = _count;
    }
    getCount() {
        const _count = localStorage.getItem(this.key);
        return Number(_count);
    }
    update(counter) {
        this.count = counter.count;
        localStorage.setItem(this.key, this.count.toString());
    }
}
export default LocalStorage;
