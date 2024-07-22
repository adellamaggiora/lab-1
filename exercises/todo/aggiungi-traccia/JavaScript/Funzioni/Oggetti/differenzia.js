function differenzia(trash) {
    let trash_diff = {
        carta: [],
        multimateriale: [],
        indifferenziato: []
    }
    for (let rifiuto of trash) {
        switch (rifiuto.categoria) {
            case "carta":
                trash_diff.carta.push(rifiuto);
                break
            case "multimateriale":
                trash_diff.multimateriale.push(rifiuto)
                break
            default:
                trash_diff.indifferenziato.push(rifiuto)
        }
    }
    return trash_diff
}