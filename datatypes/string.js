 /* 
    Data type - String
    Used to store and manipulate textual data
    Any text enclosed within quotes (Double or Single quotes) is treated as a string by the language
 */
let intro = "We are studying about string datatype in JavaScript!";
console.log(intro);
console.log(typeof intro);

// usage of quotes inside quotes
// Example 1 (Single quotes inside Double quotes)
let open = "We should be strong in the 'fundamentals'";
console.log(open);
// Example 2 (Double quotes inside Single quotes)
let quote = 'She said, "I will be there in ten minutes."';
console.log(quote);

/* 
--------------------------------  BACKTICKS  --------------------------------
1. Flexibility with quotes:
   Allows to include both types of quotes within a string 
*/
let para = `She said, "I'm learning JavaScript today." \nThe teacher asked, "Can you explain the difference between 'single quotes' and 'double quotes'?"`;
console.log(para);

/* 
2. Embedding Expressions:
   ${} syntax is used to embed variables or evaluate JavaScript expressions directly inside your string
   The engine will calculate the result or insert the variable's value automatically
 */
let embed = `1 + 2 = ${1+2}`;
console.log(embed);

let gg = `This is the first line: ${intro}`;
console.log(gg);

/*
3. Readability:
   Backticks make it much easier to combine text and dynamic data, 
   resulting in cleaner and more maintainable code compared to manual 
   string concatenation
*/
