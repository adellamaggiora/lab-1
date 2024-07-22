function livelloPari(T) {
    if (T == undefined) return true
    return livelloPari2(T, 0)
}

function livelloPari2(T, livello) {
    if (T == undefined) return true
    if (livello % 2 != T.val % 2) return false
    return livelloPari2(T.sx, livello + 1) && livelloPari2(T.dx, livello + 1)
}