const accId = 12234
let accEmail = "aditya@gmail.com"
var accCity = "delhi"
accPass= 22334455

console.log(accId)
console.table([accId, accEmail, accCity, accPass]);

accEmail= "lolchanged@gmail.com"
accCity = "bangalore"
accPass = 12345

console.table([accId, accEmail, accCity, accPass]);

// Now
// Don't use 'var' and/or the no keyword variable declaration like in 'accPass'
// due to block scope error

//only use 'let' and more preferrably const




