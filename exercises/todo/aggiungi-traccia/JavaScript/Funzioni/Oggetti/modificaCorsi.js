function modificaCorsi(a) {
    if (a.length === 0) {
        return undefined
    }
    for (let obj of a) {
        if (obj.numStudenti <= 150) {
            obj.semestre = 2
        } else if (obj.numStudenti > 150) {
            obj.semestre = 1
        }
    }
    return a
}