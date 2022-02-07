/*
3.
The following code causes an infinite 
loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

Since we set counter equal to one inside the while loop, it never becomes
falsy and breaks the loop.

*/
