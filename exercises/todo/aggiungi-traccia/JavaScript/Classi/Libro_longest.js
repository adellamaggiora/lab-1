class Libro {
    constructor(titolo, autore, numPagine) {
        this.titolo = titolo
        this.autore = autore
        this.numPagine = numPagine
    }
}
class Romanzo extends Libro {
    constructor(titolo, autore, numPagine, protagonista) {
        super(titolo, autore, numPagine)
        this.protagonista = protagonista
    }
}
class Giallo extends Romanzo {
    constructor(titolo, autore, numPagine, protagonista, colpevole) {
        super(titolo, autore, numPagine, protagonista)
        this.colpevole = colpevole
    }
}
class SaggioDivulgativo extends Libro {
    constructor(titolo, autore, numPagine) {
        super(titolo, autore, numPagine)
    }
    get scienziato() {
        return this.autore
    }
    set scienziato(autore) {
        this.autore = autore
    }
}

function ilRomanzoCheVorrei(libri) {
    let romanzi = libri.filter(libro => libro instanceof Romanzo)
    if (romanzi.length === 0) {
        return undefined;
    }
    let romanzoPiuLungo = romanzi.reduce((max, romanzo) => romanzo.numPagine > max.numPagine ? romanzo : max)
    return romanzoPiuLungo.titolo
}