function cambioBase(base: number, n: number, result='') {
    if(!n) {
        return result; 
    }
    result = `${n % base}${result}`;
    const remaining = Math.floor(n / base);
    return cambioBase(base, remaining, result);
}

const x = cambioBase(2, 8);
console.log(x)
