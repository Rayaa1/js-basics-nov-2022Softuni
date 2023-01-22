function solve (input){
    let index = 0
    let juryCount = Number(input[index])
    index++
    let presentationName = input[index]
    index++
    let count = 0
    let sumGrades = 0
    let totalGrades = 0

    while(presentationName !== "Finish"){
        count ++
        for(let gradeNum = 1 ; gradeNum <= juryCount ; gradeNum++){
            let grade = Number(input[index])
            index++
            sumGrades += grade
        }
        let average = sumGrades / juryCount
        console.log(`${presentationName} - ${average.toFixed(2)}.`)
        totalGrades += sumGrades
        sumGrades = 0
        presentationName = input[index]
        index++
    }
    let totalAverage = totalGrades / count / juryCount
    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`)
}