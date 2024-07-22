interface NodoMin {
    val: number,
    sx ? : NodoMin,
    dx ? : NodoMin,
    piccolo: number
}

function contaMin(T: NodoMin | undefined): number {
    if (!T) {
        return Infinity
    } else {
        return T.piccolo = Math.min(T.val, contaMin(T.sx), contaMin(T.dx))
    }
}