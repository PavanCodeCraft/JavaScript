const score = 400 // javascript decide its datatype automatically no need to mention its datatype here is is number

// But what if you want intensionally derive and want some specific datatype so we can do by following method

const newScore = new Number(150)  // now we know this is number

const balance = new Number(100)
// console.log(balance);

// console.log(typeof(balance.toString()));  // Now this will return "string" because we convert number to string and now we can use "strings" properties here 

// console.log(balance.toString().length);  // return 3 and as we know lenght is the property of string

// console.log(balance.toFixed(2)); // return 100.00 fixed the value with two decimal points

const otherNumber = 145.124
// console.log(otherNumber.toPrecision(3)) // round off and give three digit number  here return 145

const anyNumber = 10000000
// console.log(anyNumber.toLocaleString('en-IN')); // "en-IN" will convert according to india standard if we not write it will convert according to defaluts like american (return => 1,00,00,000)



//**************************** Maths *********************************


// console.log(Math);  // It is of object datatype and have lots of function with maths but not here we will get run the same command in browser consol and we will get all the method and funtions associated with it

// console.log(Math.abs(-8));  // abs means absolute which convert only negative number into positive, positive will remain as such

// console.log(Math.round(4.6)); // round off according to our mathematics like 4.2 => 4 and 4.6 or 4.8 => 5
// console.log(Math.ceil(4.2)); // 4 se thoda bhi jyada hoga to wo agla number yani 5 hi lega it is like a ceiling function in maths

// console.log(Math.floor(4.9)); // convert 4 <= 4.9 < 5 ==> 4 will choose nearest lower number like a floor funtion in maths

// console.log(Math.max(1,4,5,3,9));  // return 9 as max value

// console.log(Math.min(1,4,5,3,9)); // return 1 as min value

console.log(Math.random());   // return value 0 <= Math.random < 1

let num = (Math.random())*10
console.log(num);

let newNum = Math.round(num)
console.log(newNum);  // return between o to 10 including 0 and 10 but this will not return any decimal value 

console.log((Math.random()*10) + 1); // To avoide 0 value we do +1

const min = 10
const max =20
console.log(Math.floor((Math.random()* (max-min) + 1 ) + min));  // max-min will give the range and +1 will make sure that value should not equal to 0 and +min will make sure that ki kam se kam humko min value to chahiye hi 
