const totalBill = 3500; 
const tipAmount = 500; 
const numberOfPeople = 8; 
const totalAmount = totalBill + tipAmount;
const amountPerPerson = totalAmount / numberOfPeople;
console.log("С каждого по " + amountPerPerson + " рублей, при общем счёте " + totalBill + " рублей и чаевыми " + tipAmount + " рублей.");
