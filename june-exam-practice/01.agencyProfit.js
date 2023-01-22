function solve(input){
    let nameCompany = input[0]
    let adultsTicket = Number(input[1])
    let kidsTicket = Number(input[2])
    let priceAdultTicket = Number(input[3])
    let priceService = Number(input[4])
    let kidsTicketSum = priceAdultTicket * 0.30 
    let totalPriceForAdults = priceAdultTicket + priceService
    let totalPriceKids = kidsTicketSum + priceService
    let totalPriceTickets = (kidsTicket * totalPriceKids) + (adultsTicket * totalPriceForAdults)
    let moneyForCompany = totalPriceTickets * 0.20
    console.log(`The profit of your agency from ${nameCompany} tickets is ${moneyForCompany.toFixed(2)} lv.`)
}
solve(["WizzAir",
"15",
"5",
"120",
"40"])
