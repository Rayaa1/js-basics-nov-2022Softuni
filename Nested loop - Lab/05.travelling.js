function travel(input) {
    let index = 0
    let destination = input[index];
    index++;
    let cost = Number(input[index]);
    index++;
    let sum = 0
    let isEnd = false
    while (destination !== "End") {
        while (sum < cost) {
            let savedMoney = input[index]
            if (savedMoney !== "End") {
                savedMoney = Number(input[index])
            } else {
                isEnd = true;
                break;
            } 
            index++
            sum += savedMoney
        }
        if(isEnd){
            break;
        }
        console.log(`Going to ${destination}!`)
        destination = input[index];
        index++;
        cost = Number(input[index]);
        index++
        sum = 0
        
    }
}
travel([])