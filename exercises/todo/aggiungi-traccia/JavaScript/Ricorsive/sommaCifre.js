function sommaCifreItera(v) { // Iterativa
    let cifre = v.toString().split('').map(Number)
    let res = 0
    for (let cifra of cifre) {
        res += cifra
    }
    return res
}

function sommaCifreRicorsiva(v) { // Ricorsiva
    if (v == 0) return 0
    return v % 10 + sommaCifre(Math.floor(v / 10))
}