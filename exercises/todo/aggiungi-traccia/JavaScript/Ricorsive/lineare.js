function lineare(a) {
    let res = [];

    function recursivePush(a) {
        for (let i = 0; i < a.length; i++) {
            if (typeof a[i] === 'string') {
                res.push(a[i]);
            } else if (Array.isArray(a[i])) {
                recursivePush(a[i]);
            }
        }
    }
    recursivePush(a);
    return res;
}