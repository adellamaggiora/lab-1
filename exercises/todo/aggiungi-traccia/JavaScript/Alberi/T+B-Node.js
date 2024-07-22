class BadTreeError extends Error {}
class TNode {
    constructor(valore, etichetta = "") {
        this.valore = valore
        this.etichetta = etichetta
        this.figli = []
    }
    add(...args) {
        this.figli.push(...args)
    }
    * visit() {
        yield this.valore;
        for (let figlio of this.figli) {
            yield* figlio.visit()
        }
    }
}
class BNode extends TNode {
    add(...args) {
        if (this.figli.length + args.length > 2) {
            throw new BadTreeError("Cannot add more than two children to a BNode")
        }
        this.figli.push(...args)
    }
}