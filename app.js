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
  maas = maas * 1.1;
  console.log("Zamli maasiniz:", maas);
} else {
  console.log("Uzgunuz maasiniza zam yapamiyoruz", maas);
}
