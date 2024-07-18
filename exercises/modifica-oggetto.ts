// si scriva una funzione js modificaOggetto(o, f, k), con o un oggetto, f una funzione e k un numero o una stringa.
// La funzione verifica la presenza della chiave k in o:
// se la chiave non è presente, la aggiunge ad o, assegnandolecome valore il risultato di f applicata a k, 
// altrimenti l'oggetto o non viene modificato.

const f = (a: number) => 2 * a;

function modificaOggetto(o: Object, f: Function, k: number | string) {
    const kInO = Object.keys(o).some(key => key === k);
    if (!kInO) {
        const result = f(k);
        o[k] = result;
    }
}

const obj = { a: 1, b: 2 };
modificaOggetto(obj, f, 2)
console.log(obj);
