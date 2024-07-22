function* serializza(o: Object): Iterator < [string, any] > {
    var a: [string, any][] = Object.entries(o).sort()
    for (let p of a) yield p
}