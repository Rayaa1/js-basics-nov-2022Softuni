function solve(input){
    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let result = ""
    for(let current = firstNum ; current <= secondNum ; current++){
        let num = '' + current
        let oddNum = 0
        for(let index = 0 ; index <= num.length ; index++){
            let digit = num.toString()

            if(digit % 2 === 0){
                oddNum++
            }
            if(oddNum >= 4){
                result += `${num} ` 
            }
        }
    }
    console.log(result)
}
solve([2345,
    6789
    ])