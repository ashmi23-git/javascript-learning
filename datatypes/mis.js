/* 
Data Type - Boolean
Holds 2 possible values - True or False
Primarily used for evaluating conditions within your code 
*/
let isFemale = true;
console.log(typeof isFemale);

let cond1 = 5 < 3;
console.log(cond1);

/*
Data type - Null
null - nothing or empty
Represents the intentional absence of any object value
*/
let age = null;
console.log(age); // display - null
console.log(typeof age); // type - object

/*
Data type - Undefined
Automatically assigned by the language to a variable that has been declared, 
but not yet initialized with a value
*/
let DOB;
console.log(DOB); // display - null
console.log(typeof DOB); // type - undefined

/* 
Data type - Object
Collection of related data stored as key–value pairs
*/

/* person — variable storing the object
   { } — curly braces used to define the object
   name, age, city — keys (also called properties).
   "Sam", 25, "Madurai" — values assigned to those keys.
   For example, name: "Sam" is one key–value pair. 
*/
let person = {
    name: "Sam",
    age: 25,
    city: "Madurai"
};

console.log(person);
// Access a property
// The dot (.) lets us access the property of an object
console.log(person.name);
console.log(person.age);
// Another way to write (to access a property)
console.log(person["city"]);
// Check the data type
console.log(typeof person);

/* Reason to use objects:
Objects help us group related information together instead of creating many separate variables. */

/* 
Data type - Symbol ()
A primitive data type that creates a unique value

Every time you call Symbol(), 
JavaScript creates a new symbol that is different from every other symbol created this way—even if the descriptions are the same.
*/
let id1 = Symbol("id"); // Create first symbol
let id2 = Symbol("id"); // Create second symbol
// Note: Even though both descriptions are "id", the symbols are different

console.log(id1);
console.log(id2);
// Compare the symbols
console.log(id1 === id2);
// Check its type
console.log(typeof id1);

/* 
Why use Symbols?
Symbols are useful when we need unique property keys, 
helping avoid accidental clashes with other property names.
*/

// Example
let id = Symbol("id");

let user = {
    name: "Sam",
    [id]: 101
};

console.log(user.name);
console.log(user[id]);