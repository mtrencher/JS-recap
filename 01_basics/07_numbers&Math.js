let value = 100
//console.log(typeof value); // number, ofcource we can see it 
// But we can explecitly define numbers as well, how ❓ 👇🏻

let score = new Number(55)
//console.log(score); // [Number: 55]

// converting number to string
let stringScore = score.toString()
//console.log(stringScore);
//console.log(typeof stringScore); // now this is string. Buy this we can use multiple properties of string here.
//console.log(value.toFixed(3)); // 100.000

let presVal1 = 2323.5678
//console.log(presVal1.toPrecision(6));// 2323.57
let presVal2 = 123.7
//console.log(presVal2.toPrecision(3)); // 124, means it rounds off the number.

let hund = 10000000
//console.log(hund.toLocaleString('en-In')); // 1,00,00,000 (Indian standard)

//===================Maths======================
// console.log(Math.abs(-400)); // 400, converts the negative value to positive.
// console.log(Math.round(7.1)); // 7
// console.log(Math.ceil(7.1)); // 8, upper value.
// console.log(Math.floor(7.9)); // 7, Lower value.

// Random
console.log(Math.random()); // value varies from 0 to 1
console.log((Math.random() * 10) + 1); // now the value will never be "0"
console.log(Math.round(Math.random() * 10) + 1); // Now the value is rounded. Also we can use floor or ceil values.

// Some experiments 😶‍🌫️
let min = 5
let max = 50
// we want that atlest min value should be 5 in the random value.
console.log(Math.floor(((Math.random() * 10) + min))); // we can see the minimul value is 5 here.

// Now it's your job to make the value should be under maximum value. 🫵🏻




// Link to read more => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math





