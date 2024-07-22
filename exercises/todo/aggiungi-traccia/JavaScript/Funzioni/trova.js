function trova(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return i
        } else if (!a.includes(x)) {
            return -1
        }
    }
}