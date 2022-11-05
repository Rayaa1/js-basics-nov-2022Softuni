function schoolMaterials (input){
    let pens = 5.80 * (input[0]);
    let markers = 7.20 * (input[1]);
    let preparation = 1.20 * (input[2]);
    let sale =(input[3]) / 100;
    let sum =pens + markers + preparation;
    let sumSale = sum * sale;
    let TotalSum = sum - sumSale;
    console.log(TotalSum);
}
schoolMaterials(["2","3","4","25"]);