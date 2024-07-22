function normalizza(T) {
    if (T.val.length <= 3) 
        T.val = true
    else 
        T.val = false
    if (T.figli)
        for (var t of T.figli)
            normalizza(t)
}