class UnknownLetterError extends Error {}
const letters = {
    "A": 0,
    "B": 0,
    "C": 0
}

function* unfold(word) {
    for (let lettera of word)
        if (lettera in letters) {
            yield lettera
        } else {
            throw new UnknownLetterError()
        }
}