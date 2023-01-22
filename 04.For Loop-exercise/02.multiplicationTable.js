function solve (input){
    let n = Number(input);
    for(let i = 1 ; i <= 10 ; i++){
        let result = i * n
        console.log(`${i} * ${n} = ${result}`)
    }
}
solve([5])