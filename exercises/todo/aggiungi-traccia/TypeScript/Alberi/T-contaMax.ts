interface NodoMax {
    val: number,
    sx ? : NodoMax,
    dx ? : NodoMax,
    grande: number
}

function contaMax(T: NodoMax | undefined): number {
    if (!T) {
        return -Infinity
    } else {
        return T.grande = Math.max(T.val, contaMax(T.sx), contaMax(T.dx))
    }
}