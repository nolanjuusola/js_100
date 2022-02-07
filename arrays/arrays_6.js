/*
Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).
*/
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = array => {
    let lengths = array.map(function (x){
      return x.length;
    })
    let oddLengths = lengths.filter(function (y){
      return y % 2 !==0;
    })
    return oddLengths
  }
  