type Point = [number, number]
interface List {
    val: Point
    next: List | null
}

function filter(list: List | null, p: (x: Point) => boolean): Point[] {
    let res: Point[] = []
    if (list) {
        if (p(list.val)) res.push(list.val)
        res = res.concat(filter(list.next, p))
    }
    return res
}

function sortedFilter(list: List | null, p: (x: Point) => boolean): Point[] {
    let res = filter(list, p)
    res.sort((x: Point, y: Point) => {
        if (x[0] == y[0]) return x[1] - y[1]
        else return x[0] - y[0]
    });
    return res
}