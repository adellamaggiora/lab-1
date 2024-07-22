function minDepth(T) {
    let d = 0,
        s = 0;
    if (T == undefined) return -1;
    s = minDepth(T.sx);
    d = minDepth(T.dx);
    if (s == -1) return d + 1;
    if (d == -1) return s + 1;
    if (s < d) return s + 1;
    else return d + 1;
}