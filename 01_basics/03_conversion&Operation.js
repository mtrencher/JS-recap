// Note => Remove comments depending on you usecase to know the answer. Do not remove all comments of together, it will lead you to confusion. 🔴🌟

let score = 45
//console.log(typeof(score)); // we can see this is a number

// but what if 
let newScore = "45" // what it will be? let's check 👇🏻
//console.log(typeof newScore); // so if we pass the same value in cotation, it will be converted to the string...

// hmm but what if we don't want it to convert it into a string❓
let onlyNumber = Number(newScore)
//console.log(typeof onlyNumber); // hmm.. so that's how we convert a string value to number...

// question, what if we have alphabet in the string?
let mixedValue = "45mtrench" // as we can see this is a string value, but we can convert it right? let's do it.
let numberMixedValue = Number(mixedValue)
//console.log(typeof numberMixedValue); // what?? now this is a number? how? let's check what is in the "numberMixedValue"
//console.log(numberMixedValue); // NaN 

// NaN? not a number? what is going on?? just before we saw that we have a number value. But now this is not a number?? **
// Ans => NaN is a special value in JavaScript that indicates an invalid mathematical operation or failed number conversion. In this case, since "45mtrench" is not a fully numeric string, the Number() function cannot figure out how to convert it into a number, so it defaults to returning NaN.

// For null**
let score1 = null
//console.log("This is the type of score1",typeof(score1)); // as we have seen in previous file that this is a "object" type.
// But what if we convert it into a number?
let numScore = Number(score1)
//console.log(typeof(numScore)); // so it can be converted to a number. hmmm... interesting.. let's check how it looks like after conversion?
//console.log(numScore); // so this is "0"
// question, does that mean null = 0 ?
// Ans => After the conversion, numScore is of type "number". This confirms that null was successfully converted to a numeric value. The value of numScore is 0 because, null is treated as 0 when converted to a number. 

// but null does not equal 0 in JavaScript.🔴🔴 Here is why 👇🏻
//console.log(null == 0); // false
//console.log(null === 0); // false // this is the stric type checking.
// The only time null is treated as 0 is during explicit conversion to a number using Number() or when used in mathematical operations


// For undefined
let score2; // since we have not define any value it should be undefined. Let's check
//console.log(typeof(score2)); // Yes❗we are right this is "undefined", but what if we convert it into number❓

let numScore2 = Number(score2);
//console.log(typeof numScore2); // so that means it can be converted to number. But what is in there? let's see👇🏻
//console.log(numScore2); // again "NaN"
// In this case, JavaScript doesn't know how to map undefined to a meaningful number, so it defaults to returning NaN.⭐

// For boolean value
let boolValue = true
//console.log(typeof boolValue); // we know that this is a boolean value, let's convert it into numbers..
let numBoolValue = Number(boolValue);
//console.log(numBoolValue); // hmm.. so the ans is 1️⃣ 

// Try with the false value and let me know...

// For string 
let name = "mtrencher"
let numName = Number(name)
//console.log(numName); // NaN, since I have given you this much example your job is to let me know why this is NaN⁉️

// for boolean conversion🌟
let val1 = 1
let boolVal1 = Boolean(val1)
//console.log(boolVal1); // true
// Now we are smar enough to get if 0, then false, if 1 then true. what if 👇🏻

let str = "" // this is an empty string, before run the code try to answet it.
let boolStr = Boolean(str)
//console.log(boolStr); // interesting... but what if 👇🏻

let strVal = "mtrencher"
let boolStrVal = Boolean(strVal)
//console.log("This is the value of boolStarVal", boolStrVal); // true, New thing to learn right? 😉

// Wait that does not ends here, what if 👇🏻
let val2 = 2
let boolVal2 = Boolean(val2)
//console.log(typeof boolVal2); // boolean
//console.log("this is the convertion of 2",boolVal2); // this is also true. Wow that means only 0 it reflect false otherwise true..

// string conversion
let age = 23
let strAge = String(age)
//console.log(typeof strAge);
//console.log(strAge); // this converted as a string..This one pretty simple rignt? 


//================================Operations===================================

let digit = 10
let negativeDigit = -digit
//console.log(negativeDigit); // I know you are smart enough to gess the answer.

// there are some basic operations although not much tough but there could be some different things you might know👇🏻

// console.log(10 + 10);
// console.log(10 - 10);
// console.log(10 * 10);
// console.log(10 ** 2); // Power
// console.log(10 / 2);
// console.log(10 % 2); // remainder

// these are the basic operations, let's jump into some interesting thing 😉👇🏻
// what if we try to concate with string with numbers?
// But firest concatination in string means murging 2 string,
// eg =>
    console.log("Wellcome to " + "mtrencher" + " Here we dive in the depth of the knowledge"); // this is the concatination, we are murging different strings together.

// Now 👇🏻
//console.log("10" + 1); // 101, what? It behaves like string concatination.. so what if we do the opposite of it?
//console.log(10 + "1"); // still same 🤔 hmm.. but what if 👇🏻
//console.log("1" + 10 + 2); // 1102, so does that means if we have one string in the operation, it will convert all other elements to string?
// the ans is No🙅🏻‍♂️, let me show you.

//console.log(1 + 2 + "3"); // 33, what? now it's getting confusing. Let me explain this to you =>
    //The evaluation starts from the left, so in the 1st and 2nd value there are numbers, so the values are added like numbers but when the third value comes, since it is a string the all value means added value "3" is converted to the string and the concatination occurs. So the value becomes "33".

// still confusing? one last example:-
//console.log(1 + 2 + "3" + 3); // In the first the 2 values are added normally, now the string value has come, since we have got the string value the remaining values are converted to the sting and the adding becomes concatination. So the ans is 333

// Last few tricky things for this file =>
    console.log(+true); // 1, + operator convertes the type and we know the number value of the "true" is 1
    console.log(+false); // 0

    console.log(+""); // 0, you know why? same reason
    console.log(+"10"); //10, converted to the number

// That's it guies, lets meet on the next file 🤗
    
    
    















