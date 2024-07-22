function merge(a, b) {
    for (let keyB in b) {
        a[keyB] = 1
    }
    return a
}