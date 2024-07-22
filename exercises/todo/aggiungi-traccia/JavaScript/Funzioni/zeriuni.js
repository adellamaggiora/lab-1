class NonIntegerError extends Error {}
class OutOfRangeError extends Error {}

function zeriuni(n) {
    if (String(n).includes(".")) throw new NonIntegerError()
    if (n < 0 || n > 255) throw new OutOfRangeError()
    let bits = []
    let resto = n
    for (let i = 0; i < 8; i++) {
        let div = 2 ** (7 - i)
        bits[i] = (resto - (resto % div)) / div
        resto = resto % div
    }
    return bits
}