function sort_vehicles(arr) {
    arr.sort((a, b) => {
        if (a.tipo < b.tipo) {
            return -1
        } else if (a.tipo > b.tipo) {
            return 1
        } else {
            if (a.cilindrata < b.cilindrata) {
                return -1
            } else if (a.cilindrata > b.cilindrata) {
                return 1
            } else {
                if (a.peso < b.peso) {
                    return -1
                } else if (a.peso > b.peso) {
                    return 1
                } else {
                    return 0
                }
            }
        }
    })
}