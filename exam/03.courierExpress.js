function express(input) {
    let weight = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);
    let price = 0;
 
    switch (type) {
        case "standard":
            if (weight < 1) {
                price = 0.03 * distance;
            } else if (weight < 10) {
                price = 0.05 * distance;
            } else if (weight <= 40) {
                price = 0.1 * distance;
            } else if (weight <= 90) {
                price = 0.15 * distance;
            } else if (weight <= 150) {
                price = 0.2 * distance;
            }
            break;
        case "express":
            if (weight < 1) {
                price = (0.03 * distance) + (0.8 * 0.03 * weight * distance);
            } else if (weight < 10) {
                price = (0.05 * distance) + (0.4 * 0.05 * weight * distance);
            } else if (weight <= 40) {
                price = (0.1 * distance) + (0.05 * 0.1 * weight * distance);
            } else if (weight <= 90) {
                price = (0.15 * distance) + (0.02 * 0.15 * weight * distance);
            } else if (weight <= 150) {
                price = (0.2 * distance) + (0.01 * 0.2 * weight * distance);
            }
            break;
    }
 
    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}