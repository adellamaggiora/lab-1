class AlberoInvalido extends Error {}
class NodoBinT < T > {
    val: T
    children: NodoBinT < T > []
    label: string
    constructor(val: T, label: string = "") {
        this.val = val
        this.label = label
        this.children = []
    }
    add(...args: NodoBinT < T > []) {
        if (this.children.length + args.length > 2) {
            throw new AlberoInvalido("Cannot add more than two children to a BNodeT")
        }
        this.children.push(...args)
    }
    *visit(): IterableIterator < T > {
        yield this.val
        for (let figlio of this.children) {
            yield* figlio.visit()
        }
    }
}