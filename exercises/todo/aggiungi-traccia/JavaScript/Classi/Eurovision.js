class NonCantaError extends Error {}
class Eurovision {
    constructor() {
        this.cantanti = new Set()
        this.semi1 = undefined
        this.semi2 = undefined
    }
    iscrivi(c) {
        if (c.canta instanceof Function) {
            this.cantanti.add(c)
            this.semi1 = undefined
            this.semi2 = undefined
        } else {
            throw new NonCantaError()
        }
    }
    semifinale(n) {
        if (n == 1) {
            let s = Array.from(this.cantanti)
            let res = []
            for (var i = 0; i < Math.ceil(this.cantanti.size / 2); i++) {
                let j = Math.floor(Math.random() * s.length)
                res.push(s[j])
                s.splice(j, 1)
            }
            this.semi1 = res
            this.semi2 = this.shuffle(s)
            return this.semi1
        } else {
            return this.semi2
        }
    }
    shuffle(s) {
        for (var h = 0; h < 3; h++) {
            for (var i = 0; i < s.length; i++) {
                var j = Math.floor(Math.random() * s.length)
                [s[i], s[j]] = [s[j], s[i]] // Correct swap
            }
        }
        return s
    }
}