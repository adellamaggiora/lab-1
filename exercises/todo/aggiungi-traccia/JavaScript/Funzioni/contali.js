function contali(C) {
    class C2 extends C {
        static q = 0
        constructor(...args) {
            super(...args)
            C2.q++
        }
        static get quanti() {
            return C2.q
        }
    }
    return C2
}