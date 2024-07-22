class Bounded2DSpace {
    bounded_x
    bounded_y
    constructor(x, y) {
        this.bounded_x = x.filter(e => e <= -10)
        this.bounded_y = y.filter(e => e <= -10)
    }
}
class ReversePyramidSpace extends Bounded2DSpace {
    *generate_pyramid() {
        let f = (x, y) => {
            return 1 + Math.abs(x + y) + Math.abs(y - x)
        }
        for (let i in this.bounded_x) {
            yield [this.bounded_x[i], this.bounded_y[i], f(this.bounded_x[i], this.bounded_y[i])]
        }
    }
}