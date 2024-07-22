function ordina(a) {
    let res = []
    for (let numero of a) {
        if (!res.includes(numero)) {
            res.push(numero)
        }
    }
    res.sort((a, b) => a - b)
    return res
}