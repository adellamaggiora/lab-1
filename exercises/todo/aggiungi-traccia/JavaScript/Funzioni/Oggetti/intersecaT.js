function intersecaT(t1, t2) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (t1[i].x == t2[j].x && t1[i].y == t2[j].y) {
                return true
            }
        }
    }
    return false
}