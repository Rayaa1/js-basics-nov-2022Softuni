function food(input){
    let chicken = Number(input[0]) * 10.35;
    let fish = Number(input[1]) * 12.40;
    let vegan = Number(input[2]) * 8.15;
    let menu =chicken + fish + vegan;
    let dessert = menu * 0.20 ;
    let total = menu + dessert + 2.50;
    console.log(total);
}
food([2,4,3])