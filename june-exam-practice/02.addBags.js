function solve(input) {
    let baggageOver20Kg = Number(input[0])
    let bagsKg = Number(input[1])
    let daysUntilTrip = Number(input[2])
    let bagsCount = Number(input[3])
    let total
    if (bagsKg <= 10) {
        total = baggageOver20Kg * 0.20
    } else if (bagsKg <= 20) {
        total = baggageOver20Kg / 2
    } else {
        total = baggageOver20Kg
    }
    if (daysUntilTrip > 30) {
        total = total + (total * 0.10)
    } else if (daysUntilTrip >= 7 && daysUntilTrip <= 30) {
        total = total + (total * 0.15)
    } else if (daysUntilTrip < 7) {
        total = total + (total * 0.40)
    }
    total = total * bagsCount
    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`)
}

solve(["25.50",
    "5",
    "36",
    "6"])
