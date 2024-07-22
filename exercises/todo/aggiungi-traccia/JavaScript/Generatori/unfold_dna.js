class UnknownBaseError extends Error {}
const bases = {
    "A": true,
    "T": true,
    "C": true,
    "G": true
}

function* unfold(dna) {
    for (let base of dna) {
        if (base in bases) {
            yield base
        } else {
            throw new UnknownBaseError()
        }
    }
}