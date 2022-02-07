/*
2. 
Write a function that computes and 
returns the factorial of a number by using 
a for loop. The factorial of a positive integer
 n, signified by n!, is defined as the product 
 of all integers between 1 and n, inclusive.
 */

 let factorial = x => {
    let total = 1;
    for(let i = x; i > 0; i--){
      total *= i;
    }
    console.log(total);
  }