/*
5.
Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

What does this program log to the console? Why?


The code will log 'bar' to the console, because the re-assignment to
'qux' only exists inside the blocks.
*/

