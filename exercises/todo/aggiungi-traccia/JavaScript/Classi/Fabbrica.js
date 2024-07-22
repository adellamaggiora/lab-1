class IllegalOptionsError extends Error {}
class Fabbrica {
    static #nFabbriche = 0
    #prodotto = {}
    #nProdotti = 0
    constructor(prodotto) {
        this.#prodotto = prodotto
        Fabbrica.#nFabbriche++
    }
    get nFabbriche() {
        return Fabbrica.#nFabbriche
    }
    get nProdotti() {
        return this.#nProdotti
    }
    produci(opzioni = {}) {
        for (var k in opzioni) {
            if (k in this.#prodotto && opzioni[k] != this.#prodotto[k]) {
                throw new IllegalOptionsError()
            }
        }
        this.#nProdotti++
        return {
            ...this.#prodotto,
            ...opzioni
        }
    }
}