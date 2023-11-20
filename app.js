let number = prompt("enter a number");
console.log(typeof number);
console.log(number++);

console.log(Number("123"));
console.log(Number("12.3"));
console.log(Number("0"));
console.log(Number(" "));
console.log(Number(""));
console.log(Number(null));

const dolar = "1000";
const euro = "2000";

const totalMoney = Number(dolar) + +euro;

console.log(totalMoney);
