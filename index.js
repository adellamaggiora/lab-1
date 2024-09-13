let Q = {
    val: 2,
    sx: {
        val: 4,
        sx: {
            val: 6
        },
        dx: {
            val: 6,
            dx: {
                val: 8
            }
        }
    },
    dx: {
        val: 7,
        sx: {
            val: 8
        }
    }
};

// T: { val, sx, dx }
// function livelloDispari(T) {
//     if (!T) {
//         return -1;
//     }
//     if (!T.sx && !T.dx) {
//         T.alt = 0;
//         return 0;
//     }

//     const alt = 1 + Math.max(livelloDispari(T.sx), livelloDispari(T.dx));
//     T.alt = alt;
//     return alt
// }

function calcolaAltezza(T) {
    if (!T) {
        return -1;
    }
    if (!T.sx && !T.dx) {
        T.alt = 0;
        return T.alt;
    }

    T.alt = 1 + Math.max(calcolaAltezza(T.sx), calcolaAltezza(T.dx));
    return T.alt;
}

function calcolaLivello(T, altezzaTot) {
    if (!T) {
        return altezzaTot;
    }
    if (!T.sx && !T.dx) {
        T.liv = altezzaTot - T.alt;
        return T.liv;
    }

    T.liv = altezzaTot - Math.max(calcolaLivello(T.sx, altezzaTot), calcolaLivello(T.dx, altezzaTot));
    return T.liv;
}

function main(T) {
    const altezzaTot = calcolaAltezza(T);
    // const livello = calcolaLivello(T, altezzaTot);
    return T
}

main(Q)
console.log(JSON.stringify(Q, null, 3))