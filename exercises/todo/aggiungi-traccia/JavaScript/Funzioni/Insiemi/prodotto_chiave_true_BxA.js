function prodotto(A, B) {
    if (A == undefined || B == undefined) {
        return {}
    }
    let prod = {}
    for (let b in B)
        for (let a in A) prod[b + a] = true
    return prod
}