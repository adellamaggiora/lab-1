function mulidx(a) {
    let b = []
    if (typeof a[0] == 'number' && a[0] == 0) b.push(a[0])
    if (typeof a[0] == 'string' && a[0].length == 0) b.push(a[0])
    for (let i = 1; i < a.length; i++) {
        if (typeof a[i] == 'number' && a[i] % i == 0) b.push(a[i])
        if (typeof a[i] == 'string' && a[i].length % i == 0) b.push(a[i])
    }
    return b
}