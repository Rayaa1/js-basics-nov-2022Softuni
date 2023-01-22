function solve(input){
    let index = 1;
    let n = Number(input[0])
    let sum = 0;
    while(sum < n){
        let totalSum = Number(input[index])
        sum +=totalSum
        index++
    }
console.log(sum)
}
solve([20,
    1,
    2,
    3,
    4,
    5,
    6])