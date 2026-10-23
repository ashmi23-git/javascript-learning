// String Conversion
let a=100;
let b=true;
let c=null;
let d=undefined;
// String() function converts a value into a string
console.log(String(a)); // "100"
console.log(String(b)); // "true"
console.log(String(c)); // "null"
console.log(String(d)); // "undefined"

/*Notice that the result is text in every case.
The original variable is not changed unless you assign the converted value back to it. */
// let age=25;
// String(age);
// console.log(typeof age); // "number"

// To store the converted value
let age = 25;
age = String(age);
console.log(typeof age); // "string"
