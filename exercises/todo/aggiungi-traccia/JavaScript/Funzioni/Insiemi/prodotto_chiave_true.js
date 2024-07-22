function prodotto(A, B) {
    if (A == undefined || B == undefined) {
        return {}
    }
    let prod = {}
    for (let a in A)
        for (let b in B) prod[a + b] = true
    return prod
}