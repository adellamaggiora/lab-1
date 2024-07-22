function memo(f) {
    let cache = new Map()
    let g = function(x) {
        if (cache.has(x)) return cache.get(x)
        else {
            let y = f(x)
            cache.set(x, y)
            return y
        }
    }
    g.clear = () => {
        cache.clear()
    }
    g.size = () => cache.size
    Object.defineProperty(g, "dimcache", {
        get() {
            return cache.size
        }
    })
    return g
}