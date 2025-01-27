// Strings are pretty simple, as we have already used it.
let string1 = "Welcome to the mtrencher" // basic string declearation.
//console.log(string1);

// let me show you another ways to decleare string.
let string2 = new String('Hey everyone🤗')
console.log(string2); // these are pretty much same.

// Now days in ES6 methods we will be defining string smart way 😎
let userName = `mtrencher`
let age = 23

console.log(`Welcome to the ${userName}, My age is ${age}`); // Yup! that's easy it is.

// ====================Methods in string================================
// There are severeal methods, uff! let me show you some👇🏻

let string3 = `We are here to learn JavaScript`
console.log(string3.length); // 31, It shows the length of the whole string.
console.log(string3.indexOf("l")); // 15, shows the index of the character.
console.log(string3.charAt("7")); // h, shows the character at a specific index.
// and there are lots of more.
// Let me give you some interesting examples
console.log(string3.substring(0, 20)); // We are here to learn, basically it cuts the string.
console.log(string3.slice(5, 10)); // e her, almost same like substring, although we can use negative indexing
let string4 = `  wassup? How are you doing    ` // as we can see it has some extra spaces, the tream function cuts the extra spaces from fron and the end
console.log(string4.trim()); // wassup? How are you doing

let url = `facebook.com&profile`
console.log(url.replace('&', '/')); // facebook.com/profile

let myString = `We-love-you-3000`
console.log(myString.split('-')); // [ 'We', 'love', 'you', '3000' ], it converts the string into aray and seperated by '-' 

// go read more => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

// Remainder => Start practicing ES6 methods, you look smart😎







