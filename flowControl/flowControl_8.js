/*
8.
Write a function that logs whether a number 
is between 0 and 50 (inclusive), between 51 and 
100 (inclusive), greater than 100, or less than 0.
*/

let numRange = x => {
  if (!Number.isInteger(x)){
    console.log(`${x} is not a number.`);
  } else if(x < 0){
    console.log(`${x} is negative.`);
  } else if(x > 0 && x < 51){
    console.log(`${x} is between 0 and 50`);
  } else if(x > 50 && x < 101){
    console.log(`${x} is between 50 and 100`);
  } else console.log(`${x} is greater than 100`)
}
