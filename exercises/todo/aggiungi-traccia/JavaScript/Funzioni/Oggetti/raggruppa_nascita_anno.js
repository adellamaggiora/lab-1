function raggruppa_nascita(persone) {
    let gruppo = {}
    // Iterate over people
    for (let persona of persone) {
        // New key => Empty array
        if (!(persona.annonascita in gruppo)) {
            gruppo[persona.annonascita] = []
        }
        // Add person to array
        gruppo[persona.annonascita].push(persona)
    }
    // Return grouping
    return gruppo
}