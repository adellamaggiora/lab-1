function tagliaRami(T, v) {
    for (var i = 0; i < (T.figli || []).length; i++)
        if (T.figli[i].val % v == 0) {
            T.figli.splice(i--, 1)
        } else {
            tagliaRami(T.figli[i], v)
        }
}