function cerca(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return i
        }
    }
    return -1
}

/*
function cercaOrd(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return i
        }
    }
    return -1
}
*/