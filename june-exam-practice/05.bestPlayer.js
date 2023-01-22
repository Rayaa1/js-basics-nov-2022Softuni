function solve (input){
    let index = 0
    let footbaler = input[index]
    index++
    let goals = Number(input[index])
    index++
    let best = 0
    let nameBest = ""
    while(footbaler !== "END" && goals <= 10){
        if(goals > best){
            best = goals
            nameBest = footbaler
        }
        footbaler = input[index]
        index++
        goals = Number(input[index])
        index++
    }
    
    if(goals > best){
        console.log(`${footbaler} is the best player!`)
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
        return;
    }else if(best >= 3){
        console.log(`${nameBest} is the best player!`)
        console.log(`He has scored ${best} goals and made a hat-trick !!!`)
    }else {
        console.log(`${nameBest} is the best player!`)
        console.log(`He has scored ${best} goals.`)
    }
}
solve(['Petrov',
    2,
    'Drogba',
    11
    ])

