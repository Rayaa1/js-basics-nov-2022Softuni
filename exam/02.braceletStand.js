function solve(input){
    let budget = Number(input[0])
    let moneyEarned = Number(input[1])
    let expenses = Number(input[2])
    let priceGift = Number(input[3])
    let total = 5 * budget
    let winMoney = 5 * moneyEarned
    let totalMoney = total + winMoney
    let priceWithoutExpenses = totalMoney - expenses;
    if(priceWithoutExpenses < priceGift){
        let need = priceGift - priceWithoutExpenses
        console.log(`Insufficient money: ${need.toFixed(2)} BGN.`)
    }else {
       console.log(`Profit: ${priceWithoutExpenses.toFixed(2)} BGN, the gift has been purchased.`)
    }

}