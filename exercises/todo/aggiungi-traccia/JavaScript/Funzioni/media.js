function media(arr, a, b) {
    if (a <= b && b < arr.length) {
        let somma = 0
        let numElementi = 0
        for (let i = a; i <= b; i++) {
            somma += arr[i]
            numElementi++
        }
        return somma / numElementi // Media
    }
    return undefined
}