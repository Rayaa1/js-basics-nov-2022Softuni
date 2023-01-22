function darts (input){
    let index = 0
    let startPoints = 301
    let playerName = input[index]
    index++
    let sector = input[index]
    index++
    let points = Number(input[index])
    index++
    let shots = 0
    let nevalidShots = 0
    while(sector !== "Retire" && startPoints !== 0){
        if(sector === "Triple"){
            if(points > startPoints){
                nevalidShots++
            }else{
            points = points * 3
            startPoints = startPoints - points
            shots++
            }
        }else if(sector === "Double" ){
            if(points > startPoints){
                nevalidShots++
            }else {
            points = points * 2
            startPoints = startPoints - points
            shots++
            }
        }else if(sector === "Single"){
            if(shots > startPoints){
                nevalidShots++
            }
            if(startPoints >= 1){
            startPoints = startPoints - points
            shots++
            }
        }
        sector = input[index]
        index++
        points = Number(input[index])
        index++
    }
    
    if(sector === "Retire"){
    console.log(`${playerName} retired after ${nevalidShots} unsuccessful shots.`)
    }else {
        console.log(`${playerName} won the leg with ${shots} shots.`)
    }
}

darts(["Stephen Bunting",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"7",
"Single",
"12",
"Double",
"1",
"Single",
"1"])


