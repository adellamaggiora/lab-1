class InvalidMoney extends Error {}
class BalanceError extends Error {}
class ExcessiveMoney extends BalanceError {}
class InsufficientMoney extends BalanceError {}
class ContoBancario {
    saldo
    massimale
    constructor(saldoIniziale, massimale) {
        if (saldoIniziale < 0 || massimale < 0) {
            throw new InvalidMoney()
        }
        this.saldo = saldoIniziale
        this.massimale = massimale
    }
    deposito(valore) {
        if (valore < 0) {
            throw new InvalidMoney()
        }
        if (this.saldo + valore > this.massimale) {
            throw new ExcessiveMoney()
        }
        this.saldo += valore
    }
    prelievo(valore) {
        if (valore < 0) {
            throw new InvalidMoney()
        }
        if (this.saldo - valore < 0) {
            throw new InsufficientMoney()
        }
        this.saldo -= valore
    }
}

function applica(conto, depositi, prelievi) {
    let vecchio_saldo = conto.saldo
    for (let idx in depositi) {
        try {
            conto.deposito(depositi[idx])
            conto.prelievo(prelievi[idx])
        } catch (err) {
            if (err instanceof BalanceError) {
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