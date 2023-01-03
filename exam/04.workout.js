function solve(input){
    let days = Number(input[0])
    let kilometres = Number(input[1])
    let index = 2
    let procent = Number(input[index])
    index++
    let total = 0
    let km = 0
    for(let i = 0 ; i <= days ; i++){
        if(i === 0){
            total = kilometres
            km = total
            continue;
        }
        total += (procent/100 * total)
        km = total + km
        procent = Number(input[index])
        index++
    }
    if(km >= 1000){
        let MoreKm = km - 1000
        console.log(`You've done a great job running ${Math.ceil(MoreKm)} more kilometers!`)

    }else {
        let need = 1000 - km
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(need)} more kilometers`)
    }
}