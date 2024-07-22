class NonIntegerError extends Error {}
class OutOfRangeError extends Error {}

function bcd(n) {
    // Verifica se n è un numero intero
    if (!Number.isInteger(n)) throw new NonIntegerError("Input deve essere un numero intero.")
    // Verifica se n è compreso tra 0 e 99
    if (n < 0 || n > 99) throw new OutOfRangeError("Input deve essere compreso tra 0 e 99.")
    // Ottieni le cifre delle decine e delle unità
    let decine = Math.floor(n / 10)
    let unita = n % 10
    // Converti le cifre in binario con 4 bit ciascuna
    let decineBin = decine.toString(2).padStart(4, '0')
    let unitaBin = unita.toString(2).padStart(4, '0')
    // Concatenare le stringhe binarie e convertirle in un array di bit
    let bcdString = decineBin + unitaBin
    let bcdArray = Array.from(bcdString, bit => parseInt(bit, 2))
    return bcdArray
}