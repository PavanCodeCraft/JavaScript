"use strict" // treat all code a newer version

// Mainly we have two datatypes "Primitive" and "Non Primitive"

// Primitive

// 7 Types : String , Number, Boolean, Null,  Undefined, Symbol, BigInt

// Reference or Non Primitive 
            //  |
            //  |       
// Array, Objects, Functions

// Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

// Note: Both are looking same id and anotherId but we have use Symbol so that is is not same it is different and symbol return same datatype named as symbol
// lets check

// console.log(id == anotherId);
// console.log(id === anotherId); // if we do stritct check then also it return false becuase symbols are always different

// Array

// const arr = ["Hello" , "Pavan", "Singh", "Rajput"]
// console.log(arr);

// Object

let myObj = {
    name: "Pavan",
    age: 22,
    gender: "Male"
}
let tyP= console.log(myObj);

//functions

const myFunction = function(){
    console.log("Hello world")
}
console.log(typeof(myFunction))
// alert (3+4) if we run this we will get error because this is nodejs not browser

// note: code readablity should be high 

// DataType

// Number
// BigInt
// String
// boolean => ture/false
// null => standalon value
// undefined
//symbol => umique

//object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// Learn more about typeof operator and what is will return from "ecma" official website 
// https://262.ecma-international.org/5.1/#sec-11.4.3 (documentation)