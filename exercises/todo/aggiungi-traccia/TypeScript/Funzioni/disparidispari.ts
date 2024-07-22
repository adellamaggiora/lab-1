function disparidispari(A: number[]): void {
    for (let i: number = 1; i < A.length; i += 2) {
        if (A[i] % 2 != 0) {
            A.splice(i, 1)
            i--
        }
    }
}