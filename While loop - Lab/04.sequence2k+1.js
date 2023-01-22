function solve(input){
    let index = 0
    let n = Number(input[index])
    let sum = 1
    while(n >= sum){
        console.log(sum)
        sum = sum * 2 + 1 
    }
}
solve([3])