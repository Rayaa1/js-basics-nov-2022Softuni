function basketball (input){
    let training = Number(input[0]);
    let shoes = training -(training * 0.40);
    let suit = shoes - (shoes * 0.20);
    let ball = suit / 4;
    let acces = ball / 5;
    let total = training + shoes + suit + ball + acces;
    console.log(total);
}
basketball([365]);