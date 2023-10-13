const sideA = 5;
const sideB = 6;
const sideC = 7;
const s = (sideA + sideB + sideC) / 2;
const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
console.log("Площадь треугольника: " + area);

