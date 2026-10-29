/* LOGICAL OPERATORS
Used to combine or reverse conditions. They are especially important when writing if statements, form validation, and login logic

AND => && - Both conditions must be truthy
OR => || - At least one condition must be truth
NOT => ! - Reverses truthiness

*/

/* Logical AND - &&
   Both conditions must be true for the combined condition to be true
*/

// Example: Allow registration only if name is entered and email is valid
let name = "Ashmi";
let emailValid = true;

if(name !== "" && emailValid){
    console.log("Registration allowed");
}

/* Logical OR - ||
   At least one condition must be true
*/
let a = 5;
let b = 3;
let c = 6;
console.log(a>b || a>c); // a > b - condition only satisfied

let isAdmin = false;
let isManager = true;
console.log(isAdmin || isManager); 

/* Logical NOT - !
   Reverses the truthiness of a value
*/
let isLoggedIn = false;
console.log(!isLoggedIn); // true
console.log(!true); // false

/* Logical operators return values!
   In JavaScript, && and || does not always return true or false. They return of their operands, using short-circuit evaluation
*/
console.log("Hello" && 100); // 100
console.log("" || "Guest"); // Guest
console.log(0 || 50); // 50

/* && - stops at the first falsy operand; otherwise, it returns the last operand
   || - stops at the first untruthy operand: otherwise, it returns the last operand */

// That is why || is often used to provode a default value

