interface TreeNode {
    val: string
    sx ? : TreeNode
    dx ? : TreeNode
}

function sxdx(T: TreeNode): [string, string] {
    let leftConcatenation: string = T.val // Concatenazione dei valori a sinistra
    let rightConcatenation: string = T.val // Concatenazione dei valori a destra
    // Se esiste un sottoalbero sinistro, concateniamo i valori a sinistra
    if (T.sx) {
        const sx = sxdx(T.sx)
        leftConcatenation += sx[0]
    }
    // Se esiste un sottoalbero destro, concateniamo i valori a destra
    if (T.dx) {
        const dx = sxdx(T.dx)
        rightConcatenation += dx[1]
    }
    return [leftConcatenation, rightConcatenation]
}