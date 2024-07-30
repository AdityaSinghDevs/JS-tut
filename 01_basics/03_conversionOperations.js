let score=33

console.log(typeof score);
console.log(typeof(score)); //both methods of checking type of variable

//now if score were to be string

let score2="33"
console.log(typeof score2); //outputs string

let valueinNumber= Number(score2); //Capitalised <data type> for conversion
console.log(typeof valueinNumber);
//prints number, but if letters were also added

let score3="33abc"
let valueinNumber2= Number(score3)
console.log(typeof valueinNumber2);//still prints number!!what is this number
console.log(valueinNumber2);//outputs NaN (Not in Number, so pay attentiomn while coding, Dont rely on Numbers)


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "aditya"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// if value is 1 => true; 0 => false
// if value is "" => false
// if value is "aditya" => true

//now for strings
let somenumber = 33
numberinstring= String(somenumber)

console.log(somenumber);
console.log(typeof numberinstring);

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);// prints neg value

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3); // simple operations

let str1 = "hello"
let str2 = " aditya"

let str3 = str1 + str2
console.log(str3); //concatenates them

console.log("1" + 2);//outputs 12
console.log(1 + "2");// outputs 12
//but
console.log("1" + 2 + 2);//outputs 122
console.log(1 + 2 + "2"); //output is 32
// uses the type conversion acc to the first value

console.log( (3 + 4) * 5 % 3); //use paranthesis

console.log(+true);// same but for boolean
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2// stupid and unreadable code 

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
