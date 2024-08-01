//JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime, and you don't need to explicitly declare the type of a variable when you create it. Instead, JavaScript automatically infers the type based on the value you assign to the variable.

// #On basis of how they are stored in memory and accessed datatypes are
// divided into two categories 1)Primitive 2)Derived/ Non-Primitive/ Refrenced

// #PRIMITIVE 
//are call by value 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 //both number, no float in js

const isLoggedIn = false
const outsideTemp = null
let userEmail; // will consider this undefined automatically

const id = Symbol('123')
const anotherId = Symbol('123') // symbol basically make a unique datatype like enum in C

console.log(id === anotherId);

const bigNumber = 3456543576654356754n //just add n in end for bigint

// #DERIVED / NON-PRIMITIVE / REFERENCED

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //arrays
let myObj = {
    name: "aditya", //object
    age: 21,
} 

const myFunction = function(){
    console.log("Hello world");  //function
}

console.log(typeof anotherId); //to find the type of a variable

// | Data Type                                       | **Typeof Result** |
// |-------------------------------------------------|-------------------|
// | NUMBER                                          | `"number"`        |
// | STRING                                          | `"string"`        |
// | BOOLEAN                                         | `"boolean"`       |
// | UNDEFINED                                       | `"undefined"`     |
// | NULL                                            | `"object"`        |
// | SYMBOL                                          | `"symbol"`        |
// | BIGINT                                          | `"bigint"`        |
// | OBJECT (DERIVED, NON-PRIMITIVE, REFERENCED)     | `"object"`        |
// | FUNCTION (DERIVED, NON-PRIMITIVE, REFERENCED)   | `"function"`      |


