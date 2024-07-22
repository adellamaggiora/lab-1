class ErroreTarga extends Error {}
class ErroreCilindrata extends Error {}
class Veicolo {
    constructor(modello, targa) {
        this.modello = modello
        this.targa = targa
    }
}
class Automobile extends Veicolo {
    constructor(modello, targa) {
        if (typeof targa === 'string' && targa.length == 7) {
            super(modello, targa)
        } else {
            throw new ErroreTarga()
        }
    }
}
class Motoveicolo extends Veicolo {
    constructor(modello, targa, cilindrata) {
        if (typeof targa === 'string' && targa.length == 4) {
            super(modello, targa)
        } else {
            throw new ErroreTarga
        }
        this.cilindrata = cilindrata
    }
}
class Motociclo extends Motoveicolo {
    constructor(modello, targa, cilindrata) {
        if (typeof cilindrata === 'number' && cilindrata > 50) {
            super(modello, targa, cilindrata)
        } else {
            throw new ErroreCilindrata
        }
    }
}
class Ciclomotore extends Motoveicolo {
    constructor(modello, targa, cilindrata) {
        if (typeof cilindrata === 'number' && cilindrata > 0 && cilindrata <= 50) {
            super(modello, targa, cilindrata)
        } else {
            throw new ErroreCilindrata
        }
    }
}

function minimoCilindrata(veicoli) {
    if (veicoli.length === 0) {
        return undefined
    }
    let [h, ...tail] = veicoli;
    let tail_min = minimoCilindrata(tail)
    if (h instanceof Motoveicolo) {
        if (tail_min === undefined) {
            return h.cilindrata;
        } else {
            return tail_min < h.cilindrata ? tail_min : h.cilindrata
        }
    } else {
        return tail_min
    }
}