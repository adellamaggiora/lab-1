function votazione(Q) {
    let candidatiValidi = []
    for (let obj of Q) {
        // Verifica se uno dei fondatori ha votato per il candidato
            if (obj.votanti.includes("Bacci") && obj.votanti.includes("Gervasio") && obj.votanti.includes("Principe")) {
                candidatiValidi.push(obj.candidato)
        }
    }
    // Se non ci sono candidati validi, restituisce undefined
    if (candidatiValidi.length === 0) {
        return undefined
    }
    // Restituisce il primo candidato in ordine alfabetico
    candidatiValidi.sort()
    return candidatiValidi[0]
}