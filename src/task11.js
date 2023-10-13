const totalSeconds = 3665;
const hours = Math.round(totalSeconds / 3600);
const minutes = Math.round((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;
console.log("Время: " + hours + " ч " + minutes + " мин " + seconds + " сек");
