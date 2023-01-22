function coins (input){
    let index = 0
    let totalcoins = Number(input[index])
    index++
    let coin = Math.trunc(totalcoins * 100)
    let coinUsed = 0
    while(coin > 0){
    if(coin >= 200){
        coin -=200
        coinUsed++
    }else if(coin >= 100){
        coin -= 100
        coinUsed++
    }else if(coin >= 50){
        coin -= 50
        coinUsed++
    }else if(coin >= 20){
        coin -= 20
        coinUsed++
    }else if(coin >= 10){
        coin -= 10
        coinUsed++
    }else if(coin >= 5){
        coin -= 5
        coinUsed++
    }else if(coin >= 2){
        coin -= 2
        coinUsed++
    }else if(coin >= 1){
        coin -=1
        coinUsed++
    }
}
    console.log(coinUsed)
}

coins([2.73])