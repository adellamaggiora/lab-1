class GiornoPienoError extends Error {}
type Data = [giorno: number, mese: string, year: number]
type Evento = [Data, string]

function compara_date(d1: Data, d2: Data) {
    return d1[0] == d2[0] && d1[1] == d2[1] && d1[2] == d2[2]
}
class Agenda {
    eventi: Evento[]
    max_eventi: number
    constructor(max_eventi: number) {
        this.eventi = []
        this.max_eventi = max_eventi
    }
    lista_eventi(data: Data): Evento[] {
        return this.eventi.filter(e => compara_date(e[0], data))
    }
    aggiungi(evento: Evento): void {
        // Ottieni data
        let data = evento[0];
        // Conta eventi in data
        let n_eventi = this.lista_eventi(data).length
        // Eventualmente aggiungi
        if (n_eventi < this.max_eventi) {
            this.eventi.push(evento)
        } else {
            throw new GiornoPienoError()
        }
    }
    libera(data: Data): number {
        let n_eventi = this.lista_eventi(data).length
        this.eventi = this.eventi.filter(e => !compara_date(e[0], data))
        return n_eventi
    }
}