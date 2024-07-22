function ack(p, q) {
    if (p == 0) {
        return q + 1
    } else if (q == 0) {
        return ack(p - 1, 1)
    } else {
        return ack(p - 1, ack(p, q - 1))
    }
}