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











