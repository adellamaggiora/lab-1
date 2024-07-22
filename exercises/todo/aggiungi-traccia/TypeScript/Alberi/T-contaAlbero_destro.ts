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