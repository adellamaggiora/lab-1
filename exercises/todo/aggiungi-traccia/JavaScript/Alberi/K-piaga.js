function piaga(T) {
    let e = 0
    if (T && T.figli) {
        e = conta(T.figli.shift())
        for (var f of T.figli) {
            e += piaga(f)
        }
    }
    return e
}

function conta(T) {
    if (T) {
        if (T.figli) {
            return T.figli.reduce((n, f) => n + conta(f), 1)
        } else {
            return 1
        }
    } else {
        return 0
    }
}