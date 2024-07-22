function clip(arr, threshold, replacement) {
    // Se replacement è undefined, usa threshold come valore di sostituzione
    if (replacement === undefined) {
        replacement = threshold
    }
    // Itera su ogni elemento dell'array e modifica gli elementi secondo la logica
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            arr[i] = replacement
        }
    }
    return arr
}