// Data type - number
let pi = 3.14; // decimal
let prime = 7; // integer

// display values
console.log(pi, prime);

// type checking
console.log(typeof pi);

// special numeric values
let infi = Infinity;
let negInfini =  -Infinity;

console.log(infi);
console.log(negInfini);
console.log(typeof infi);

// NaN - Not a Number
let temp = NaN; 
console.log (typeof temp);

temp = NaN + 2; // Any operation performed along with a number with NaN becomes NaN
temp = NaN ** 0; // Returns 1 only if given to the power 0

// Number divided by 0 gives infinity
console.log(1/0);

// Simple Example:
let sum = 543 + 235;
console.log(typeof sum);
