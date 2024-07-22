function sanitize(o:{[key:string]:any}, drop:string[]):void {
    for (var k in o) {
        if (drop.includes(k))
            delete o[k]
        else if (typeof o[k]=="object")
            sanitize(o[k],drop)
    }
}