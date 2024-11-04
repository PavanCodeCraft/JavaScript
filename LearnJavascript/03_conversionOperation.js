// let score = 63
// let marks = "55" // this is number but we have write in double quote so this will treat as string
// let name = "Pavan"  // this is not convertable into number so this will return a NaN value
// console.log(typeof score);
// console.log(typeof (marks)); // or console.log(typeof (marks);

// Yaha pe humko pata tha datatype but kya ho jab humko pata na ho ki aane wali value kis data type ki hogi but humko perform number ya kisi or datatype pe karna ho waha pe hum datatype conversion use karte hai

// let valueInNumber = Number(marks) //Number ka N capital hi hoga
// console.log(typeof (valueInNumber));


// Note:

// "33" => 33 
// "33ab" => NaN ( will reture Not a Number) but still jab hum iska type dekhenge to wo number is hogi so at the type of conversion make sure it is not a NaN value 
// true => 1 ; false => 0 using this => let valueInNumber = Number(marks)

// some more conversions

let isLoggedIn = "Pavan"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// conclusions

// 1 => ture, 0 => false
// "" => false 
// "Pavan" => ture 

// ************************** Operations ******************************

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = "Pavan"
console.log(str1+str2); //Hello Pavan

console.log("1" + 2); //reture 12
console.log (1 + "2"); //return 12
console.log("1" + "2"); //return 12
console.log(1 + "2"); //return 12
console.log ("1" + 2 + 3); // return 123
console.log(1 + 2 + "3"); //return 33  visit "ecma" documentation for more detail

