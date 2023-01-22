function fishLand(input){
    let pricePerKgMackerel = Number(input[0]);
    let pricePerKgSprinkle = Number(input[1]);
    let kgBonito = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMussels = Number(input[4]);
    let priceBonito = pricePerKgMackerel + pricePerKgMackerel * 60/100;
    let totalPriceBonito = kgBonito * priceBonito;
    let priceSafrid = pricePerKgSprinkle + pricePerKgSprinkle * 80/100;
    let totalPriceSafrid = kgSafrid * priceSafrid;
    let priceMussels = kgMussels * 7.50;
    let bill = totalPriceBonito + totalPriceSafrid + priceMussels;
    console.log(bill.toFixed(2));
}