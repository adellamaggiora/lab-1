function tagliaAlberi(t) {
    if (!t) {
        return
    } else if (t.val < 0) {
        delete t.val
        delete t.sx
        delete t.dx
    }
    tagliaAlberi(t.sx)
    tagliaAlberi(t.dx)
}