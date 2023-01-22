function tennisRanklist (input){
    let tournamentCount = Number(input[0]);
    let startingPoint = Number(input[1]);
    let pointWon = 0
    let tournamentWon = 0
    for(let i = 2; i < input.length ; i++){
        let status = input[i]
        if(status === "W"){
            pointWon += 2000
            tournamentWon++;
        }else if(status === "F"){
            pointWon += 1200
        }else if(status === "SF"){
            pointWon += 720
        }
    }
    let totalPoint = pointWon + startingPoint;
    console.log(`Final points: ${totalPoint}`)
    let average = Math.floor(pointWon / tournamentCount)
    console.log(`Average points: ${average}`)
    let percentTournament = tournamentWon / tournamentCount * 100;
    console.log(`${percentTournament.toFixed(2)}%`)
}
tennisRanklist(["5","1400","F",

"SF",

"W",

"W",

"SF"])