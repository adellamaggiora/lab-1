function isPalindroma(x: string) {
    let result = false;
    for (let i = 0, j = x.length-1; i < x.length; i++, j--) {
        if(x[i] !== x[j]) {
            break;
        }
        if(j <= i) {
            result = true;
        };

    }
    return result;
}

function minimaStringa(s: string[]) {
    let min: string = s[0];
    let result: string;

    for (let i=0; i<s.length; i++) {
        const el = s[i];
        if(el.length < min.length) {
            min = el;
        }
        if(isPalindroma(el)) {
            result = min;
            break;
        }
    }

    return result
}

const xx = minimaStringa(['ciaoa', 'casaa', 'oraas', 'anna'])
console.log(xx)


