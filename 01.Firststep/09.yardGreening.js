function a(input){
    let a = (input[0]) * 7.61;
    let b = a * 0.18;
    let area = a - b;
    console.log(`The final price is: ${area} lv.`); 
    console.log(`The discount is: ${b} lv.`);
}
a(["550"]);