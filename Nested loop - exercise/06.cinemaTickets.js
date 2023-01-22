function solve(input) {
    let index = 0
    let movieTitle = input[index]
    index++
    let standartTicket = 0
    let studentTicket = 0
    let kidTicket = 0
    while (movieTitle !== "Finish") {
        let spacesAvailable = Number(input[index])
        index++
        let currentTicket = input[index]
        index++
        let spacesTaken = 0
        while (currentTicket !== "End") {
            spacesTaken++
            if (currentTicket === "standard") {
                standartTicket += 1
            } else if (currentTicket === "student") {
                studentTicket += 1
            } else {
                kidTicket += 1
            }
            if (spacesTaken === spacesAvailable) {
                break;
            }
            currentTicket = input[index]
            index++
        }
        let percentFull = (spacesTaken / spacesAvailable) * 100
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`)
        movieTitle = input[index]
        index++

    }
    let totalTickets = studentTicket + standartTicket + kidTicket;

    console.log(`Total tickets: ${totalTickets}`)
    let standartPercent = (standartTicket / totalTickets) * 100
    let studentPercent = (studentTicket / totalTickets) * 100
    let kidPercent = (kidTicket / totalTickets) * 100
    console.log(`${studentPercent.toFixed(2)}% student tickets.`)
    console.log(`${standartPercent.toFixed(2)}% standard tickets.`)
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`)
}
solve(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"])