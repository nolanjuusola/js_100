/*
4.
What happens when you run the following code? Why?
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);


The code greeting Victor will run, but fail when we try to reassign 
the variable because you can't re assign a variable saved with const.
*/

