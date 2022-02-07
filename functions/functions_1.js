/*
1.
What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

Since bar is changed to 2 inside the scope of the function, accessing it outside te function 
has no bearing, so 1 is logged to the console.

*/
