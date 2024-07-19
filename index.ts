// derivazione numerica vs derivazione simbolica

// derivazione simobilca simbolo => simbolo
// ad esempio: derivata di x^2 => 2x

// cos'è la derivata di una funzione in un punto
// limite tra rapporto della funzione e intervallo quando l'intervallo tende a zero
// oppure il rapporto di una funzione tra un epsilon


// la derivata misura quanto velocemente la funzione cambia in quel punto.

// rapporto incrementale in un punto
// Δy/Δx = (f(x1) - f(x2)) / x1 - x2



function derDx(f, x, epsilon = 0.001) {
    return (f(x + epsilon) - f(x)) / epsilon;
}

function derSx(f, x, epsilon=0.001) {
    return (f(x) - f(x - epsilon)) / epsilon;
}

function der(f, x, epsilon = 0.001) {
    const dx = derDx(f, x, epsilon);
    const sx = derSx(f, x, epsilon);
    const tolerance = epsilon * 10
    if (Math.abs(dx - sx) < tolerance) { // Incrementato il margine di tolleranza
        return (dx + sx) / 2;  // Restituisce la media delle due derivazioni per maggiore precisione
    }
    return null;  // Se le derivazioni non sono sufficientemente vicine, restituisce null
}

// scrivere una funzione che restituisce la funzione derivata prima

function funDer(g, epsilon=0.001) {
    return (x) => der(g, x , epsilon);
}


const myFun = x => x**2;

const prima = funDer(myFun);

console.log(prima(3))
