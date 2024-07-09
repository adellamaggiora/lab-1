const setLib = require('./libraries/set-multiset')

/**
 * image è un multinsieme
 */
function getImage(fn, d) {
    const result = {};
    for (const el in d) {
        if (d[el] === true) {
            const val = fn(el);
            if (val in result) {
                result[val]++
            }
            else {
                result[val] = 1
            }
        }
    }
    return result;
}


function analysis(fn, d, c) {

    // Il codominio è l'insieme di destinazionedei possibili risultati della funzione.

    // L'immagine è l'insieme dei risultati effettivi che si ottengono applicando la funzione agli elementi del dominio
    const image = getImage(fn, d);

    // funzione suriettiva: il codominio funzione corrisponde
    // all'immagine della funzione
    const suriettiva = setLib.equivalence(image, c);

    // funzione iniettiva: associa a elementi distinti del
    // dominio, elementi distinti del codominio
    let iniettiva = true;

    for (const el in c) {
        if (image[el] > 1) {
            iniettiva = false;
            break;
        }
    }


    const invertibile = suriettiva && iniettiva;


    return {
        suriettiva,
        iniettiva, 
        invertibile
    }
}


const f = x => x ** 2
const d = { 1: true, 2: true, 3: true }
const c = { 1: true, 4: true, 9: true, 10: true }

const res = analysis(f, d, c)

console.log(res);

