/* INCREMENT & DECREMENT OPERATORS
These operators change a numeric value by one
++ increments by one
-- decrements by one
*/
let x = 5;
x++; // x = x + 1
console.log(x); // 6

let y = 4;
y--; // y = y - 1
console.log(y); // 3

/* Prefix vs Postfix
   There are 2 ways to use increment and decrement
   Prefix: ++x - change the value first, then use it
   Postfix: x++ - use the current value first, then change it
*/
let a = 5;
console.log(++a); // 6

let p = 4;
console.log(--p); // 3

let b = 5;
console.log(b++); // 5
console.log(b); // 6

let q = 4;
console.log(q--); // 4
console.log(q); // 3
