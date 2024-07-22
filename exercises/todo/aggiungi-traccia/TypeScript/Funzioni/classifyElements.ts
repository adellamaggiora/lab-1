type Category = 'positive' | 'negative' | 'neutral'

function classifyElements < T > (a: T[], classifier: (x: T) => Category): object {
    let res = {
        positive: [] as T[],
        negative: [] as T[],
        neutral: [] as T[]
    }
    for (let elemento of a) {
        if (classifier(elemento) == 'positive') {
            res.positive.push(elemento)
        } else if (classifier(elemento) == 'negative') {
            res.negative.push(elemento)
        } else if (classifier(elemento) == 'neutral') {
            res.neutral.push(elemento)
        }
    }
    return res
}