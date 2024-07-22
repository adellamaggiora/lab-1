function replace_filter_f(f, g) {
    return function res(a) {
        let b = []
        for (let element of a) {
            // Applica la funzione f su ogni elemento di a e memorizza il risultato in b
            b.push(f(element))
        }
        let c = []
        for (let element of b) {
            // Filtra b usando la funzione g
            if (!g(element)) {
                c.push(element)
            }
        }
        return c
    }
}

/*
function replace_filter_f(f, g) { // Non rispetta la consegna effettiva di non usare le librerie map e filter
    return function(a) {
        let b = a.map(f) // Applica la funzione f su ogni elemento di a
        let c = b.filter(x => g(x) == false) // Filtra b usando la funzione g
        return c // Restituisce l'array filtrato
    }
} 
*/