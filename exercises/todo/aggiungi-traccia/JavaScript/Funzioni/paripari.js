function paripari(A) {
    let res = []
    for (let i = 0; i < A.length; i += 2) {
        if (A[i] % 2 == 0) {
            res.push(A[i])
        }
    }
    return res
}


function paripari(A) {

    let result = [];

    const isPari = n => n % 2 === 0
    
    for (let i=0; i<A.length; i++) {
        const j = A.length - i;
        if (isPari(i)) {
            if (result.length === 0) {
                const el = A[i];
                if (isPari(el)) {
                    result.push(el)   
                }
            }
        }
        if (isPari(j)) {
            const el = A[j];
            if (isPari(el)) {
                result.push(el);
                break;
            }
        }
    }

    return result;

}