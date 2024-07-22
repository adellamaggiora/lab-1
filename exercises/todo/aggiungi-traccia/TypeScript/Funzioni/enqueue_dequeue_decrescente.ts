interface WithPriority {
    priority: number
}

function enqueue < T extends WithPriority > (e: T, queue: T[]): void {
    let i: number = 0
    // Cambiamo il segno di confronto per garantire l'ordine decrescente
    while (i < queue.length && queue[i].priority > e.priority) i++
    queue.splice(i, 0, e)
}

function dequeue < T > (queue: T[]): T | undefined {
    // Rimuove e ritorna il primo elemento dalla coda (che ha la priorità più alta)
    return queue.shift()
}