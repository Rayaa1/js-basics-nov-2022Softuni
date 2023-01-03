function pcStore(input) {
    let cpuUsd = Number(input[0]);
    let videoUsd = Number(input[1]);
    let ramUsd = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    let cpuPrice = cpuUsd * 1.57;
    let videoPrice = videoUsd * 1.57;
    let ramPrice = ramUsd * 1.57 * ramCount;

    let cpuDiscounted = cpuPrice - (cpuPrice * discount);
    let videoDiscounted = videoPrice - (videoPrice * discount);

    let finalSum = cpuDiscounted + videoDiscounted + ramPrice;

    console.log(`Money needed - ${finalSum.toFixed(2)} leva.`)
}