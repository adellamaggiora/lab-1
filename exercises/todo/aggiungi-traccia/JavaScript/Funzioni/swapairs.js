function swapairs(a) {
    for(let element of a){
        if(Array.isArray(element) && element.length === 2)
        element.reverse()
    }
    return a
}