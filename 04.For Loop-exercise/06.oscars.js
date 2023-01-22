function solve (input){
    let name = input[0];
    let pointAcademy = Number(input[1]);
    let jury = Number(input[2]);
    for( let i = 3; i < input.length ; i += 2){
        let juryName = (input[i]);
        let juryPoints = Number(input[i + 1]);
        let result = juryName.length * juryPoints / 2
        pointAcademy += result
        if(pointAcademy > 1250.5){ 
           console.log(`Congratulations, ${name} got a nominee for leading role with ${pointAcademy.toFixed(1)}!`)
           return;
        }
    }
    let pointNeed = 1250.5 - pointAcademy
    console.log(`Sorry, ${name} you need ${pointNeed.toFixed(1)} more!`)
}
solve(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])