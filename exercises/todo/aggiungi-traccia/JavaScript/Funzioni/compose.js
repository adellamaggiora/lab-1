var compose = function(functions) {
    functions.reverse()
    return function(x) {
        for(fn of functions){
            x = fn(x)
        }
        return x
    }
}

/*
var compose = function(functions) {
return x => functions.reduceRight((acc,f)=>f(acc),x)
}
*/