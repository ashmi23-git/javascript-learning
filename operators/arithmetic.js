/* 
ARITHMETIC OPERATORS
Arithmetic operators perform mathematical calculations
Operators:
Addition +
Subtraction -
Multiplication *
Division /
Modulus (Remainder) %
Exponentiation ** 
*/
let a = 10;
let b = 3;
console.log(a+b); // Addition
console.log(a-b); // Subtraction
console.log(a*b); // Multiplication
console.log(a/b); // Division
console.log(a%b); // Modulus
console.log(a**b); // Exponentiation

// Modulus
// Modulus % operator returns the remainder, not the quotient:
console.log(10 % 3); // 1
console.log(8 % 2); // 0
// It is often used to check whether a number is even or odd
let number = 7;
if(number % 2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}
// Output: Odd

// Division
// JavaScript uses floating-point numbers for ordinary numeric calculations
console.log(5/2); // 2.5
console.log(5/0); // Infinity
console.log(0/0); // NaN
// Unlike some programming languages, divising a number by zero does not normally throw a division-by-zero exception