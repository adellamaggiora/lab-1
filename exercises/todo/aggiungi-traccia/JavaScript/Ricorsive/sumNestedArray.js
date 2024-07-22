function sumNestedArray(a) {
    function recursiveSum(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                sum += arr[i]
            } else if (Array.isArray(arr[i])) {
                sum += recursiveSum(arr[i])
            }
        }
        return sum
    }
    return recursiveSum(a)
}