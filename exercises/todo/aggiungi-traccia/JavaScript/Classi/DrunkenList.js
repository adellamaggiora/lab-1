class Nodo {
    value
    next
    prec
    constructor(value) {
        this.value = value
        this.next = undefined
        this.prec = undefined
    }
}
class DrunkenList {
    head
    tail
    length
    constructor() {
        this.length = 0
        this.head = undefined
        this.tail = undefined
    }
    insert_tail(value) {
        if (this.tail == undefined) {
            this.head = new Nodo(value)
            this.tail = this.head
        } else {
            this.tail.next = new Nodo(value)
            this.tail.next.prec = this.tail
            this.tail = this.tail.next
        }
        this.length += 1
    }
    insert_head(value) {
        if (this.head == undefined) {
            this.head = new Nodo(value)
            this.tail = this.head
        } else {
            this.head.prec = new Nodo(value)
            this.head.prec.next = this.head
            this.head = this.head.prec
        }
        this.length += 1
    }
    remove_tail() {
        // At least one element should be in the list
        if (this.tail == undefined) {
            throw new ReferenceError()
        }
        // Valore dell'ultimo nodo
        let val = this.tail.value
        // Unico elemento
        if (this.tail.prec == undefined) {
            this.head = undefined
            this.tail = undefined
        } else {
            // Penultimo senza successore
            this.tail.prec.next = undefined
            // Sostituisci ultimo con penultimo
            this.tail = this.tail.prec
        }
        // Diminuisci lunghezza
        this.length -= 1
        // Ritorna valore
        return val
    }
    remove_head() {
        // At least one element should be in the list
        if (this.head == undefined) {
            throw new ReferenceError()
        }
        // Valore dell'ultimo nodo
        let val = this.head.value
        // Unico elemento
        if (this.head.next == undefined) {
            this.head = undefined
            this.tail = undefined
        } else {
            // Sostituisci testa
            this.head.next.prec = undefined;
            // Sostituisci ultimo con penultimo
            this.head = this.head.next
        }
        // Diminuisci lunghezza
        this.length -= 1
        // Ritorna valore
        return val
    }
    push(value) {
        // Inserisci in testa
        this.insert_head(value)
        // Inserisci anche in coda
        if ((this.length - 1) % 2 != 0) {
            this.insert_tail(value)
        }
    }
    pop() {
        if (this.length % 2 == 0) {
            // Rimuove coda se pari
            return this.remove_tail()
        } else {
            // Rimuove testa se dispari
            return this.remove_head()
        }
    }
    as_array() {
        let ptr = this.head
        let arr = []
        while (ptr != undefined) {
            arr.push(ptr.value)
            ptr = ptr.next
        }
        return arr
    }
}