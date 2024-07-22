function mcm(a, b) {
    // Funzione per calcolare il massimo comune divisore (MCD) usando l'algoritmo di Euclide
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y
            y = x % y
            x = temp
        }
        return x
    }
    // Calcolo del minimo comune multiplo (mcm)
    return Math.abs(a * b) / gcd(a, b)
}