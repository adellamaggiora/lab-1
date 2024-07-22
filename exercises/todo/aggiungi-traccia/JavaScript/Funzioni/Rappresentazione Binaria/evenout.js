function evenout(n) {
    // Ottieni la rappresentazione binaria di n come stringa
    let b = n.toString(2)
    // Conta il numero di '1' in b
    let ones = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === '1') {
            ones++
        }
    }
    // Aggiungi '0' o '1' alla fine di b in base al numero di '1'
    if (ones % 2 === 0) {
        b += '0'
    } else {
        b += '1'
    }
    // Converti la stringa binaria modificata di nuovo in numero decimale
    let m = parseInt(b, 2)
    return m
}