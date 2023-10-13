const loanAmount = 200000; 
const interestRate = 0.1;
const loanTerm = 2; 
const monthlyInterestRate = interestRate / 12;
const totalPayments = loanTerm * 12;
const annuityFactor = (monthlyInterestRate * ((1 + monthlyInterestRate) ** totalPayments)) / (((1 + monthlyInterestRate) ** totalPayments) - 1);
const monthlyPayment = loanAmount * annuityFactor;
const totalPayment = monthlyPayment * totalPayments;
const overpayment = totalPayment - loanAmount;
console.log("Ежемесячный платеж: " + monthlyPayment + " рублей");
console.log("Общая сумма выплаты по кредиту: " + totalPayment + " рублей");
console.log("Переплата по кредиту: " + overpayment + " рублей");

