interface WithPriority {
    priority: number
}

function enqueue < T extends WithPriority > (e: T, queue: T[]): void {
    let i: number = 0
    while (i < queue.length && queue[i].priority < e.priority) i++
    queue.splice(i, 0, e)
}

function dequeue < T > (queue: T[]): T | undefined {
    return queue.pop()
}