// trovare le foglie di un albero k-ario

interface KTree {
    val: number;
    figli: KTree[];
}

function countLeafs(kTree: KTree) {
    if (!kTree) {
        return 0;
    }
    if (!kTree.figli || kTree.figli.length === 0) {
        return 1;
    }

    let count = 0;
    // ritorna il conto di ogni figlio del nodo corrente
    for (const figlio of kTree.figli) {
         count += countLeafs(figlio)
    }

    return count;
}


const kTree: KTree = {
    val: 2,
    figli: [
        {
            val: 9,
            figli: []
        },
        {
            val: 10,
            figli: [
                {
                    val: 1,
                    figli: [{
                        val: 2,
                        figli: []
                    },
                    {
                        val: 100,
                        figli: null
                    }]
                },
                {
                    val: 99,
                    figli: null
                }
            ]
        }
    ]
}

const res = countLeafs(kTree)
console.log(res) // -> 4
