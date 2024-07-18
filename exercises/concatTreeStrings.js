

var TR = {
    val: "a",
    sx: {
        val: "b",
        sx: {val: "c"},
        dx: {val: "d"}
    },
    dx: {
        val: "e",
        sx: {val: "f", sx: {val: "z"}},
        dx: {val: "g", sx: {val: "x"}, dx: {val: "y", sx: {val: "w"}}}
    }
}


function lar(T) {
    if (!T) {
        return ['', ''];
    }
    if (!T.sx && !T.dx) {
        return [T.val, T.val];
    }
    
    const [leftL, leftR] = lar(T.sx);
    const [rightL, rightR] = lar(T.dx);

    return [leftL + T.val, rightR + T.val];
}

const res = lar(TR)
console.log(res)

