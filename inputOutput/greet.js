/*
1.
Write a dynamic greeter program named greeter.js. The program should ask for your name, then output 
Hello, {name}! where {name} is the name you entered:

*/

let rlSync = require('readline-sync');
let userName = rlSync.question("What's your name? \n");
console.log(`Good Morning, ${userName}!`);

/*
2.
Modify the greeter.js program to ask for the user's first and last names separately, 
then greet the user with their full name.

*/

let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");
console.log(`Good Morning, ${firstName} ${lastName}`);
