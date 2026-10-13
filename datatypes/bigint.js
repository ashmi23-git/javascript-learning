// Data type - BigInt
/* 
Standard Number data type has a safe integer limit, defined as:
   2*53 - 1 = 9007199254740991

   When you perform calculations that exceeds this limit, 
   the language can no longer accurately represent the actual numbers,
   often leading to calculation errors where odd numbers might return incorrect results.
*/
console.log(9007199254740991 + 1); // correct
console.log(9007199254740991 + 2); // wrong
console.log(9007199254740991 + 3); // correct

/*
That is why BigInt is used to solve this by allowing you to 
store and manipulate integers of an arbitrary precision
*/

/*
DEFINING BigInt
Create BigInt by appending the letter 'n' to the end of an integer
*/

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

/* 
MATHEMATICAL OPERATIONS:
Must perform operations using only other BigInt values. 
Should not mix standard Numbers and BigInts in the same arithmetic operations
*/
let limit = 9007199254740991n;

console.log(limit + 1n);
console.log(limit +2n);
console.log(limit + 3n);

console.log(typeof limit);

/* 
BigInt works in all modern browsers (Chrome, Firefox, Edge)
Not supported in Internet Explorer
*/