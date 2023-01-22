function solve (input){
    let index = 0
    let numBalls = Number(input[index])
    index++
    let colorBalls = input[index]
    index++
    let ballSum = 0
    let sum = 0
    let divided = 0
    let other = 0
    let redCount = 0
    let orangeCount = 0
    let yellowCount = 0
    let whiteCount = 0
    for(let i = 1 ; i <= numBalls ; i++){
        if(colorBalls === "red"){
            sum = sum + 5
            redCount++
        }else if(colorBalls === "orange"){
            sum = sum + 10
                orangeCount++
        }else if(colorBalls === "yellow"){
            sum = sum + 15
            yellowCount++
        }else if(colorBalls === "white"){
            sum = sum + 20
                whiteCount++
        }else if(colorBalls === "black"){
            sum = Math.floor(sum / 2)
                divided++
        }else {
            other++
        }
        colorBalls = input[index]
            index++ 

    }
    console.log(`Total points: ${sum}`)
    console.log(`Red balls: ${redCount}`)
    console.log(`Orange balls: ${orangeCount}`)
    console.log(`Yellow balls: ${yellowCount}`)
    console.log(`White balls: ${whiteCount}`)
    console.log(`Other colors picked: ${other}`)
    console.log(`Divides from black balls: ${divided}`)
}
solve(["3",
"white",
"black",
"pink"])
