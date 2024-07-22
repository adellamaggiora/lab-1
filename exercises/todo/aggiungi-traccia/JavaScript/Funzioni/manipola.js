function manipola(arr, f, a, n) {
    let sottoarray = arr
    for (let i = 0; i < n; i++) {
        sottoarray = sottoarray.map(a)
        sottoarray = sottoarray.filter(f)
    }
    return sottoarray
}

/*
function manipola(arr, f, a, n) { // Versione alternativa
    let sottoarray = arr
    for (let i = 0; i < n; i++) {
        sottoarray = sottoarray.filter(f)
        sottoarray = sottoarray.map(a)
    }
    return sottoarray
}
*/