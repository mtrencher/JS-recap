// array in javascript
// basically we can store multiple element in a single variable
// elements could be different data-typs
// in JavsScript arrays are resizable
// copy operation in array = Shallow copy, means reference type


const myArr = [1, 2, 3, 4]
//console.log(myArr); // same data-type
//console.log(typeof myArr); // and the type is object

// another way to decleare array
const heros = new Array("ironman", "thor", "hulk")
//console.log(heros);

// using different datatypes
const myArr1 = [12, 4, 'mtrencher', true, 10.2]
//console.log(myArr1);

// different methods

// 1. length
console.log(heros.length);

// 2. indexing
console.log(heros[2]);

// 3. insertion (push)
myArr.push(5)
myArr.push(6)
console.log("after pushing: ",myArr);

// 4. deletion (pop)
myArr.pop() // delete from the end
console.log("after popping:",myArr);

// 5. insertion at the head (unshift)
myArr.unshift(7)
myArr.unshift(7)
console.log("Unsgifted: ",myArr);

// 6. deletion from head (shift)
myArr.shift()
console.log("shifted:", myArr);

// coperation type
// 7. includes, it returns boolean
console.log(myArr.includes(5))

// 8. indexOf, returns (-1) if the value is not present, otherwise the index
console.log(myArr.indexOf(100)); // -1
console.log(myArr.indexOf(5));

// 9. join, it can join based on some input and convert it into a string.
const arr1 = [1,2,3,4]
console.log(arr1.join('_')); // 1_2_3_4
console.log(typeof arr1.join()); // string

// 10. slice and splice
// slice
const numbers = [10,9,8,7,6,5,4,3,2,1]
console.log("sliced number: ",numbers.slice(3, 6));
console.log("unchanged: ", numbers); // main array will be unchanged

const numbers1 = [11,12,13,45,10,65]
console.log("spliced number: ",numbers1.splice(1, 4));
console.log("changed: ",numbers1); // splice manipulates original array

