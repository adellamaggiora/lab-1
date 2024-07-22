function taglia_rami(t) {
    if (!t.figli) {
        return (t.val)
    }
    let sum = t.val,
        fval, i = 0
    while (i < t.figli.length) {
        fval = taglia_rami(t.figli[i])
        if (fval < 0) {
            t.figli.splice(i, 1)
        } else {
            sum += fval
            i++
        }
    }
    if (t.figli.length == 0) delete t.figli
    return sum
}