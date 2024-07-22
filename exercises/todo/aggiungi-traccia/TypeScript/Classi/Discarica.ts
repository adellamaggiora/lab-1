class WrongTypeError extends Error {}
class Discarica {
    private cestini: {
        [tipo: string]: any[]
    } = {}
    private contatori: {
        [tipo: string]: number
    } = {}
    constructor() {}
    butta(v: any) {
        let t: string = typeof v
        if (t in this.cestini) {
            this.cestini[t].push(v)
            this.contatori[t]++
        } else {
            this.cestini[t] = [v]
            this.contatori[t] = 1
        }
    }
    svuota(t: string): (typeof t)[] {
        if (t in this.cestini) {
            let ris: (typeof t)[] = this.cestini[t]
            this.cestini[t] = []
            return ris
        } else throw new WrongTypeError()
    }
    quanti(t: string): number {
        if (t in this.cestini) return this.contatori[t]
        else throw new WrongTypeError()
    }
    public classi(): Set < Function > {
        let s = new Set < Function > ()
        let o = this.cestini["object"] || []
        o.forEach(e => s.add(e.constructor))
        return s
    }
}