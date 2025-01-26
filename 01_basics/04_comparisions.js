// Welcome everyone, Here we will see some comperision operations, there will be some basics and ltiile tricky comperision.

// Note => Remove comments depending on you usecase to know the answer. Do not remove all comments of together, it will lead you to confusion. 🔴🌟

// 1. Here are some basic comperision of same data-types
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 ==1);
// console.log(2 != 1);
// console.log(2 === 1);

// But the interesting part starts here👇🏻
// What if we had different data-types❓ 

//console.log("2" > 1); // true
//console.log("2" < 1); // false

// the string value converted to the number value for the operation.

// Note** =>
    // "===" this is a strict check where the data-type is also get checked.

// Here is another interesting comperision
// console.log(null > 0); // false
// console.log(null >= 0); // true
// console.log(null == 0); // false
// console.log(null === 0); // false
// console.log(null != 0); // true
// console.log(null < 0); // false
// console.log(null <= 0); // true

// Explanation is here👋🏻 [Read this carefully🔔]
// for the (null > 0), the ">" operator converts the null to number so, the comperision is like 0 > 0 ? => false.
// for the (null >= 0), again the null is converted to number, so the comperision is => 0 >= 0 ? (0=0) => true
// for the (null == 0), here "==" operator checkes if the both value are same, it does not convert null to a number, so the answer is false,
// for the (null === 0), this is a strict check and conversion not occurs, since the data-type and also the value is different the ans is false,
// for (null != 0), This is the inverse of (null == 0), in the (null == 0), it checks the value same or not and the result we have got is false, and the result is inversed, so the result is true.
// for (null < 0), similar reaseon like ">", since the null is converted to the number, comperision is => 0 < 0 ? => false.
// for (null <= 0), type conversion => 0 <= 0 ? => true.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined < 0);
// console.log(undefined <= 0); 
// for all the cases the ans is "false"
