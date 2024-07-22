function replace_first(arr, target, replacement, max_rep) {
    let res = arr.slice() // Crea una copia dell'array originale
    let count = 0 // Conta quante sostituzioni sono state fatte
    for (let i = 0; i < res.length; i++) {
        if (res[i] === target) {
            res[i] = replacement
            count++
            if (count === max_rep) {
                break // Interrompe il ciclo se ha raggiunto il numero massimo di sostituzioni
            }
        }
    }
    return res
}