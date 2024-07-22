String.prototype.rotr = function() {
    if (this.length === 0) return this.toString() // Restituisce la stringa immutata se è vuota
    return this.slice(1) + this[0] // Sposta il primo carattere alla fine della stringa
}