function housePainting(input){
let x = Number(input[0]);
let y = Number(input[1]);
let h = Number(input[2]);
let side = x * y ;
let window = 1.5 * 1.5;
let twoSide = 2*side - 2*window;
let backSide = x * x;
let allSide = 2 * backSide - 2.4;
let totalArea = twoSide + allSide;
let greenPaint = totalArea / 3.4;
let roof = 2 * (x*y);
let twoTriangle = 2 * (x * h/2);
let totalRoof = roof + twoTriangle;
let redPaint = totalRoof / 4.3;
console.log(greenPaint.toFixed(2))
console.log(redPaint.toFixed(2))
}
housePainting([1,2,3])