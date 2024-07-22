function map_tree(tree, sx_fun, dx_fun) {
    // Defaults to identify function
    if (sx_fun === undefined) {
        sx_fun = (x) => x
    }
    if (dx_fun === undefined) {
        dx_fun = (x) => x
    }

    function apply_fun(node, branch) {
        // Check if node exists
        if (node == null) {
            return null
        }
        // Compute new value
        let new_val = null
        if (branch == 'left') {
            new_val = sx_fun(node.val)
        } else {
            new_val = dx_fun(node.val)
        }
        // Return new tree
        return {
            val: new_val,
            sx: apply_fun(node.sx, 'left'),
            dx: apply_fun(node.dx, 'right')
        }
    }
    return apply_fun(tree, 'left')
}