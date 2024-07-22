function presente(concessionaria, auto) {
    for (let veicolo of concessionaria) {
        if (veicolo.Telaio === auto.Telaio 
			&& veicolo.Anno === auto.Anno 
			&& veicolo.Prezzo === auto.Prezzo 
			&& veicolo.Disponibile === auto.Disponibile) {
            return true
        }
    }
    return false
}

function disponibili(concessionaria) {
    return concessionaria.filter(veicolo => veicolo.Disponibile)
}

function filtra_per_anno(concessionaria, anno, operatore) {
    if (operatore === "<") {
        return concessionaria.filter(veicolo => veicolo.Anno < anno)
    } else if (operatore === ">") {
        return concessionaria.filter(veicolo => veicolo.Anno > anno)
    } else if (operatore === "==") {
        return concessionaria.filter(veicolo => veicolo.Anno === anno)
    } else {
        return undefined; // Restituiamo undefined se l'operatore non è valido
    }
}