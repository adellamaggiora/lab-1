function deframmenta(a) {
    let arr = []
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] == a[i + 1]) {
            arr.push(a[i]);
            while (a[i] == a[i + 1]) {
                arr.push(a[i + 1])
                i++
            }
        }
    }
    return arr
}