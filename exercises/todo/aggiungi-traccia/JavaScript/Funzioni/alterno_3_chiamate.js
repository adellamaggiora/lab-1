function alterno(f, g) {
    let useGNext = true;

    function h(...args) {
        const result = useGNext ? g(...args) : f(...args);
        useGNext = !useGNext;
        return result
    }
    h.reset = function() {
        useGNext = true
    }
    return h
}