// ----------------------------- NUMBER CONVERSION -----------------------------
console.log(Number("25")); // 25
console.log(Number("3.14")); // 3.14
console.log(Number("")); // 0
console.log(Number("   ")); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("Hello")); // NaN

/* NaN stands for Not-a-Number. 
It is a special numeric value that represents an invalid numeric result. */
let x=Number("Hello");
console.log(x); // NaN
// Even though x is NaN, its type is still "number" 
console.log(typeof x); // "number"
console.log(Number.isNaN(x)); // true
