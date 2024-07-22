interface Node {
  val: number,
  sx ? : Node,
  dx ? : Node,
  sotto: number
}

function contaSotto(tree ? : Node): number {
  if (!tree) {
      return 0
  } else {
      return tree.sotto = contaSotto(tree.sx) + contaSotto(tree.dx) + 1
  }
}