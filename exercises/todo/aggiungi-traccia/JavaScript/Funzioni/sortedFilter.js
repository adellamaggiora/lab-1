function filter(list, p) {
    let res = []
    if (list) {
        if (p(list.val)) res.push(list.val)
        res = res.concat(filter(list.next, p))
    }
    return res
}

function sortedFilter(list, p) {
    let res = filter(list, p)
    res.sort((x, y) => {
        if (x[0] == y[0]) return x[1] - y[1]
        else return x[0] - y[0]
    })
    return res
}