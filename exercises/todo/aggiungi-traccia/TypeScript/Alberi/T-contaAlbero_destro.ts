interface Node {
    val: number
    sx ? : Node
    dx ? : Node
    conta: number
}

function contaAlbero(tree ? : Node | undefined): number {
    if (!tree) {
        return 0
    } else {
        let contaSX: number = contaAlbero(tree.sx)
        let contaDX: number = contaAlbero(tree.dx)
        tree.conta = contaDX
        return 1 + contaSX + contaDX
    }
}

function _contaAlbero(T: Node): any {
    if (!T) {
        return 0;
    }

    if (!T.sx && !T.dx) {
        T.conta = 0
        return 1;
    }

    const sinistra = _contaAlbero(T.sx!);
    const destra = _contaAlbero(T.dx!);

    T.conta = destra;

    return 1 + sinistra + destra;
}