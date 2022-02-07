/*
2.
Write a function, evenOrOdd, that determines whether its argument is an even number.
 If it is, the function should log 'even' to the console; otherwise, it should log 'odd'.
 For now, assume that the argument is always an integer.

 */

 let evenOrOdd = x => {
   if(x % 2){
     console.log('odd')
   } else console.log('even')
 }
