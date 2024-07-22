function replace(arr, target, replacement) {
    let res = []
    for (let e of arr) {
        if (e === target) {
            res.push(replacement)
        } else {
            res.push(e)
        }
    }
    return res
}