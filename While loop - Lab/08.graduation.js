function graduation (input){
    let index = 0;
    let name = input[index];
    index++
    let year = 1
    let sumGrade = 0
    let examFailed = 0
    while(year <= 12){
        let currentGrade = Number(input[index])
        index++
        if(currentGrade < 4){
            examFailed++
            if(examFailed == "2"){
                break;
            }
            continue;
        }
        sumGrade += currentGrade
        year++
          
    }
    if(examFailed != "2"){
    let averageGrade = sumGrade / 12
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }else {
        console.log(`${name} has been excluded at ${year} grade`)
    }
}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])