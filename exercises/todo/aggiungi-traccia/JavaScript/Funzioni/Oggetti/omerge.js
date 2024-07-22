function omerge(o1, o2) {
    let res = {}
    for (let keyo1 in o1)
        if (!(keyo1 in o2)) res[keyo1] = o1[keyo1]
    for (let keyo2 in o2)
        if (!(keyo2 in o1)) res[keyo2] = o2[keyo2]
    return res
}

/*
function omerge(o1, o2) {
    let result = {};

    // Aggiungi tutte le proprietà di o1 al risultato
    for (let key in o1) {
        if (o1.hasOwnProperty(key) && !o2.hasOwnProperty(key)) {
            result[key] = o1[key];
        }
    }

    // Aggiungi tutte le proprietà di o2 al risultato
    for (let key in o2) {
        if (o2.hasOwnProperty(key) && !o1.hasOwnProperty(key)) {
            result[key] = o2[key];
        }
    }

    return result;
}
*/