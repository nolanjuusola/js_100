/*
7.
Add a qux property with value 3 to 
the myObj object we created in the previous 
exercise. 
*/
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj[qux] = 3;
/*
Now, examine the following code 
snippets:

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}
Without running this code, can you determine 
whether these two snippets produce 
the same output? Why?


Using for..in iterates over all of the keys,
including the ones in the prototype object.
Using forEach only iterates over the objects 
explicitly assigned to myObj.
*/

