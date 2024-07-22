function pesoMol(n) {
    let peso = 0
    while (n >= 10) {
        n = n.toString().split('').map(Number).reduce((a, b) => a * b)
        peso++
    }
    return peso
}