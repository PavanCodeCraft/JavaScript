// const arr = [0,1,2,4, ture, "Pavan"]  // we can add multiple data type in array or it can be of same dataype also , we can add array inside another array , array size is resizeable means it can be change for more details prefer its documentaion on mdn

const myArr = [1,2,3,4]

const myArr2 = new Array(1,2,3) // another way of declaring array

// Array Methods

// myArr.push(7)  // add 7 at the end of arry  or push(1,4,3) we can pass mutiple value also
// console.log(myArr);
// myArr.pop()   // remove the last element
// console.log(myArr);

myArr.unshift(4)  // will add element at starting position but this method is not preferable because in this all element shift its position and it is not the optimize solution 

// myArr.shift() // remove the element from begning
// console.log(myArr);

console.log(myArr.includes(3));  // return boolean either 3 in present in "myArr or not "
// console.log(myArr.indexOf(3))  // return index of 3

const newArr = myArr.join()  // join will convert our array object into string
// console.log(myArr);   // return [ 1, 2, 3, 4 ]
// console.log(newArr);  // return 1,2,3,4

// slice and splice 

console.log("A" , myArr);  // return original array => A [ 4, 1, 2, 3, 4 ]

const myNewArr = myArr.slice(1,4) 

console.log(myNewArr);  // (1,4) => 1 will include and 4 will exclude o/p => [ 1, 2, 3 ]
console.log("B" , myArr)  // return  => B [ 4, 1, 2, 3, 4 ]

const myNewArr1 = myArr.splice(1,4)  
console.log("C", myArr);  // return original array
console.log(myNewArr1);   // splice take out that particular part from original array means splice manuplate original array it include last range also but slice original array ko change nahi karta and last range not included like 4

