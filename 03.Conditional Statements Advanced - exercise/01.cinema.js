function cinema(input) {
let movieName = input[0];
let rows = Number(input[1]);
let colums = Number(input[2]);
let ticket = rows * colums 
let income = 0;
if(movieName === "Premiere"){
    income = ticket * 12.00;
}else if(movieName === "Normal"){
    income = ticket * 7.50;
}else if(movieName === "Discount"){
    income = ticket * 5.00;
}
console.log(`${income.toFixed(2)} leva`)
}
cinema(["Premiere",10,12])