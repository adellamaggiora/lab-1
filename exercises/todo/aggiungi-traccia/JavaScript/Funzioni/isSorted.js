function isSorted(a) {
    for (let i = 0; i < a.length - 1; i++) { // Verifica che sia strettamente crescente
        if (a[i] >= a[i + 1]) {
            return false
        }
    }
    return true
}