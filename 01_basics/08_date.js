const myDate = new Date() // date declearation by object
console.log(myDate);
console.log(typeof myDate); // object
console.log(myDate.toString());
console.log("toDateString = ",myDate.toDateString());
console.log("ISO string = ",myDate.toISOString());
console.log("toLocalDateString = ",myDate.toLocaleDateString());
console.log("toLocalString",myDate.toLocaleString());
console.log("toTimeString",myDate.toTimeString());


// to define a specific date 
const independentDay = new Date(1947, 7, 15, 24, 0)
console.log("The independent day of INDIA =",independentDay.toLocaleString()); // The independent day of INDIA = 8/16/1947, 12:00:00 AM

// different syntaxtes
const dateSyntaxes = new Date('2001-9-16')// yyyy-mm-dd
console.log(dateSyntaxes.toDateString());// Sun Sep 16 2001

// Time stamps in date
console.log(Math.round(Date.now()/1000));
const theDate = new Date()
console.log(theDate.getDate());
console.log(theDate.getMonth());


console.log(theDate.toLocaleString('default',{
    weekday:"long"
}));



