function select(A,K) {
    var R=[]
    for (var k of K)
        if (k<0 || k>=A.length)
            throw new RangeError("indice in K illegale")
    for (var i=0;i<A.length;i++)
        if (K.includes(i))
            R.push(A[i])
    return R
}