function contamaggioredi(arr, threshold) {
    let res = 0
    for(let number of arr){
        if(number > threshold){
            res++
        }
    }
    return res
}