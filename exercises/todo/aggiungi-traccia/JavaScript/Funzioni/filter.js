function filter(l, p) {
    let res = []
    if (l) {
        if (p(l.val)) res.push(l.val)
        res = res.concat(filter(l.next, p))
    }
    return res
}

function sortedFilter(l, p) {
    let res = filter(l, p)
    res.sort((x, y) => {
        if (x[0] == y[0]) {
            return x[1] - y[1]
        } else {
            return x[0] - y[0]
        }
    })
    return res
}