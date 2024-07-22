class Imbarcazione {
    constructor(nome) {
        this.nome = nome
    }
}
class Nave extends Imbarcazione {
    constructor(nome, porto) {
        super(nome)
        this.porto = porto
    }
}
class Barca extends Imbarcazione {
    constructor(nome, lunghezza) {
        super(nome)
        this.lunghezza = lunghezza
    }
    get metri() {
        return this.lunghezza
    }
    set metri(misura) {
        this.lunghezza = misura
    }
}
class Motoscafo extends Barca {
    constructor(nome, lunghezza, motori) {
        super(nome, lunghezza)
        this.motori = motori
    }
}

function trovaBarca(a) {
    let barcaPiuGrande = undefined
    for (let imbarcazione of a) {
        if (imbarcazione instanceof Barca) {
            if (barcaPiuGrande === undefined || imbarcazione.lunghezza > barcaPiuGrande.lunghezza) {
                barcaPiuGrande = imbarcazione
            }
        }
    }
    return barcaPiuGrande ? barcaPiuGrande.nome : undefined
}