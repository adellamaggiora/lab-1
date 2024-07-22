function cifrepopolari(n) {
    let res = {}
    for (let i = 0; i < 10; i++) res[i] = 0
    n.toString().split('').map(Number).forEach(e => {
        res[e]++
    })
    let max = 0,
        min = 0
    for (let k = 0; k < 10; k++) {
        if (res[k] > res[max]) max = k
        if (res[k] < res[min]) min = k
    }
    return {
        [max]: res[max],
        [min]: res[min]
    }
}