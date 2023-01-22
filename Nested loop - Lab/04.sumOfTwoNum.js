function solve(input) {
    let firstNum = Number(input[0]);
    let finalNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let isValid = false
    let combination = 0

    for (let i = firstNum; i <= finalNum; i++) {
        for (let j = firstNum; j <= finalNum; j++) {
            combination++
            if (i + j === magicNum) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`)
                isValid = true
                break;
            }
        }
        if (isValid) {
            break;

        }
    }
    if (isValid === false) {
        console.log(`${combination} combinations - neither equals ${magicNum}`)
    }
}
solve(["1",

    "10",

    "5"])