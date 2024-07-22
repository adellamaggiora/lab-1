interface TNode < T > {
    val: T,
    children: TNode < T > []
}

function biggest < T > (root: TNode < T > | undefined, bigger: (x: T, y: T) => boolean): T | undefined {
    if (!root) {
        return undefined
    }
    if (root.children.length === 0) {
        return root.val
    }
    let m: T = root.val
    for (let c of root.children) {
        let b = biggest(c, bigger)
        if (b !== undefined && bigger(b, m)) {
            m = b
        }
    }
    return m
}