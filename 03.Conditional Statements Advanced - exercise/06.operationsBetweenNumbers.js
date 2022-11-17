function operationNum(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let symbol = input[2];
    let evenOrOdd
    switch(symbol){
        case "+":
            if((num1 + num2) % 2 == 0){
                evenOrOdd = "even"
                console.log(`${num1} ${symbol} ${num2} = ${num1+num2} - ${evenOrOdd}`)
            }else{
                evenOrOdd = "odd"
                console.log(`${num1} ${symbol} ${num2} = ${num1+num2} - ${evenOrOdd}`)
            }break;
        case "-":
            if((num1 - num2) % 2 == 0){
                evenOrOdd = "even"
                console.log(`${num1} ${symbol} ${num2} = ${num1-num2} - ${evenOrOdd}`)
            }else{
                evenOrOdd = "odd"
                console.log(`${num1} ${symbol} ${num2} = ${num1-num2} - ${evenOrOdd}`)
            }break;
        case "*":
            if((num1 * num2) % 2 == 0){
                evenOrOdd = "even"
                console.log(`${num1} ${symbol} ${num2} = ${num1*num2} - ${evenOrOdd}`)
            }else{
                evenOrOdd = "odd"
                console.log(`${num1} ${symbol} ${num2} = ${num1*num2} - ${evenOrOdd}`)
            }break;
        case "/":
            if(num2 !== 0){
            console.log(`${num1} / ${num2} = ${(num1/num2).toFixed(2)}`)  
            }else {
                console.log(`Cannot divide ${num1} by zero`)
            } 
            break; 
        case "%":
            if(num2 !== 0){
            console.log(`${num1} % ${num2} = ${num1%num2}`)
            }else{
                console.log(`Cannot divide ${num1} by zero`)
            }

    }
}

operationNum([10,0,"%"])