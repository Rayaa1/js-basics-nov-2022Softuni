function solve(input) {
    let firstNumFirstDigitStart = Number(input[0])
    let firstNumSecondDigitStart = Number(input[1])
    let secondNumFirstDigitStart = Number(input[2])
    let secondNumSecondDigitStart = Number(input[3])
    let counter = 0
    let firstNum = 0
    let secondNum = 0

    for (let firstNumFirstDig = firstNumFirstDigitStart; firstNumFirstDig <= 8; firstNumFirstDig++) {
        if (counter == 6) {
            break;
        }
        for (let firstNumSecondDig = 9; firstNumSecondDig >= firstNumSecondDigitStart; firstNumSecondDig--) {
            if (counter == 6) {
                break
            }
            for (let secondNumFirstDig = secondNumFirstDigitStart; secondNumFirstDig <= 8; secondNumFirstDig++) {
                if (counter == 6) {
                    break;
                }
                for (let secondNumSecondDig = 9; secondNumSecondDig >= secondNumSecondDigitStart; secondNumSecondDig--) {
                    if (counter == 6) {
                        break;
                    }
                    if (firstNumFirstDig % 2 == 0 && firstNumSecondDig % 2 != 0 && secondNumFirstDig % 2 == 0 && secondNumSecondDig % 2 != 0) {
                        isValid = true
                        firstNum = firstNumFirstDig * 10 + firstNumSecondDig;
                        secondNum = secondNumFirstDig * 10 + secondNumSecondDig
                        if (firstNum == secondNum) {
                            console.log("Cannot change the same player.")
                        } else {
                            console.log(`${firstNumFirstDig}${firstNumSecondDig} - ${secondNumFirstDig}${secondNumSecondDig}`);
                            counter++
                        }

                    }
                }

            }
        }

    }
}  