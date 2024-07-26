interface TreeNode {
    val: string
    sx? : TreeNode
    dx? : TreeNode
}

function sxdx(tree: TreeNode | undefined): [string, string] {

    if (!tree) {
      return ['', '']
    }

    let left: string = tree.val;
    let right: string = tree.val;

    left += sxdx(tree.sx)[0]
    right += sxdx(tree.dx)[1]

    return [left, right];

}