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

var AR=[1,4,2,7,23,5,1,7,3,4,4,6,10,2,5]

console.log(paripari(AR))