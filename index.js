import inquirer from "inquirer";
let Currency = { "USD": 1, "EUR": 0.91, "GBP": 0.76, "PKR": 280, "INR": 74.57 };
const answer = await inquirer.prompt([
    { name: "fromCurrency", type: "list", message: "Enter from Currency", choices: ["USD", "EUR", "GBP", "PKR", "INR"] },
    { name: "toCurrency", type: "list", message: "Enter to Currency", choices: ["USD", "EUR", "GBP", "PKR", "INR"] },
    { name: "amount", type: "number", message: "Enter amount" },
]);
let fromAmount = Currency[answer.fromCurrency];
let toAmount = Currency[answer.toCurrency];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
