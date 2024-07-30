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

//end
