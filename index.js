// Si scriva una funzione map_tree(tree, sx_fun, dx_fun) che, dato un albero binario e due funzioni
// sx_fun e dx_fun, restituisca un altro albero senza alterare l'originale. 
// Nell'albero risultante, il valore di ciascun figlio di sinistra è sostituito con il risultato dell’applicazione di sx_fun; 
// rispettivamente, i figli di destra sono sostituiti dall’applicazione di dx_fun. 
// Se sx_fun o dx_fun sono undefined, il valore del nodo non viene alterato. 
// Si assuma che alla radice si applichi la funzione sx_fun.



// Notazione.

// Come visto a lezione, un albero binario è codificato come un oggetto JavaScript con proprietà val, sx, e dx, 
// dove sx e dx sono rispettivamente il ramo di sinistra e di destra. 
// L’albero segnala l’assenza di un figlio con il valore null nella rispettiva proprietà.



// Esempio.

// Sia tree il seguente albero binario:

//      5
//     / \
//    /   \
//   8     10
//  / \     \  
// 2   4     7


// Allora, il risultato della applicazione di map_tree, è il seguente albero

// map_tree(tree, (x) => x+1, (x) => x-1) = 

//      6
//     / \
//    /   \
//   9     9
//  / \     \  
// 3   3     6


// function map_tree(tree, sxFun, dxFun) {

//     if (!tree) {
//         return
//     }
    
//     let fn
//     if (sxFun) {
//         fn = sxFun
//     }
//     else {
//         fn = dxFun
//     }

//     // nodo foglia
//     if (!tree.dx && ! tree.sx && (typeof tree.val === 'number') && fn) {
//         return { val: fn(tree.val) }
//     }

//     const sx = map_tree(tree.sx, sxFun, null);  
//     const dx = map_tree(tree.dx, null, dxFun);
    
//     return { val: tree.val, sx, dx };
// }

function map_tree(tree, sxFun, dxFun) {
    if (!tree) {
        return;
    }

    const newVal = sxFun ? sxFun(tree.val) : tree.val;

    const newSx = map_tree(tree.sx, sxFun, dxFun);  
    const newDx = map_tree(tree.dx, dxFun, dxFun);

    return { val: newVal, sx: newSx, dx: newDx };
}


const t = {
    val: 5,
    sx: {
        val: 8,
        sx: {
            val: 2
        },
        dx: {
            val: 4
        }
    },
    dx: {
        val: 10,
        dx: {
            val: 7
        }
    }
}

const res = map_tree(t, x => x + 1, x => x - 1);
console.log(JSON.stringify(res, null, 3))
