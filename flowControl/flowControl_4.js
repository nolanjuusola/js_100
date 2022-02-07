/*
4.
What does the following code log to the console, and why?
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}
barCodeScanner('113');

The code will log:
Product 2 
Product 3
Product not found!
Since no break statement was added and 
return is not explicitly stated, the program
will start at case 113 and execute down from there.

*/




