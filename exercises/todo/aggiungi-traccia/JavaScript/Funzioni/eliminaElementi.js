function eliminaElementi(arr) {
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i]
        if (typeof e === 'number' && e % 2 !== 0) {
            arr.splice(i, 1)
            i--
        } else if (typeof e === 'string' && e.length % 2 !== 0) {
            arr.splice(i, 1)
            i--
        } else if (typeof e === 'boolean' && e === false) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
}