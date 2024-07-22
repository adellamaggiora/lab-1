function tombola(a, b) {
    let count = 0
    for (let numeroA of a) {
        for (let numeroB of b) {
            if (numeroA == numeroB) count++
        }
    }
    switch (count) {
        case 0:
            return 'ritenta'
        case 1:
            return 'quasi';
        case 2:
            return 'ambo'
        case 3:
            return 'terno'
        case 4:
            return 'quaterna'
        default:
            return 'tombola'
    }
}


