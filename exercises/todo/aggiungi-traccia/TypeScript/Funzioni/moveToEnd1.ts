function moveToEnd1 < T > (a: T[], k: T, f: (p: T, q: T) => boolean): number {
    let idx: number = -1
    for (let i = 0; i < a.length; i++) {
        if (f(a[i], k)) {
            idx = i
            break
        }
    }
    if (idx != -1) {
        const [item] = a.splice(idx, 1)
        a.push(item)
    }
    return idx
}