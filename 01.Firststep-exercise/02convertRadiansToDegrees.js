function convert(input){
    let Radical = Number(input[0]);
    let Degrees = Radical * 180 / Math.PI;
    console.log(Degrees);
}
convert([3.1416]);