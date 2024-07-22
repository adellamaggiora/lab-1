function partition_until(arr, depth) {
    if (depth === 0 || arr.length === 1) return [arr]
    let left = []
    let right = []
    let center = Math.floor(arr.length / 2)
    // Dividi in base al centro
    for (let i = 0; i < arr.length; i++) {
        if (i < center) left.push(arr[i])
        else right.push(arr[i])
    }
    // Chiamata ricorsiva
    left = partition_until(left, depth - 1)
    right = partition_until(right, depth - 1)
    return left.concat(right)
}