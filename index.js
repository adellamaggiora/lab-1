// restituisce il peso della radice
function valuta(t) {
    if (!t) {
        return 0;
    }
    // Treat nodes with undefined or empty 'figli' as leaf nodes
    if (t.figli === undefined) {
        return t.val;
    }
    
    let peso = 0;
    // Recursively compute the weight of each child and sum them up
    for (const figlio of t.figli) {
        peso += valuta(figlio);
    }
    // Apply the function stored in 'val' to the sum of child weights,
    // ensuring that 'this' inside 't.val' refers to the current node 't'
    return t.val.call(t, peso);
}


function valuta(t) {
    if(!t) {
        return 0;
    }
    if(t.figli === undefined) {
        return t.val;
    }   

    let peso = 0
    
    for (const figlio of t.figli) {
        peso += valuta(figlio)
    }

    return t.val(peso)
}
