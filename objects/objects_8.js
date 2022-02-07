/*
8.
Create a function that creates and returns 
a copy of an object. The function should take 
two arguments: the object to copy and an array 
of the keys that you want to copy. Do not mutate 
the original object.

The function should let you omit the array 
of keys argument when calling the function. 
If you do omit the argument, the function should
 copy all of the existing keys from the object.

 */

let copyObj = (sourceObj, keys) => {
  let destinationObj = {};
  if(keys){
  keys.forEach(function(key){
    destinationObject[key] = sourceObj[key]
  })
  return destinationObject;
} else { 
  return Object.assign(destinationObject, sourceObj);
  }
}
