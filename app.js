// let number = prompt("enter a number");
// console.log(typeof number);
// console.log(number++);

// console.log(Number("123"));
// console.log(Number("12.3"));
// console.log(Number("0"));
// console.log(Number(" "));
// console.log(Number(""));
// console.log(Number(null));

// const dolar = "1000";
// const euro = "2000";

// const totalMoney = Number(dolar) + +euro;

// console.log(totalMoney);

// const euroInt = parseInt(euro);
// console.log(euroInt);
// const dolarFloat = parseFloat(dolar);
// console.log(dolarFloat);

// console.log(parseFloat(null));
// console.log(parseFloat(""));

// const myNum = 2000.5;
// console.log(String(myNum));

// const calismaSuresi = prompt("Calisma Suresi");
// let maas = prompt("Maasini giriniz");

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log("Zamli maasiniz:", maas);
// } else {
//   console.log("Uzgunuz maasiniza zam yapamiyoruz", maas);
// }
// console.log("bye bye");

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log("Zamli maasiniz:", maas);
// }
// console.log("bye bye");

// const grade = prompt("please enter your grade:");
// let result = null;
// if (grade < 0) {
//   console.log("Grade can not be small than zero");
// } else if (grade < 40) {
//   result = "FF";
// } else if (grade <= 50) {
//   result = "DD";
// } else if (grade <= 65) {
//   result = "CC";
// } else if (grade <= 89) {
//   result = "BB";
// } else if (grade <= 100) {
//   result = "AA";
// } else {
//   console.log("Grade can not be bigger than 100");
// }

// if (result != null) {
//   console.log(`Your score:${result}`);
// }

// const n1 = +prompt("Num1:");
// const n2 = +prompt("Num2:");
// const n3 = +prompt("Num3:");

// if (n1 > n2) {
//   if (n1 > n3) {
//     console.log("Biggest:", n1);
//   }
// }

// if (n1 >= n2 && n1 >= n3) {
//   console.log("Biggest:", n1);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log("Biggest:", n2);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log("Biggest:", n3);
// }

// let biggest = n1;
// if (n2 >= biggest) {
//   biggest = n2;
// }
// if (n3 >= biggest) {
//   biggest = n3;
// }
// console.log(`${biggest} is biggest`);

const grade1 = prompt("please enter your grade:");

grade1 >= 50 ? console.log("SUCCEED") : console.log("FAILED");
const score = grade1 >= 50 ? "PASSED" : "FAILED";
console.log(score);

const score1 = grade1 >= 50 ? "SUCCEED" : "";
console.log(score1);

const speed = 110;
speed > 120
  ? console.log("speedy")
  : speed >= 90
  ? console.log("Normal")
  : console.log("Low Speed");

if (speed > 120) {
  console.log("speedy");
} else if (speed >= 90) {
  console.log("Normal");
} else {
  console.log("Low Speed");
}

let description = "";
const age = 19;
if (age >= 18) {
  description = "Adult";
}

age >= 18 && (description = "Adult");
console.log(description);

age >= 18 || (description = "young");
