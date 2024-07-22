function maxDepth(T) {
    let d = 0,
        s = 0;
    if (T == undefined) return -1; // Consideriamo -1 per un albero vuoto per coerenza con il calcolo della profondità
    s = maxDepth(T.sx); // Calcola la profondità massima del sottoalbero sinistro
    d = maxDepth(T.dx); // Calcola la profondità massima del sottoalbero destro
    if (s == -1) return d + 1; // Se il sottoalbero sinistro è vuoto, ritorna la profondità del sottoalbero destro più 1
    if (d == -1) return s + 1; // Se il sottoalbero destro è vuoto, ritorna la profondità del sottoalbero sinistro più 1
    // Ritorna il massimo tra le profondità dei due sottoalberi più 1
    return Math.max(s, d) + 1;
}