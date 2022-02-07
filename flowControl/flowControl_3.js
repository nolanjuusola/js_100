/*
3.
Let's improve our previous implementation of evenOrOdd.
Add a validation check to ensure that the 
argument is an integer. If it isn't, the function should
issue an error message and return.

*/

let evenOrOdd = x => {
  if (!Number.isInteger(x)){
    console.log('error, please enter a number')
  }else if(x % 2){
    console.log('odd')
  }else console.log('even')
}
