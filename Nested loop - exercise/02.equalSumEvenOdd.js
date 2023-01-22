function solve (input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = " ";
    for(let current = startNum ; current <= endNum ; current++){
        let currentNum = current.toString()
        let oddSum = 0
        let evenSum = 0
        
        for(let index = 0; index < currentNum.length ; index++){
            let currentDigit = Number(currentNum[index]);
            let position = index + 1
            if(position % 2 === 0){
                evenSum += currentDigit
            }else {
                oddSum += currentDigit
            }
        }
        if(oddSum === evenSum){
            result += `${currentNum} `
        }
    }
    console.log(result)
}