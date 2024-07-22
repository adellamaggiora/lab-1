function vocali(s) {
    let res = {
        ant: 0,
        cent: 0,
        post: 0
    }
    let array = s.toUpperCase().split('') // Convertiamo la stringa in maiuscolo per gestire i casi senza distinzione tra maiuscolo e minuscolo
    for (let vocale of array) {
        if (vocale === 'E' || vocale === 'I') {
            res.ant++
        } else if (vocale === 'A') {
            res.cent++
        } else if (vocale === 'O' || vocale === 'U') {
            res.post++
        }
    }
    return res
}