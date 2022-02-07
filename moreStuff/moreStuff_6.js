/*
6.
Write a function that searches an array of strings 
for every element that matches the regular expression 
given by its argument. The function should 
return all matching elements in an array.
*/

function allMatches(words, pattern) {
  let matches = [];
  for (let i = 0; i < words.length; oi += 1) {
    if (pattern.test(words[i])) {
      matches.push(words[i]);
    }
  }

  return matches;
}