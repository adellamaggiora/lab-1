function union(A, B) {
    var R = {}
    for (var e in A) R[e] = 1
    for (var e in B) R[e] = 1
    return R
}

function intersection(A, B) {
    var R = {}
    for (var e in A)
        if (e in B)
            R[e] = 1
    return R
}

function difference(A, B) {
    var R = {}
    for (var e in A)
        if (!(e in B))
            R[e] = 1
    return R
}

function equivalence(A, B) {
    for (var e in A)
        if (!(e in B))
            return false
    for (var e in B)
        if (!(e in A))
            return false
    return true
}

function size(A) {
    var c = 0
    for (var e in A)
        c++
    return c
}

function isSubset(a, b) {
    for (let el in a) {
      if(a[el] && !(el in b)) {
        return false
      }
      return true
    }
  }

// MULTINSIEMI

function addMS(A, e) {
    if (e in A)
        A[e]++
    else
        A[e] = 1
}

function removeMS(A, E) {
    if (E in A) {
        A[E]--
        if (A[E] == 0)
            delete A[E]
    }
}

function unionMS(A, B) {
    var R = {}
    for (var e in A)
        R[e] = A[e]
    for (var e in B)
        if (e in R)
            R[e] += B[e]
        else
            R[e] = B[e]
    return R
}

function intersectionMS(A, B) {
    var R = {}
    for (var e in A)
        if (e in B)
            R[e] = Math.min(A[e], B[e])
    return R
}

function enumAllMS(A) {
    var R = []
    for (var e in A) {
        for (var i = 0; i < A[e]; i++)
            R.push(e)
    }
    return R
}


module.exports = {
    union,
    intersection,
    difference,
    equivalence,
    size,
    addMS,
    removeMS,
    unionMS,
    intersectionMS,
    enumAllMS,
    isSubset
}