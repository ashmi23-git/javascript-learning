/* STRING OPERATOR
   The + operator can add number or concatenate strings.
   Concatenation means joining striongs together.
*/
let firstName = "Ashmikha";
let secondName= "Nandakumar";
console.log(firstName + " " + secondName); // Ashmikha Nandakumar

// What happens when strings and numbers are mixed?
console.log(10 + 5); // 15
console.log("10" + 5); // "105"
console.log("Hello" + 5); // "Hello5"
// + joins strings when string concatenation applies

// Other arithmetic operators convert numeric strings to numbers
console.log("10" - 5); // 5
console.log("10" * 2); // 20
// This behavior is related to type coercion, where JavaScript automatically converts a value from one type to another
