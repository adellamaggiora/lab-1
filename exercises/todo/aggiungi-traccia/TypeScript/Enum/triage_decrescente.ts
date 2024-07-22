enum Code {
    White = 0,
        Green = 1,
        Yellow = 5,
        Red = 10
}
enum Age {
    Baby = 5,
        Child = 2,
        Adult = 0,
        Elder = 1
}
type Urgency = [Code, Age]

function triage(patients: Urgency[]): void {
    patients.sort((p1: Urgency, p2: Urgency) => {
        let priorityDiff: number = (p1[0] + p1[1]) - (p2[0] + p2[1])
        if (priorityDiff == 0) // se stessa priorità, considero il codice
            return p2[0] - p1[0]
        else // altrimenti, vado con quella calcolata
            return priorityDiff * -1
    })
}