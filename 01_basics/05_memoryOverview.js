// Welcome everyone!
// So there are 2 types of memory.
// 1. Stack for primitive data-type
// 2. Heap for non-primitive data-type

// So for the primitive data-type (Stack), the copy of the given data is given, means it does not change the actual value. Let me show you👇🏻

let carOne = "Audy"
let carTwo = carOne
console.log(carTwo); // Audy

carTwo = "BMW"
console.log(carTwo); // BMW

console.log(carOne); // Audy

// that means the 1st value has not changed. It will be more clear if we see this example👇🏻

// Here we are using obj (non-primitive) to show the difference ↙️

let user1 = {
    name: "mtrencher",
    ID: 16092001
}

let user2 = user1 // we are assigning the same value to the user2.
// since this is a non-primitive data-type, the value stored in the "Heap memory", wehere the reference will be pass.
// So, If we change in one's value, the outher's value should be change.

// let's see what is in the user2
console.log(user2); // { name: 'mtrencher', ID: 16092001 }
// let's try to manipulate the value of user2 and see what is the change we have got⁉️
user2.name = "SoundWave" // Let me know if you know the shoundWave from "Transformers" 😉
console.log(user1.name); // SoundWave
console.log(user1); // { name: 'SoundWave', ID: 16092001 }

// And the value is changed.
// I hope we got the overview how memory works.

