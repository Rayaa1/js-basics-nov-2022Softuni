function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++;
    let boxCount = Number(input[index]);
    index++;
    let totalSpace = width * length * hight
    let usedSpace = 0
    while (boxCount !== "Done" && totalSpace > usedSpace) {
        boxCount = Number(boxCount)
        usedSpace += boxCount;
        boxCount = input[index];
        index++
    }
    if (boxCount === "Done") {
        let leftSpace = totalSpace - usedSpace
        console.log(`${leftSpace} Cubic meters left.`)
    }
    if (usedSpace > totalSpace) {
        let needSpace = usedSpace - totalSpace
        console.log(`No more free space! You need ${needSpace} Cubic meters more.`)
    }
}
moving(["10",

    "10",

    "2", "20", "20", "20", "20", "122"])