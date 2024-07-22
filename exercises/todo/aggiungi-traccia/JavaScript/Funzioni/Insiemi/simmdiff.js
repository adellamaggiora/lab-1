function simmdiff(a, b) {
    let c = {}
    let max = -Infinity
    // Trova gli elementi che sono solo in `a` e aggiungili a c
    for (let key in a) {
        if (!(key in b)) {
            c[key] = 1
            max = Math.max(Number(key), max)
        }
    }
    // Trova gli elementi che sono solo in `b` e aggiungili a c
    for (let key in b) {
        if (!(key in a)) {
            c[key] = 1
            max = Math.max(Number(key), max);
        }
    }
    // Rimuove il massimo da `c`
    delete c[max]
    // Aggiunge il doppio del massimo a `c`
    c[max * 2] = 1
    return c
}