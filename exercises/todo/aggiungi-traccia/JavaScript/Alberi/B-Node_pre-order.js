class BadTreeError extends Error {}
class BNode {
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
    }
    *visit() {
        yield this.val;
        for (let figlio of this.children) {
            yield* figlio.visit()
        }
    }
}