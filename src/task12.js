const sideA = 5;
const sideB = 6;
const sideC = 7;
const s = (sideA + sideB + sideC) / 2;
const areaSquared = s * (s - sideA) * (s - sideB) * (s - sideC);
const area =areaSquared ** 0.5;
console.log("Площадь треугольника: " + area);
