function lillysPresent (input){
    let age = Number(input[0]);
    let washmachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let Totalmoney = 0
    let birthdayMoney = 10
    for(let i = 1 ; i <= age ; i++){
        if(i % 2 === 0){
            Totalmoney = birthdayMoney + Totalmoney - 1
            birthdayMoney = birthdayMoney + 10
        }else {
            Totalmoney = Totalmoney + toyPrice
        }
    }    

     if(Totalmoney >= washmachinePrice){
        let moneyLeft = Totalmoney - washmachinePrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
     }else {
        let moneyNeed = washmachinePrice - Totalmoney
       console.log(`No! ${moneyNeed.toFixed(2)}`)
     }
}
lillysPresent(["10",
"170.00",
"6"])