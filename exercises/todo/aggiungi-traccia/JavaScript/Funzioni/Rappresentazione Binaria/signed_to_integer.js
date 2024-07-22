function signed_to_integer(arr) {
    if (arr.length < 2) return undefined;
    // Converti l'array di bit in una stringa binaria
    let binaryString = arr.join('')
    // Verifica il segno
    let isNegative = binaryString[0] === '1'
    // Se il numero è negativo, calcola il valore in complemento a due
    if (isNegative) {
        // Calcola il valore in complemento a due negativo
        let complementValue = parseInt(binaryString, 2) - Math.pow(2, arr.length)
        return complementValue
    } else {
        // Se il numero è positivo, converti direttamente in base 10
        return parseInt(binaryString, 2)
    }
}