// dato un albero k ario e una funzione f
// scrivere una funzione che applichi f a tutti i nodi dell'albero


interface Nodo {
    val: number;
    figli?: Nodo[];
}

const albero: Nodo = {
    val: 3,
    figli: [
        {
            val: 10
        },
        {
            val: 7
        },
        {
            val: 5,
            figli: [
                {
                    val: 2
                }
            ]
        }
    ]
}

console.log('prima');
console.log(JSON.stringify(albero));

function applicaFn(a: Nodo, fn: (val: number) => any) {
    if (!a) {
        return;
    }
    if (!a.figli) {
        a.val = fn(a.val);
        return;
    }

    a.val = fn(a.val);
    for (const figlio of a.figli) {
        applicaFn(figlio, fn);        
    }

}

const fn = x => x + 1;

applicaFn(albero, fn);

console.log('dopo');
console.log(JSON.stringify(albero));