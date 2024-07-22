function conta_caratteri(stringa_a, stringa_b, stop_condition) {
    let count = 0
    for(let letteraA of stringa_a){
        for(let letteraB of stringa_b){
            if(letteraA === letteraB) {
                count++
            }
        }   
        if(stop_condition(letteraA)) { // Il carattere per il quale stop_condition diventa true è incluso nel count in quanto si trova dopo count++
            return count
        }
    }
    return count
}