/* 5.8.1 */

// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

//Solution

"use strict";

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let sumSalaries = (salaries) => {
	let sum = 0;
	
	Object.keys(salaries).forEach((salary) => {
		sum += salaries[salary];
	});

	/* Another solution */
	//return Object.values(salaries).reduce((sum, current) => (sum + current), 0);

	return sum;
}

console.log( sumSalaries(salaries) ); // 650

/* 5.8.2 */

// Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
// Try to make the code as short as possible.

// P.S. Ignore symbolic properties, count only “regular” ones.

//Solution

let user = {
  name: 'John',
  age: 30
};

let count = (user) => Object.keys(user).length;

console.log( count(user) ); // 2