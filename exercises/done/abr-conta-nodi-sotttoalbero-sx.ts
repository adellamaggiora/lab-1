// Si scriva in TS una funzione contaAlbero(T) che, dato un albero binario T come argomento, 
// conti per ogni nodo t in T (inclusa la radice) il numero di nodi appartenenti 
// al sotto-albero sinistro di cui t è radice (t escluso). Questo valore deve essere scritto in conta.



// Nota: Si assuma che il valore di conta in ogni nodo in T sia inizialmente -Infinity.

// Nota: NON USATE IL TIPO any.



// Esempio:


let Qa = {
    val: 2,
    conta: -Infinity,
    sx: {
        val: 4,
        conta: -Infinity,
        sx: {
            val: 6,
            conta: -Infinity
        },
        dx: {
            val: 6,
            conta: -Infinity,
            dx: {
                val: 8,
                conta: -Infinity
            }
        }
    },
    dx: {
        val: 7,
        conta: -Infinity,
        sx: {
            val: 8,
            conta: -Infinity
        }
    }
};



// Dopo invocazione contaSotto(Qa), si ha che:

// Qa = {
//     val: 2,
//     conta: 4,
//     sx: {
//         val: 4,
//         conta: 1,
//         sx: {
//             val: 6,
//             conta: 0
//         },
//         dx: {
//             val: 6,
//             conta: 0,
//             dx: {
//                 val: 8,
//                 conta: 0
//             }
//         }
//     },
//     dx: {
//         val: 7,
//         conta: 1,
//         sx: {
//             val: 8,
//             conta: 0
//         }
//     }
// }

// contare i nodi appartenenti al sottoalbero sx

type Tree = { val: number, sx?: Tree, dx?: Tree, conta?: number }

function contaAlbero(T: Tree | undefined): number {
    
    if (!T) {
        return 0;
    }
    if (!T.sx && !T.dx) {
        T.conta = 0;
        return 1;
    }

    const nodiSottoAlberoSx: number = contaAlbero(T.sx);
    const nodiSottoAlberoDx: number = contaAlbero(T.dx);
    T.conta = nodiSottoAlberoSx

    return 1 + nodiSottoAlberoDx + nodiSottoAlberoSx;
}

contaAlbero(Qa)

console.log(Qa)