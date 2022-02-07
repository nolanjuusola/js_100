/*
7.
Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
*/

let sumOfSquares = array => {
  return array.reduce((accum, num) => {
    return accum + num * num
  }, 0)
}
let array = [3, 5, 7];
console.log(sumOfSquares(array));


