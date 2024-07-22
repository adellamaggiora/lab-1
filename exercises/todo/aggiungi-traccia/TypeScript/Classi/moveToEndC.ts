class MoveToEndC < T > {
    a: T[]
    f: (x: T, y: T) => boolean
    constructor(a: T[], f: (x: T, y: T) => boolean) {
        this.a = a
        this.f = f
    }
    move(k: T): number {
        for (let i: number = 0; i < this.a.length; i++) {
            if (this.f(this.a[i], k)) {
                const [item] = this.a.splice(i, 1) // Rimuove l'elemento trovato
                this.a.push(item) // Aggiunge l'elemento alla fine dell'array
                return i // Ritorna la posizione dell'elemento
            }
        }
        return -1
    }
}