function solve(input){
    let n = Number(input[0]);
    let number = 0;
    for (i = 0; i <= n; i += 2){
        console.log(Math.pow(2,i));
    }
}
solve([3])