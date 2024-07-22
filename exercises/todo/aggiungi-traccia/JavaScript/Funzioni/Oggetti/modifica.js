function modifica(ao) {
    return function(ak) {
        let count = 0
        for (let obj of ao) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (!ak.includes(key)) {
                        delete obj[key]
                        count++
                    }
                }
            }
        }
        return count
    }
}