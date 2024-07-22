class OperazioneInvalida extends Error {}
class ErroreSaldo extends Error {}
class TooLow extends ErroreSaldo {}
class TooMuch extends ErroreSaldo {}
class ContoPostale {
    constructor(saldoIniziale, scoperto) {
        if (saldoIniziale <= 0) {
            throw new OperazioneInvalida("L'operazione non è valida.")
        }
        this.saldo = saldoIniziale
        this.scoperto = scoperto
    }
    deposito(valore) {
        if (valore < 0) {
            throw new OperazioneInvalida("L'operazione non è valida.")
        } else if (valore === 0) {
            throw new TooLow("Valore troppo basso.")
        }
        this.saldo += valore
    }
    prelievo(valore) {
        if (valore < 0) {
            throw new OperazioneInvalida("L'operazione non è valida.")
        } else if (this.saldo - valore < this.scoperto) {
            throw new TooMuch("Valore troppo alto.")
        }
        this.saldo -= valore;
    }
}

function applica(conto, depositi, prelievi) {
    if (depositi.length !== prelievi.length) {
        throw new OperazioneInvalida("Lunghezza degli array non corrispondente.")
    }
    let vecchio_saldo = conto.saldo
    for (let idx in depositi) {
        try {
            conto.deposito(depositi[idx])
            conto.prelievo(prelievi[idx])
        } catch (err) {
            if (err instanceof ErroreSaldo) {
                conto.saldo = vecchio_saldo
                return false
            } else {
                conto.saldo = vecchio_saldo
                throw err
            }
        }
    }
    return true
}