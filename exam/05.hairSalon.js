function solve(input) {
    let index = 0
    let goal = Number(input[index])
    index++
    let procedure = input[index]
    index++
    let act = input[index]
    index++
    let earnedMoney = 0

    while (procedure !== "closed" && goal > earnedMoney) {
        if (procedure === "haircut") {
            switch (act) {
                case "mens":
                    earnedMoney += 15
                    break;
                case "ladies":
                    earnedMoney += 20
                    break;
                case "kids":
                    earnedMoney += 10
                    break;
            }
        }

        if (procedure === "color") {
            switch (act) {
                case "touch up":
                    earnedMoney += 20
                    break;
                case "full color":
                    earnedMoney += 30
                    break;
            }
        }
        procedure = input[index]
        index++
        act = input[index]
        index++
    }

    if (goal > earnedMoney) {
        let moneyWant = goal - earnedMoney
        console.log(`Target not reached! You need ${moneyWant}lv. more.`)
        console.log(`Earned money: ${earnedMoney}lv.`)
    } else {
        console.log("You have reached your target for the day!")
        console.log(`Earned money: ${earnedMoney}lv.`)
    }
}