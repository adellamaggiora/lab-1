    function raggruppa_nascita(persone) {
        let gruppo = {}
        // Iterate over people
        for (let persona of persone) {
            // New key => Empty array
            if (!(persona.luogonascita in gruppo)) {
                gruppo[persona.luogonascita] = []
            }
            // Add person to array
            gruppo[persona.luogonascita].push(persona)
        }
        // Return grouping
        return gruppo
    }