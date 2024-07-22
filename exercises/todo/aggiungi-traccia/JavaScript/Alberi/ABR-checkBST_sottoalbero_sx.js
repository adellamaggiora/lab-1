function checkBST(tree) {
    // Empty tree is a BST
    if (tree === null) {
        return true
    }
    // Check if max from left sub-tree is smaller or equal
    let left_check = tree.sx === null || maxNode(tree.sx) <= tree.val
    // Check if min from right sub-tree is strictly larger
    let right_check = tree.dx === null || minNode(tree.dx) > tree.val
    // If children respect
    if (left_check && right_check) {
        return checkBST(tree.sx) && checkBST(tree.dx)
    } else {
        return false
    }
}

function maxNode(tree) {
    if (tree === null) {
        return -Infinity
    }
    return Math.max(tree.val, Math.max(maxNode(tree.sx), maxNode(tree.dx)))
}

function minNode(tree) {
    if (tree === null) {
        return Infinity
    }
    return Math.min(tree.val, Math.min(minNode(tree.sx), minNode(tree.dx)))
}