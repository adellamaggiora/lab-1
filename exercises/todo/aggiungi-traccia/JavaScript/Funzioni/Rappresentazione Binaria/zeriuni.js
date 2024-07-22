class NonIntegerError extends Error {}
class OutOfRangeError extends Error {}

function zeriuni(n) {
    // Controlla se n è un numero intero
    if (!Number.isInteger(n)) throw new NonIntegerError()
    // Controlla se n è nel range da 0 a 255
    if (n < 0 || n > 255) throw new OutOfRangeError()
    // Ottieni la rappresentazione binaria di n come stringa
    let binaryString = n.toString(2);
    // Pad la stringa binaria con zeri all'inizio fino a ottenere una lunghezza di 8 caratteri
    binaryString = binaryString.padStart(8, '0');
    // Converte la stringa binaria in un array di bit
    let bits = Array.from(binaryString, bit => parseInt(bit, 2));
    // Inutile, serve solo a convertire in numeri, perché è già in base 2
    // (binaryString, bit => bit === '1' ? 1 : 0)
    return bits
}