/*
6.
Reimplement the factorial function from 
exercise 2 using recursion. Once again, 
you may assume that the argument is always a 
positive integer.
*/

let factorial = x => {
  if (x === 1){
    return 1
  } return x * factorial(x - 1);
} 
