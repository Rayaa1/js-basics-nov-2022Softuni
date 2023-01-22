 function convert(input){
    let celsium = Number(input[0]);
    let fahrenheit = celsium * 1.8 + 32;
    console.log(fahrenheit.toFixed(2))
 }
 convert([25])