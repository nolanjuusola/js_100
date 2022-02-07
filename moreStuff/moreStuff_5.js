/*
5.
What does the following function do?
*/

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
this function accepts a string and returns, 
in reverse order, the number of characters in each
word of the string.
*/

