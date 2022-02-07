/*
3.
Write a program that uses a multiply function to multiply
two numbers and returns the result. Ask the user to enter
the two numbers, then output the numbers and result as a simple
equation.
*/

let multiply  = (x,y) => x * y;

let getNumber = prompt => {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let x = getNumber('Enter the first number: ');
let y = getNumber('Enter the second number: ');
console.log(`${x} * ${y} = ${multiply(x,y)}`);
