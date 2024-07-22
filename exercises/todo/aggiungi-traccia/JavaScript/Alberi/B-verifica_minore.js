function verifica(T) {
    if (!T) return true // Un albero nullo è considerato valido
    if (!T.sx && !T.dx) return true // Una foglia è sempre valida
    // Verifica se il nodo corrente è valido rispetto ai suoi figli
    if ((T.sx && T.val < T.sx.val) || (T.dx && T.val < T.dx.val)) {
        return false
    }
    // Verifica ricorsivamente i figli sinistro e destro
    return verifica(T.sx) && verifica(T.dx)
}