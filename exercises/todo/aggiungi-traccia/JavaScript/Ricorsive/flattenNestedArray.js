function flattenNestedArray(a) {
    function flattenRicorsiva(arr) {
        let flattened = []
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                flattened.push(arr[i])
            } else if (Array.isArray(arr[i])) {
                flattened = flattened.concat(flattenRicorsiva(arr[i]))
            }
        }
        return flattened
    }
    return flattenRicorsiva(a).sort((x, y) => x - y)
}