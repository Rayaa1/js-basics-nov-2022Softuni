function Market (input){
    let pricePerKgVegetables = Number(input[0]);
    let pricePerKgFruits = Number(input[1]);
    let totalKgVegetables = Number(input[2]);
    let totalKgFruits = Number(input[3]);
    let kgVegetables = pricePerKgVegetables * totalKgVegetables;
    let kgFruits = pricePerKgFruits * totalKgFruits;
    let sum =(kgFruits + kgVegetables) / 1.94;
    console.log(sum.toFixed(2))
}
Market([0.194,19.4,10,10])