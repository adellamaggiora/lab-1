function pronostico(partite) {
    // Aggiungi la proprietà probVincita agli oggetti dell'array
    let probabilita_aggiunte = partite.map((x) => {
        let probVincita = x.totalePartite === 0 ? 0 : Math.round((x.vittorieCasa / x.totalePartite) * 100) / 100
        return {
            ...x,
            probVincita: probVincita
        }
    });
    // Ordina l'array in base alla probabilità di vincita e, a parità, alfabeticamente per il nome della squadra di casa
    let res = probabilita_aggiunte.sort((a, b) => {
        if (b.probVincita !== a.probVincita) {
            return b.probVincita - a.probVincita // Sort decrescente
        } else {
            return a.squadraCasa > b.squadraCasa ? 1 : -1 // Sort alfabetico
        }
    });
    return res
}