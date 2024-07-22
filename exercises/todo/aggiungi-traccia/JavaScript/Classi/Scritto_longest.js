class Scritto {
    constructor(titolo, autore, numPagine) {
        this.titolo = titolo
        this.autore = autore
        this.numPagine = numPagine
    }
}
class Libro extends Scritto {
    constructor(titolo, autore, numPagine, editore) {
        super(titolo, autore, numPagine)
        this.editore = editore
    }
}
class Romanzo extends Libro {
    constructor(titolo, autore, numPagine, editore, protagonista) {
        super(titolo, autore, numPagine, editore)
        this.protagonista = protagonista
    }
}
class Poema extends Scritto {
    constructor(titolo, autore, numPagine) {
        super(titolo, autore, numPagine)
    }
    get poeta() {
        return this.autore
    }
    set poeta(autore) {
        this.autore = autore
    }
}

function mattone(scritti) {
    let libri = scritti.filter(libri => libri instanceof Libro)
    if (libri.length === 0) {
        return undefined
    }
    let libroPiuLungo = libri.reduce((max, libro) => libro.numPagine > max.numPagine ? libro : max, libri[0])
    return libroPiuLungo.titolo
}