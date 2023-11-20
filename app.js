// let number = prompt("enter a number");
// console.log(typeof number);
// console.log(number++);

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

const euroInt = parseInt(euro);
console.log(euroInt);
const dolarFloat = parseFloat(dolar);
console.log(dolarFloat);

console.log(parseFloat(null));
console.log(parseFloat(""));

const myNum = 2000.5;
console.log(String(myNum));

const calismaSuresi = prompt("Calisma Suresi");
let maas = prompt("Maasini giriniz");

if (calismaSuresi >= 10) {
  maas = Math.round(maas * 1.1);
  console.log("Zamli maasiniz:", maas);
} else {
  console.log("Uzgunuz maasiniza zam yapamiyoruz", maas);
}
console.log("bye bye");

if (calismaSuresi >= 10) {
  maas = Math.round(maas * 1.1);
  console.log("Zamli maasiniz:", maas);
}
console.log("bye bye");

const grade = prompt("please enter your grade:");
let result = "";
if (grade < 0) {
  console.log("Grade can not be small than zero");
} else if (grade < 40) {
  result = "FF";
} else if (grade <= 50) {
  result = "DD";
} else if (grade <= 65) {
  result = "CC";
} else if (grade <= 89) {
  result = "BB";
} else if (grade <= 100) {
  result = "AA";
} else {
  console.log("Grade can not be bigger than 100");
}
if (result != "") {
  console.log(`Your score:${result}`);
}
