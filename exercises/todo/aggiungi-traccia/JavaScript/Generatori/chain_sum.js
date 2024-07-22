class RangeError extends Error {}

function* chain_sum(f, k) {
    if (k <= 0) {
        throw new RangeError()
    }
    yield f(0)
    let i = 1
    while (true) {
        yield(f(i * k) + f((i - 1) * k))
        i++
    }
}