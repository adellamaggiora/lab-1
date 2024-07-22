class UnsuitableNumberError extends Error {}

function* bin(n) {
    if (n <= 0) {
        throw new UnsuitableNumberError
    } else {
        while (n != 0) {
            bit = n % 2
            yield bit
            n = (n - bit) / 2
        }
    }
}

/*
class UnsuitableNumberError extends Error {}

function* bin(n) {
    if (n <= 0) {
        throw new UnsuitableNumberError("Il numero deve essere maggiore di zero.")
    } else {
        let binaryString = n.toString(2)
        // Iteriamo sulla stringa binaria dal meno significativo (ultima cifra) al più significativo (prima cifra)
        for (let i = binaryString.length - 1; i >= 0; i--) {
            yield parseInt(binaryString[i], 2)
        }
    }
}
*/