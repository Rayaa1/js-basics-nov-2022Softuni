function solve(input){
    let index = 0;
    let n = input[index];
    let max = Number.MIN_SAFE_INTEGER;

    while (n !== "Stop"){
        let num = Number(n)
        if(num > max){
            max = num
        }
        n = input[index];
        index++
    }
    console.log(max)
}
solve(["-10", "20", "-30", "Stop"])