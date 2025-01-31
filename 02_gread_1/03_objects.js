// singleton
// constructor method through object creations
//Object.create


// object literals
const user = {
    name: 'mtrencher',
    age: 23,
    email : "mtrencher@mtrench.com",
    location: "Kolkata",
    isLoggedIn: true,
    weekDays: ["sat", "Sun"],
    "fev food": "Biriyani" // special type 
}

//console.log(user);
//console.log(user.email);
//console.log(user["fev food"]); // only that's how we can access it 

// how to use symbol in the object
const symbol = Symbol("value-1")

const user1 = {
    name: 'themtrencher',
    age: 23,
    email : "themtrencher@mtrench.com",
    location: "Kolkata",
    isLoggedIn: true,
    weekDays: ["sat", "Sun"],
    "fev food": "Biriyani", // special type ,
    [symbol]: "key"
}
console.log(user1);

// changing value in the object
user1.isLoggedIn = false
console.log(user1);

// we can freez any object
Object.freeze(user1)

// now we can to change any valuse inside the object
user1.location = 'Delhi'
console.log(user1); // does not propagate the value

const data = {
    userName: 'potato',
    age: 23
}

// we are inserting a function inside the data object
data.message = function(){
    console.log(`wellcome user ${this.userName}`);   
}

console.log(data);
console.log(data.message());
