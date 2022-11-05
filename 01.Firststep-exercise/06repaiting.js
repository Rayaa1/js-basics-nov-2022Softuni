function repainting (input){
    let nailon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let nailonSum = (nailon + 2) * 1.50;
    let paintSum = (paint * 0.1 + paint) * 14.50;
    let thinnerSum = thinner * 5.00;
    let materialsSum = nailonSum + paintSum + thinnerSum + 0.40;
    let making = (materialsSum * 0.3) * hours;
    let total = materialsSum + making;
    console.log(total);
}
repainting([10,11,4,8])