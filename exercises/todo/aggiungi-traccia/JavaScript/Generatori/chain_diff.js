class RangeError extends Error {}

function* chain_diff(f, k) {
    if (k <= 0) {
        throw new RangeError()
    }
    yield -f(0)
    let i = 1
    while (true) {
        yield(f((i - 1) * k) - f(i * k))
        i++
    }
}

