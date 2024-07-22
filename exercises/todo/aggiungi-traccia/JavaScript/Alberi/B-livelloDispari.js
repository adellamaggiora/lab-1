function livelloDispari(T) {
    if (T == undefined) return true
    return livelloDispari2(T, 0)
}

function livelloDispari2(T, livello) {
    if (T == undefined) return true
    if (livello % 2 == T.val % 2) return false
    return livelloDispari2(T.sx, livello + 1) && livelloDispari2(T.dx, livello + 1)
}