function gancio(a) {
    let obj = {
        num: 0,
        asc: 0,
        des: 0,
        gan: []
    }
    for (let i = 0; i < a.length - 2; i++) {
        if (a[i] == a[i + 2] && a[i] != a[i + 1]) {
            obj.gan.push([a[i], a[i + 1], a[i + 2]])
            obj.num++
        }
    }
    for (let i = 0; i < obj.gan.length; i++) {
        let g = obj.gan[i]
        if (g[0] < g[1] && g[1] > g[2]) {
            obj.des++
        } else if (g[0] > g[1] && g[1] < g[2]) {
            obj.asc++
        }
    }
    return obj
}