function trovaOccorrenze(a, x) {
    let res = []
    if (!a.includes(x)) {
        return -1
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === x) {
                res.push(i)
            }
        }
    }
    return res
}