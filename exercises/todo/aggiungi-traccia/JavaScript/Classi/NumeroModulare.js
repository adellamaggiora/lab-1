class BadOpError extends Error {}
class NumeroModulare {
    constructor(v, m) {
        this.v = v % m
        this.m = m
    }
    add(n) {
        if (n.m == this.m) return new NumeroModulare(this.v + n.v, this.m)
        else throw new BadOpError
    }
    equal(n) {
        return this.v == n.v && this.m == n.m
    }
    toString() {
        return "[" + this.v.toString() + "%" + this.m.toString() + "]"
    }
}