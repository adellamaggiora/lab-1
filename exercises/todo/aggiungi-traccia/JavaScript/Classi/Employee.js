class MissingEmployeeError extends Error {}
class Employee {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
    get id() {
        return this.surname + this.name
    }
}
class Schedule {
    #tasks
    constructor() {
        this.#tasks = {}
    }
    add(task, employee) {
        if (!this.#tasks[employee.id]) {
            this.#tasks[employee.id] = []
        }
        this.#tasks[employee.id].push(task)
        this.#tasks[employee.id].sort()
    }
    getTasks(employee) {
        if (!this.#tasks[employee.id]) return []
        return this.#tasks[employee.id]
    }
    free(employee) {
        if (!this.#tasks[employee.id]) {
            throw new MissingEmployeeError()
        }
        this.#tasks[employee.id] = []
    }
}