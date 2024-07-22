class OrdSet < T > {
    public cmp
    private a: T[] = [];
    constructor(cmp: (a: T, b: T) => number) {
        this.cmp = cmp
    }
    add(e: T): void {
        let find: boolean = false;
        for (let i: number = 0; i < this.a.length; i++) {
            if (this.cmp(this.a[i], e) == 0) {
                find = true
                break
            }
        }
        if (!find) this.a.push(e);
    }
    remove(e: T): void {
        let index: number = 0
        for (let i: number = 0; i < this.a.length; i++) {
            if (this.cmp(this.a[i], e) == 0) {
                index = i
                break
            }
        }
        this.a.splice(index, 1)
    }
    list(): T[] {
        return this.a.sort(this.cmp)
    }
}