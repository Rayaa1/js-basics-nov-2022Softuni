function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);
    let rent = 0;
    if(season === "Spring"){
        rent = 3000
    }else if(season === "Summer"){
        rent = 4200
    }else if(season === "Autumn"){
        rent = 4200
    }else if(season === "Winter"){
        rent = 2600
    }
    if(fisherCount <= 6){
        rent = rent * 0.90;
    }else if(fisherCount <= 11){
        rent = rent * 0.85;
    }else{
        rent = rent * 0.75;
    }
    if(fisherCount % 2 === 0 && season !== "Autumn"){
        rent = rent * 0.95;
    }
    let moneyLeft = budget - rent;
    let moneyNeed = rent - budget;
    if(budget >= rent){
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
}else {
    console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva.`)
}
}
fishingBoat(["2000", "Winter", 13])