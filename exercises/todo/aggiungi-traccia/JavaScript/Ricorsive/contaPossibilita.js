function contaPossibilita(n) {
    let poss = 0
    // If (n === 0) return poss
    for (let i = 0; i <= Math.floor(n/2); i++) {
        let n1x2 = i;
        let n1x1 = n - 2 * i
        poss += (fact(n-i) / (fact(n1x1) * fact(n1x2))) * Math.pow(3, n1x2) * Math.pow(2, n1x1)
    }
    return poss
}

function fact(n) {
    let r = 1
    for (let i = 0; i < n; i++) {
        r *= (n-i)
    }
    return r
}