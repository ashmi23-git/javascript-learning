// parseInt() - convert to an Integer
// parseInt() reads an integer from the beginning of a string
console.log(parseInt("25"));       // 25
console.log(parseInt("25.99"));    // 25
console.log(parseInt("100px"));    // 100
console.log(parseInt("Hello"));   // NaN
// It reads digits from the beginning and stops when it reaches a character that cannot be part of the integer

// parseFloat() - convert to a decimal number
// parseFloat() reads a floating-point number from the beginning of a string
console.log(parseFloat("25.99"));  // 25.99
console.log(parseFloat("100.50px")); // 100.5
console.log(parseFloat("45"));     // 45
console.log(parseFloat("Hello"));  // NaN
