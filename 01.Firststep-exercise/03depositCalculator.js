function calculate(input){
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let year = Number(input[2]);
    let sum = deposit + term * ((deposit * year) / 12);
    console.log(sum);
}
calculate("200","3","5.7");