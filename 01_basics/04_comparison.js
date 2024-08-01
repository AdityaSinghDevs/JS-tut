// console.log(2==2);
// console.log(1<=2);
// console.log(4>=2);
// console.log(3!=2); //All will give simple comparison in boolean that is true and false

//now

console.log('2'<3);
console.log("2">1); //will give normal results as js automatically changes type
                    ///for comparison

console.log(null>0);
console.log(null==0);
console.log(null>=0); //when running these first two come false but last one comes true
                      //because '<','>', comparison operators only turn null into a number i.e, 0, hence as null = 0, the last one is true. 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); //same will happen for undefine but it will alwways give false

//all of this is very inconsistent stuff so be aware of this in js

//== is check 
//=== is strict check which checks if the data type is same or not, then give true and false

console.log("2"===2);

