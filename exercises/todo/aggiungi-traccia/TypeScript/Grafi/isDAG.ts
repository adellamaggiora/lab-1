type Label = number | string
class GNode {
    label
    constructor(label: Label) {
        this.label = label
    }
}
class GEdge {
    from
    to
    constructor(from: GNode, to: GNode) {
        this.from = from
        this.to = to
    }
}
class Graph {
    nodes
    edges
    constructor(nodes: GNode[], edges: GEdge[]) {
        this.nodes = nodes
        this.edges = edges
    }
}

function isDAG(g: Graph): boolean {
    if (g.nodes.length == 0) return true
    for (let node of g.nodes) {
        let filtered: GEdge[] = g.edges.filter((e: GEdge) => e.from == node)
        // console.log(filtered, "archi from per...", node)
        if (filtered.length == 0) {
            let newG: Graph = new Graph(g.nodes.filter((n: GNode) => n != node), g.edges.filter((e: GEdge) => e.to != node))
            return isDAG(newG)
        }
    }
    return false
}