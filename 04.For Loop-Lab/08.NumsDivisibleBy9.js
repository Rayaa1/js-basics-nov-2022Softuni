function solve(input){
    let lowerNum = Number(input[0]);
    let largeNum = Number(input[1]);
    let sum = 0;
    let outputNum = ""
    for(let i = lowerNum; i <= largeNum; i++){
        if(i % 9 === 0){
            sum += i;
            outputNum += i + "\n"
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNum);

}
solve(["100", "200"])