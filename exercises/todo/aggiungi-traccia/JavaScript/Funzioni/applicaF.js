function applicaF(p, d) {
    return function(a) {
        let res = []
        for (let i = 0; i < a.length; i++) {
            if (i % 2 === 0) {
                res.push(p(a[i]))
            } else {
                res.push(d(a[i]))
            }
        }
        return res
    }
}

/*
function applicaF(p, d) {
    return function(a) {
        return a.map((elemento, indice) => {
            return indice % 2 === 0 ? p(elemento) : d(elemento)
        })
    }
}
*/