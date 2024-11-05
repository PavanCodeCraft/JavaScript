const name = "Pavan"
const lastName = "Rajput"
let age = 22
// console.log(name + lastName + "Hello")  // return PavanRajputHello but ye tarika recomandad nahi hai

// instead of above use back tick (``) this is more good and more readiable

console.log(`Hello my name is ${name} ${lastName} and i am ${age}`);


// another way to declare string

const str = new String("Pavan")  // this method unlock lots of mantuplation with string
// console.log(typeof(str));
// console.log(str.toUpperCase())
// console.log(str.charAt (2)) // return v because at position  2 we have v
// console.log(str.indexOf ('v')) // return 2 because index of v is 2

const newString = str.substring(0,4)
console.log(newString);  // return Pava means o to 3 position excluding last one
// can we give negative value in substring

console.log(str.substring(-4, 3))  // return "Pav" (negative value not support it will not give error but consider any negative value as 0 and return the result from o to 3 in our case which is "Pav")

const anotherString = str.slice(-4,3)
console.log(anotherString);   // return av

const str2 = "             Pavan       "  // This extra space problem occure when we take the input from user through backend sometime they add extra spaces
console.log(str2);
console.log(str2.trim());

const url = "https://pavan.com/pavan%20rajput"
console.log(url.replace('%20', '-')); // replace %20 by -

console.log(url.includes('singh'))  // will check wheather our url contain singh or not and return boolean

const subject = "English-Maths-Hindi-Sanskrit"   //lets suppose we want to convert this string into array conversion will be done on the basis of "-"

console.log(subject.split('-'));  // return [ 'English', 'Maths', 'Hindi', 'Sanskrit' ]