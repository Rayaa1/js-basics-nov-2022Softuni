function vacation(input) {
    index = 0;
    let moneyNeed = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let sum = Number(input[index]);
    index++
    let dayCount = 0;
    let daySpend = 0
    while (availableMoney < moneyNeed) {
        dayCount++;
        if (action === "spend") {
            if (sum < availableMoney) {
                availableMoney = availableMoney - sum;
            } else if (sum > availableMoney) {
                availableMoney = 0
            }
            daySpend++
        } else if (action === "save") {
            availableMoney += sum;
            daySpend = 0
        }
        if (daySpend === 5) {
            console.log("You can't save the money.");
            console.log(dayCount);
            return;
        }
        action = input[index]
        index++
        sum = Number(input[index]);
        index++
    }
console.log(`You saved the money for ${dayCount} days.`)
}



vacation(["2000", "1000",  "spend",  "1200",  "save",  "2000"])