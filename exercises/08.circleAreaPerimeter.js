function circle (input){
    let r = Number(input[0]);
    let perimeter = Math.PI * (2*r);
    let area = Math.PI * Math.pow(r,2);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
circle([3])