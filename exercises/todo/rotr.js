/** 
 * Usando JavaScript, si aggiunga a tutte le stringhe del programma un metodo rotr() con il seguente comportamento:
 * se la stringa è vuota, la lascia immutata
 * altrimenti, toglie il primo carattere dall'inizio della stringa e lo aggiunge in coda
*/

String.prototype.rotr = function() {
    if (this.length === 0) return this.toString() // Restituisce la stringa immutata se è vuota
    return this.slice(1) + this[0] // Sposta il primo carattere alla fine della stringa
}