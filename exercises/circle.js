/*
Si vuole risolvere un problema di geometria in cui sono dati un insieme di cerchi, 
identificati da centro e raggio, e un punto P. 
Sia il centro del cerchio che il punto sono espressi con coordinate 
cartesiane come una coppia di valori numerici; 
il raggio del cerchio è un numero positivo. 

Il problema consiste nel trovare nell'insieme di cerchi, quello a distanza minima da P. 

In questo problema, la distanza è intesa come distanza 
euclidea fra P e il centro del cerchio, a cui viene sottratto il raggio del cerchio. 
Se P cade all'esterno del cerchio più vicino, questo va esteso aumentando 
il suo raggio in modo che la circonferenza tocchi P.



Si scriva in JavaScript una classe Cerchio con un costruttore con argomenti centro
e raggio come descritti sopra. Il costruttore deve lanciare un TypeError se il centro non è una coppia, 
oppure se le coordinate del centro o il raggio non sono numeri. 
Deve altresì lanciare un RangeError se il raggio, pur essendo un numero, è negativo. 
Gli oggetti di classe cerchio devono esporre due campi o proprietà di nome centro 
e raggio con l'ovvio significato.



Si scriva poi una funzione vicino(punto,cerchi) che, 
dato il punto P e un array di Cerchio, restituisca il cerchio più vicino a P, 
eventualmente esteso, come spiegato sopra. 
Non sono richiesti controlli di validità degli argomenti per vicino().
*/
const square = n => n**2
const isCoppia = (c) => c?.length === 2
const isCoordNumerica = (c) => c.every(_ => typeof _ === 'number') 
const isNegativo = (n) => n < 0
const distEuclidea = (c0, c1) => {
    const [x0, y0] = c0
    const [x1, y1] = c1
    return Math.sqrt(square(x1 - x0) +  square(y1 - y0))
}

const utils = {
    square,
    isCoppia,
    isCoordNumerica,
    isNegativo,
    distEuclidea
}


class Cerchio {

    centro
    raggio

    constructor(c, r) {
        if (!utils.isCoppia(c)) {
            throw new TypeError(`Il centro non è una coppia`)
        }
        if (!utils.isCoordNumerica(c) || typeof(r) !== 'number') {
            throw new TypeError(`Il centro o il raggio non sono coordinate numeriche`)
        }
        if (utils.isNegativo(r)) {
            throw new RangeError(`Il raggio è un numero negativo`)
        }

        this.centro = c
        this.raggio = r
    }

}

function vicino(punto, cerchi) {
    let dmin = +Infinity
    let cmin = null
    for (const c of cerchi) {
        let d = utils.distEuclidea(punto, c.centro) - c.raggio;
        if (d < dmin) {
            dmin = d
            cmin = c
        }
    }
    if (dmin>0) {
        cmin.raggio=distEuclidea(punto,cmin.centro)
    }
    return cmin
}


const c1 = new Cerchio([1, 2], 4)
const c2 = new Cerchio([3, 6], 10)
const c3 = new Cerchio([2, 2], 2)

const res = vicino([3, 9], [c1, c2, c3])
console.log(res)