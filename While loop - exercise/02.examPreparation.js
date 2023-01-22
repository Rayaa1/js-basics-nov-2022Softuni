function examPreparation(input) {
    let index = 0
    let maxBadGrades = Number(input[index])
    index++
    let problemName = input[index]
    index++
    let problemGrade = Number(input[index])
    index++
    let lastProblem = '';
    let badGrades = 0
    let gradeSum = 0
    let gradeCount = 0
    while (problemName !== "Enough") {
        lastProblem = problemName
        if (problemGrade <= 4) {
            badGrades++
        }
        if (badGrades === maxBadGrades) {
            console.log(`You need a break, ${maxBadGrades} poor grades.`)
            return;
        }
        gradeSum += problemGrade
        gradeCount++

        problemName = input[index]
        index++

        problemGrade = Number(input[index])
        index++
    }
    let averageGrade = gradeSum / gradeCount
    console.log(`Average score: ${averageGrade.toFixed(2)}`)
    console.log(`Number of problems: ${gradeCount}`)
    console.log(`Last problem: ${lastProblem}`)
} 