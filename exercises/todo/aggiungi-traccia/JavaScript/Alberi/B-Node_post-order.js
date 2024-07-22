class BadTreeError extends Error {}
class BNodePost {
    constructor(val, label = "") {
        this.val = val
        this.label = label
        this.children = []
    }
    add(...args) {
        if (this.children.length + args.length > 2) {
            throw new BadTreeError("Cannot add more than two children to a BNode")
        }
        this.children.push(...args)
    }* visit() {
        for (var c of this.children) {
            for (var v of c.visit()) yield v
        }
        yield this.val
    }
}