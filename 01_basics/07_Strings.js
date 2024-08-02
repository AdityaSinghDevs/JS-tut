const name = "Aditya"
const repoCount = 50

console.log(name + repoCount + " Value"); //bad way to write code instead write using
// string intercolation using back ticks `````

console.log(`Hello my name is ${name} and My repocount is ${repoCount}`);

//here you can just inject variables into the desired place//
//can also use .uppercase, .lowercase etc. on the go

const myName = new String("Aditya-pratap-singh") //proper way of declaring strings // Also String becomes an obj
console.log(myName);
 //this object is key and value paired keys being the indexes and values being the characters

 console.log(myName[0]); //will print A
 console.log(myName.length);
 
 console.log(myName.__proto__); //access prototype then check for the prototyped availaible functions in console

 console.log(myName.toUpperCase()); //prototype function
 console.log(myName.charAt(0)); //bring character at index given
 console.log(myName.indexOf('A')); //brings index of given character,  NOTE:IF TWO OR MORE SAME CHAR AVAILAIBLE, WILL RETURN THE INDEX OF THE FIRST ONE THAT COMES

 const newstring  = myName.substring(0,3) //slice Aditya to Adi i.e, 012 => 1 less than the given index
 console.log(newstring);

 const newstring2 = myName.slice(0,4)
 console.log(newstring2);

 //Use Cases:

//Use substring() when you need more traditional behavior without negative indices or when you want automatic swapping of indices.
//Use slice() for more advanced use cases, especially when working with negative indices or when you do not want automatic swapping.

const nametotrim = new String( "   adi   ")
console.log(nametotrim);
console.log(nametotrim.trim()); //will trim down unnecessary spaces

//to replace smth
const url = "https//www.Aditya%20Pratap.com" //as the browser automatically turns spaces into %20
console.log(url);
console.log(url.replace('%20', '-'));

//to check if some string exists
console.log(url.includes('dit')); //give results in true and false

///to split 
console.log(myName.split('-')); //splits and makes an array on the given character

//READ MORE ABOUT THE VARIOUS FUNCTIONS THRU PROTO IN CONSOLE






 
 
 
 
 
 