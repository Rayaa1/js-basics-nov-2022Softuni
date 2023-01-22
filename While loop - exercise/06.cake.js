function cake(input) {
    let index = 0
    let length = Number(input[index]);
    index++
    let width = Number(input[index]);
    index++
    let grabCake = Number(input[index])
    index++
    let totalPieces = length * width
    let total = 0
    while (grabCake !== "STOP" && grabCake < totalPieces) {
        total++
        totalPieces -= grabCake
        grabCake = input[index]
        index++
    }

    if (grabCake == "STOP") { console.log(`${totalPieces} pieces are left.`) }
    if (grabCake > totalPieces) {
        let needPieces = grabCake - totalPieces
        console.log(`No more cake left! You need ${needPieces} pieces more.`)
    }
}
cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"])