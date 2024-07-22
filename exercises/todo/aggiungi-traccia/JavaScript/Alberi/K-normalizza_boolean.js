function normalizza(T) {
    if (T.val) 
        T.val = 1
    else 
        T.val = 0
    if (T.figli)
        for (var t of T.figli)
            normalizza(t)
}