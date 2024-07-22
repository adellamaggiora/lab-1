class Prodotto {
    barcode = ""
    prezzo = 0
    constructor(barcode, prezzo) {
        this.barcode = barcode
        this.prezzo = prezzo
    }
    codice() {
        return this.barcode
    }
    netto() {
        return this.prezzo
    }
    lordo() {
        return this.prezzo * 1.22
    }
}
class ProdottoAlimentare extends Prodotto {
    constructor(barcode, prezzo) {
        super(barcode, prezzo)
    }
    lordo() {
        return this.prezzo * 1.10
    }
}

function conto(a) {
    let obj = {
        totale: 0,
        iva10: 0,
        iva22: 0
    }
    for (let prodotto of a) {
        obj.totale += prodotto.lordo()
        if (prodotto instanceof ProdottoAlimentare) {
            obj.iva10 += prodotto.lordo() - prodotto.netto()
        } else {
            obj.iva22 += prodotto.lordo() - prodotto.netto()
        }
    }
    return obj
}