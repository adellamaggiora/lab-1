/**
 * Dato un albero binario etichettato con interi, scrivere una funzione JS che stampi
 * le etichette dei nodi interni che sono radice di un sotto-albero in cui la somma delle
 * chiavi, tranne quella della raice, è maggiore della chiave della radice stessa.
 */

const albero = {
    val: 2, 
    sx: {
        val: 5,
        sx: {
            val: 1
        }
    },
    dx: {
        val: 7,
        sx: {
            val: 10
        },
        dx: {
            val: 4
        }
    }
}


/**
 * 
 *              2
 *         5        7
 *      1        10    4
 * 
 */

function stampaEtichette(albero) {

    if (!albero) {
        return 0;
    }
    // nodo foglia
    if (!albero.sx && !albero.dx) {
        return albero.val;
    }

    const valSottoalberi = stampaEtichette(albero.sx) + stampaEtichette(albero.dx);
    if (valSottoalberi > albero.val) {
        console.log(albero.val)
    }

}