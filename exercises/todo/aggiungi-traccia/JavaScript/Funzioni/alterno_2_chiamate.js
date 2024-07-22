function alterno(f, g) {
    let toggle = true

    function h(...args) {
        const res = toggle ? f(...args) : g(...args)
        toggle = !toggle
        return res
    }
    h.reset = function() {
        toggle = true
    }
    return h
}