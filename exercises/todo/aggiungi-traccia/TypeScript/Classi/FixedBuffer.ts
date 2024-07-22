class FixedBuffer < T > {
    n: number
    buffer: T[]
    constructor(n: number) {
        this.n = n
        this.buffer = []
    }
    put(...args: T[]): void {
        for (let i = 0; i < args.length; i++) {
            if (this.buffer.length < this.n) {
                this.buffer.push(args[i])
            } else {
                break // Se il buffer è pieno, esci dal ciclo
            }
        }
    }
    get(): T | undefined {
        return this.buffer.shift() // Restituisce ed estrae il primo elemento
    }
    peek(): T | undefined {
        return this.buffer[0] // Restituisce il primo elemento senza estrarlo
    }
    clear(): void {
        this.buffer = [] // Svuota il buffer
    }
}