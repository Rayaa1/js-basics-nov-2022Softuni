function fishTank(input){
let length = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let procent = Number(input[3]);
let V = length * width * height;
let VLitres = V/1000;
let procentSum = procent/100;
let total = VLitres * (1-procentSum);
console.log(total);
}
fishTank([85,75,47,17]);