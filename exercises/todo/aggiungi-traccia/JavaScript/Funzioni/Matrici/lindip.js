function lindip(A) {
    for (var i = 0; i < A.length - 1; i++)
        for (var j = i + 1; j < A.length; j++)
            if (dip(A[i], A[j])) return true
    return false
}

function dip(X, Y) {
    var k = X[0] / Y[0]
    for (var i = 1; i < X.length; i++)
        if (X[i] / Y[i] != k) return false
    return true
}