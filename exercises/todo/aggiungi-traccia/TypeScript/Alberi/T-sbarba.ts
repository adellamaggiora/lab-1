interface Nodo < T > {
    val: T,
    figli ? : Nodo < T > []
}

function sbarba < T > (radice: Nodo < T > , s: (x: T) => boolean): void {
    let i = 0
    while (radice.figli && i < radice.figli.length) {
        if (s(radice.figli[i].val)) {
            radice.figli.splice(i, 1)
        } else {
            sbarba(radice.figli[i], s)
            i++
        }
    }
}