function newHouse(input) {
    let flowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice;
    switch (flowers) {
        case "Roses":
            totalPrice = flowersCount * 5;
            if (flowersCount > 80) {
                totalPrice = totalPrice * 0.90
            }
        break;
        case "Dahlias":
            totalPrice = flowersCount * 3.80;
            if (flowersCount > 90) {
                totalPrice = totalPrice * 0.85 
            }
            break;
        case "Tulips":
            totalPrice = flowersCount * 2.80;
            if (flowersCount > 80) {
                totalPrice =totalPrice * 0.85
            }
            break;
        case "Narcissus":
            totalPrice = flowersCount * 3;
            if (flowersCount < 120) {
                totalPrice = (totalPrice * 0.15) + totalPrice
            }
            break;
        case "Gladiolus":
            totalPrice = flowersCount * 2.50;
            if (flowersCount < 80) {
                totalPrice = (totalPrice * 0.20) + totalPrice
            }
            break;   
    }
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}