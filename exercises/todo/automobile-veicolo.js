/**
 * Si implementi una classe Automobile che estende la classe Veicolo.



La classe Veicolo è composta da 3 attributi privati: targa (stringa alfanumerica di 7 caratteri), n_ruote (intero > 0) e colore (stringa). (Il costruttore li accetta in quest'ordine.)



Implementare l'eccezione VeicoloError che viene sollevata se i parametri passati al costruttore non sono conformi con gli attributi richiesti.



Fornire, per ogni attributo, i metodi di accesso in lettura e scrittura (questi ultimi devono, di nuovo, gestire le necessarie eccezioni).



Infine, riscrivere il metodo toString() per la classe Veicolo che restituisce la stringa che elenca (in ordine) le caratteristiche del veicolo: targa, n_ruote, colore.



La classe Automobile estende Veicolo con l'aggiunta dell'attributo privato n_porte (intero > 0, ultimo argomento del costruttore) e fissando l'attributo n_ruote=4.



Fornire il metodo di accesso in lettura e scrittura per l'attributo privato e gestire l'inserimento di un valore non conforme con l'attributo sollevando l'eccezione VeicoloError. Sovrascrivere il metodo toString() di Veicolo aggiungendo l'informazione sul numero delle ruote.
 */

class VeicoloError extends Error { }

class Veicolo {

    #targa;
    #n_ruote;
    #colore;

    get targa() {
        return this.#targa
    }

    get n_ruote() {
        return this.#n_ruote
    }

    get colore() {
        return this.#colore
    }

    set targa(targa) {
        if (typeof targa !== 'string' || targa.length !== 7) throw new VeicoloError();
        this.#targa = targa
    }

    set n_ruote(n_ruote) {
        if (typeof n_ruote !== 'number' || n_ruote <= 0) throw new VeicoloError();
        this.#n_ruote = n_ruote;
    }

    set colore(colore) {
        if (typeof colore !== 'string') throw new VeicoloError();
        this.#colore = colore;
    }

    constructor(targa, n_ruote, colore) {
        this.targa = targa;
        this.n_ruote = n_ruote;
        this.colore = colore;
    }


    toString() {
        return `${this.#targa}${this.#n_ruote}${this.#colore}`
    }


}

class Automobile extends Veicolo {

    #n_porte

    get n_porte() {
        return this.#n_porte
    }

    set n_porte(n_porte) {
        if (typeof n_porte !== 'number' || n_porte <= 0) throw new VeicoloError();
        this.#n_porte = n_porte
    }

    constructor(targa, colore, n_porte) {
        super(targa, 4, colore);
        this.n_porte = n_porte
    }

    toString() {
        return `${this.targa}${this.n_ruote}${this.colore}${this.n_porte}`
    }

}