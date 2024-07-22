// Un Linear Congruential Generator (LCG) produce una sequenza di numeri che sembra casuale usando una relazione ricorsiva
function* prg(s: number, mul: number, incr: number, m: number): Generator<number> {
    while (true) {
        s = (mul * s + incr) % m
        yield s
    }
}