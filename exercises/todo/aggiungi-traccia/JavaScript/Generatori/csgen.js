function* csgen(A) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i]; j++) {
            yield i
        }
    }
}