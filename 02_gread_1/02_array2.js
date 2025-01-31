const marvel = ['iron man', 'thor', 'hulk']
const dcHeros = ['flash', 'bat man', 'super man']

// marvel.push(dcHeros)
// console.log(marvel); // becomes nested array, the 2nd array takes as a single elements.
// console.log(marvel[3][2]);

const allHeros = marvel.concat(dcHeros)
console.log(allHeros) // [ 'iron man', 'thor', 'hulk', 'flash', 'bat man', 'super man' ]

// spread values
const allNewHeros = [...dcHeros, ...marvel]
console.log(allHeros);

// the advantage of using spread operator is we can use multiple values init to murge into a single array

const numbers = [1,2,[3,4,[5,6],7,8,[4,6,[8,9,[10]]]]]
let falttedNumbers = numbers.flat(Infinity)
console.log("Flatted array: ",falttedNumbers);

// creating array from different types
const name = "mtrencher"
console.log(Array.from(name));

// of => creates array from multiple elements
const age1 = 10
const age2=  20
const age3=  30
const age4=  40

console.log(Array.of(age1, age2, age3, age4))



