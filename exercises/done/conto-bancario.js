const utils = {
    isNegative: x => x < 0
}

class InvalidMoney extends Error { }
class ExcessiveMoney extends Error { }
class InsufficientMoney extends Error { }


class ContoBancario {

    saldo;
    massimale;

    constructor(saldoIniziale, massimale) {
        if ([saldoIniziale, massimale].some(utils.isNegative)) {
            throw new InvalidMoney();
        }
        this.saldo = saldoIniziale;
        this.massimale = massimale;
    }

    deposito(valore) {
        if (utils.isNegative(valore)) {
            throw new InvalidMoney();
        }
        const saldoPotenziale = this.saldo + valore;
        if (saldoPotenziale > this.massimale) {
            throw new ExcessiveMoney();
        }
        this.saldo = saldoPotenziale;
        return this.saldo
    }

    prelievo(valore) {
        if (utils.isNegative(valore)) {
            throw new InvalidMoney();
        }
        const saldoPotenziale = this.saldo - valore
        if (utils.isNegative(saldoPotenziale)) {
            throw new InsufficientMoney();
        }
        this.saldo = saldoPotenziale;
        return this.saldo;
    }


}


function applica(conto, depositi, prelievi) {

    const saldoInvariato = conto.saldo;

    if ([...depositi, ...prelievi].some(utils.isNegative)) throw new InvalidMoney();

    try {
        for (let i = 0; i < depositi.length; i++) {
            conto.deposito(depositi[i]);
            conto.prelievo(prelievi[i]);            
        }
    } catch (error) {
        conto.saldo = saldoInvariato;
        return false;
    }

    return true;
}


// Successivamente, definire una funzione applica(conto, depositi, prelievi) 
// che prenda come argomento un oggetto conto di tipo ContoBancario e due array di interi depositi e prelievi di lunghezza identica.

// La funzione alterna sul conto corrente ogni deposito ed ogni prelievo e ritorna true 
// se tutte le operazioni sono eseguibili sul conto bancario, altrimenti ritorna false.

// Nel caso gli array contengano dei valori negativi, la funzione propaga l'eccezione InvalidMoney.
// Il saldo del conto deve essere invariato se la funzione applica ritorna false o propaga un'eccezione.
