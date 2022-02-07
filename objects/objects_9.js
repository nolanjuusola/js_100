/*
9.
What does the following program log to the console? Why?
*/
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
the value of the key a is mutated by the function,
so 'hi' will be logged. however, the variable
qux is only changed to 'hi' inside the 
scope of the function, so calling it outside 
will log what it was set to originally.
*/
