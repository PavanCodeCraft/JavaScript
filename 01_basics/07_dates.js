// Dates

let myDate = new Date()
// console.log(myDate);  // return 2024-11-05T14:39:06.115Z which is difficult to read

// console.log(myDate.toString());  // return Tue Nov 05 2024 14:40:21 GMT+0000 (Coordinated Universal Time) which is more readable

// console.log(myDate.toDateString()); // return Tue Nov 05 2024
// console.log(myDate.toLocaleString());  // return 11/5/2024, 4:11:16 PM becuase this is today date 
// console.log(myDate.toLocaleDateString());   // return 11/5/2024

// let myCreateDate = new Date (2024,2,25)
// console.log(myCreateDate);

// let myCreateNewDate = new Date(2024,    2,     25,  5,  4)
//                                 |       |      |    |   |
//                                 |       |      |    |   |
//                                year   month   Date Hour Minute  and so on

// console.log(myCreateNewDate); // retun 2024-03-25T05:04:00.000Z here is month 3rd becuase it start with 0 and we have write 2 means 0,1,2 => 3rd month => march

// let myCreateDate = new Date("2002-06-20")
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("06-20-2002")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);  //return value in ms from 1970 as it is standard mention in the documentation
// console.log(myCreateDate.getTime()) // This will also convert into ms so that we can easily compare

console.log(Date.now());  // return the value in miliSecond
console.log(Date.now()/1000);  // Now return in Second but in decimal value and time can't be decimal
console.log(Math.floor(Date.now()/1000)); // Now return in Second with no decimal value

// Note: we have lots of methods to manuplate Date 