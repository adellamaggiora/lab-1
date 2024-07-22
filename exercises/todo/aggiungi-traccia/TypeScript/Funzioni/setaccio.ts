type yesno < T > = {
    yes: T[],
    no: T[]
}
type tt = true | 1
type ff = false | 0
type cbool = tt | ff
type pred < T > = (e: T) => cbool

function setaccio < T > (a: T[], f: pred < T > ): yesno < T > {
    let aux = (e: T) => {
        let r = f(e);
        return r == true || r == 1
    }
    return {
        yes: a.filter(aux),
        no: a.filter(e => (!aux(e)))
    }
}