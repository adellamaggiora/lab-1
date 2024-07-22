function alterno(f, g) {
    let callCount = 0

    function h(...args) {
        callCount++
        let result
        if (callCount === 1 || callCount === 3) {
            result = g(...args)
        } else if (callCount === 2) {
            result = f(...args)
        } else {
            callCount = 1
            result = g(...args)
        }
        return result
    }
}