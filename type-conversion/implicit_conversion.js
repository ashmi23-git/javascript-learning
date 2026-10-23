// ----------------------------- TYPE CONVERSION -----------------------------
// IMPLICIT CONVERSION (TYPE COERCION)
// JavaScript automatically converts a value when an operation requires it
let x="5";
let y=x*2; // JavaScript converts "5" to the number 5 before multiplication
console.log(y); // 10

// Implicit Conversions
// 1. String concatenation with +
console.log("5" + 2); // "52"
console.log(5 + "2"); // "52"

// 2. Subtraction
console.log("5" - 2); // 3

// 3. Multiplication and Division
console.log("5" * 2); // 10
console.log("10" / 2); // 5

// 4. Comparison
// == allows type coercion for comparison
console.log("5" == 5);  // true
// === compares both type and value without converting the operands to make them match
console.log("5" === 5); // false

// 5. Boolean conversions in conditions
let  phone= "";
if (phone) {
    console.log("Phone exists");
} else {
    console.log("Phone is empty");
}
