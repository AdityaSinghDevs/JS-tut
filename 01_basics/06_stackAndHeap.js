//STACK <Primitive>
//basically call by value 
 const myName="Aditya"
 let hisName=myName;
 
 hisName="Harshit"
 
 console.log(myName);
 console.log(hisName);
 
 //here a copy of value stored in myName was given to hisName which was then changed hence not affecting myName's original value

 //HEAP <Refrenced>
 //basically call by refrence

 const id1= {
    email: "hello@google.com",
    number : 2234
 }
 
let id2= id1

id2.email= "hi@google.com"

console.log(id1.email);
console.log(id2.email);

//here being an object the address was refrenced directly from id1 to id2 hence changing id2 email also changed id1 email original value


