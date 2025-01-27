let id = "mtrencher" // string
let age = 23 // number
let isLoggiedIn = true // boolean
let noNumber = NaN // not a number //type => undefined
let a = undefined // undefined // type => undefined
let b = null // standalone value also a data type // type => object
let s = Symbol // uses for uniquiness // type => function 

console.table([id,age, isLoggiedIn, noNumber, a, b, s])
// these are the primitive data-types

//console.log(typeof a);


// there are other data types as well but as a begunder its good to know but, we are not going to use it righ now
// eg: bigint, symbol 

// task =>
    // check the type of all the datatype showing in the upwords.
// hint => use "typeof" 🤫

// ====================Theory====================
// There are mainly 2 type of data-type => 1. Primitive, 2. Non-Primitive (reference type)
// the data type are divivded base on call by value and call by reference.
// In the call by value the copy of data is given to the user not the actual one.
// In the call by reference, the memory address is given to the user.

// there are 7 primitive data-type => String, Boolean, null, undefined, BigInt, Symbol, Number
// Non-primitive => array, object, function.