function walking(input) {
    index = 0;
    let steps = input[index];
    index++;
    let sumSteps = 0
    while (steps !== "Going home") {
        steps = Number(steps)
        sumSteps += steps
        if (sumSteps >= 10000) {
            let stepsAboveGoal = sumSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsAboveGoal} steps over the goal!`)
            return;
        }
        steps = input[index];
        index++

    }
    let stepsGoingHome = Number(input[index]);
    sumSteps += stepsGoingHome;
    if (sumSteps >= 10000) {
        let stepsAboveGoal = sumSteps - 10000;
        console.log("Goal reached! Good job!");
        console.log(`${stepsAboveGoal} steps over the goal!`)
    } else {
        let stepsToReachGoal = 10000 - sumSteps;
        console.log(`${stepsToReachGoal} more steps to reach goal.`)
    }
}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])