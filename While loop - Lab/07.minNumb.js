function minNumbers (input){
    let index = 0;
    let n = input[index];
    let min = Number.MAX_SAFE_INTEGER
    while(n !== "Stop"){
        let num = Number(n)
        if(num < min){
            min = num;
        }
        n = input[index];
        index++
    }
    console.log(min)
}
minNumbers(["-10", "20", "-30", "Stop"])
