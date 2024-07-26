// Si scriva una funzione minima_stringa(a) che, dato in input un array di a stringhe, 
// restituisce la stringa più corta fino alla prima occorrenza di una stringa palindroma, 
// inclusa quest'ultima.



// In caso di parità di lunghezza, la funzione deve ritornare l'ultima stringa in ordine di occorrenza.



// Una stringa palindroma è una stringa che rimane identica con i caratteri invertiti: "anna", "oro", "abccba".



// Esempio:

// minima_stringa(["ciao", "casa", "ora", "anna", "pc"]) restituisce "ora"

function isPalindroma(x) {
    let result = true;
    if (x?.length > 1) {
        for (let i = 0, j = x.length - 1; i < x.length; i++, j--) {
            if (j < i) {
                break;
            };
            if (x[i] !== x[j]) {
                result = false;
                break;
            }
        }
    }
    return result;
}

/**
 * 
 * qualche test case scoppia @todo 
 */
function minima_stringa(s) {
    let min = s[0];
    let result;

    for (const stringa of s) {
        if (stringa.length <= min.length) {
            min = stringa;
        }
        if (isPalindroma(stringa)) {
            result = min;
            break;
        }
    }

    return result
}


