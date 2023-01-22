function solve (input){
    let index = 0;
    let num = input[index];
    index++
    let primeSum = 0
    let nonPrimeSum = 0
    while (num !== "stop"){
        let currentNum = Number(num)
        if (currentNum < 0){
            console.log("Number is negative.")
            num = input[index]
            index++
            continue
        }
        let isPrime = true
        for (let currentDivisor = 2 ; currentDivisor < currentNum ; currentDivisor++ ){
            if(currentNum % currentDivisor === 0){
                isPrime = false
                break;
            }
            
        }
        if(isPrime === true){
            primeSum += currentNum
        }else {
            nonPrimeSum += currentNum
        }

     num = input[index]
     index++
    }
console.log(`Sum of all prime numbers is: ${primeSum}`)
console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}