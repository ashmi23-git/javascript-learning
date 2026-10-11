// Variables in JavaScript
// variable declaration
let a; // Method 1 - Single variable
let sum, diff, prod; // Method 2 - Multiple variables

// variable initialization
// Method 1
let bookName;
bookName = "Harry Potter";
// Method 2
let bookAuthor="J.K. Rowling";
let bookCopies=5;
// Method 3
let bookPublisher="Bloomsbury Publishing", bookPart="The Boy Who Lived";

// Escape sequences
// using "\n" - NewLine
console.log(bookName, bookAuthor, "\n", bookPublisher);
// using "\t" - Tab
console.log(bookName,bookAuthor, "\t", bookPublisher);

// re-assign 
bookName = "HP";
// assigning variable to another variable
bookName = bookAuthor;
console.log(bookName);

/* 
Rules to name a variable
1. Variable names should not be repeated. Names should be unique
2. Two special characters are allowed - $, _ . Eg: let emp_salary = "90000", Eg: let emp$designation = "software engineer"
3. Can have digits. should not start with digits . Eg: let book1="HP";
4. Keywords should not be used as variable name
5. Case sensitive. Eg: let bookName; and let BookName; - both are different variables and not same. 
*/

// Another simple example 
let student;
let n = "Ashmikha";
student = n;
console.log(student);


