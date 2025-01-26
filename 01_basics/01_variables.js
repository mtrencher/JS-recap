const userId = 7890; // value can not be changed
let userEmail = "ishan@google.com"; 
var userCity = "Kolkata"; 
userPasswors = "123456"; // this is not preferable way to declare variables

// spacial case
let college; // this will print undefined because there is no value is defined in the variable.


// userId = 2001 // TypeError
console.log(userId); 

// changing other values
userEmail = "mtrencher@abcd.com"
userCity = "Delhi"
userPasswors = "658975"

console.log(college); // undefined
console.table([userCity,userEmail,userPasswors ])

// Try not to use "var" because of scope problems, we will discuss in next chapters.

// difference between var, let and const in Js
// check the link to know more 👇🏻
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/