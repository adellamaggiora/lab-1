function analisiPathway(pazienti, path) {
    let result = []
    for (let paz of pazienti) {
        let liv = 0
        for (let gene of Object.keys(paz)) {
            if (gene in path) {
                liv += paz[gene]
            }
        }
        result.push(liv / Object.keys(path).length)
    }
    return result
}