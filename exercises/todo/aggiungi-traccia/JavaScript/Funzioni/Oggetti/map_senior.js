function map_senior(db) {
    for (let persona of db)
        if (persona.eta >= 18) persona.maggiorenne = true
        else persona.maggiorenne = false
    return db
}