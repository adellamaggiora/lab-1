function* babylon(n) {
    while (true) {
        n = (n / 2) + (1 / n)
        yield n
    }
}