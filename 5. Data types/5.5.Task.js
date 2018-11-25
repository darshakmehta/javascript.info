/* 5.5.1 */
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

//My Solution
"use strict";
let camelize = (str) => {
	let arr = str.split('-');
	for(let i = 1; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join('');
}
console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );

// Real world solution
"use strict";

let camelize = (str) => {
	return str.split('-').map((word, index) => {
	  return index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
	}).join('');
}
console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );


/* 5.5.2 */

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

// The function should not modify the array. It should return the new array.

// For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//Solution
"use strict";
let filterRange = (arr, a, b) => {
	return arr.filter((element, index, array) => {
		// console.log(element, index, array);
		if(element >= a && element <= b)
			return true;
		return false;
		//Better remove if and just write return element >= a && element <= b
	});
};
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);

/* 5.5.3 */

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

//Solution
"use strict";

let filterRangeInPlace = (arr, a, b) => {
	arr.forEach((item, index) => {
		if(item < a || item > b) {
			arr.splice(index, 1);
		}
	});
	return arr;
};

let arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr, 1, 4));

/* 5.5.4 */

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in the reverse order

alert( arr ); // 8, 5, 2, 1, -10

//Solution
"use strict";
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);


/* 5.5.5 */
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

//Solution
"use strict";
let copySorted = (arr) => {
	//my solution
	return arr.map((item) => item).sort();
	//their solution
	//return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); 
console.log( arr ); 

/* 5.5.6 */

// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

// Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
// No brackets or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

// Solution
"use strict";

function Calculator() {
	let methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b,
	};

	this.calculate = (str) => {
		let arr = str.split(" ");
		let a = +arr[0];
		let op = arr[1];
		let b = +arr[2];

		if(!methods[op] || isNaN(a) || isNaN(b)) return NaN;

		return methods[op](a,b);	
	}
	this.addMethod = (op, func) => {
	  methods[op] = func;
	}
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8



/* 5.5.7 */

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code */

alert( names ); // John, Pete, Mary

//Solution

"use strict";

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map((item) => item.name);

console.log( names ); // John, Pete, Mary



/* 5.5.8 */


// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

//Solution 
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];
let usersMapped = users.map((user) => {
  return {
    fullName: user.name + " " + user.surname,//start using backticks
    id: user.id
  }
});
//Another solution with wrapping by ()
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith


/* 5.5.9 */
// Write the function sortByName(users) that gets an array of objects with property name and sorts it.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ john, pete, mary ];

sortByName(arr);

// now: [john, mary, pete]
alert(arr[1].name); // Mary

//Solution
"use strict";
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ john, pete, mary ];

let sortByName = (arr) => {
  arr.sort((a, b) => a.name.localeCompare(b.name));
}

sortByName(arr);

// now: [john, mary, pete]
console.log(arr[1].name); // Mary


/* 5.5.10 */

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

//Solution

"use strict";
//Not accurate
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//Fisher-Yates shuffle - Accurate solution
//The idea is to walk the array in the reverse order and swap each element with a random one before it:
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);
/*That somewhat works, because Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.

But because the sorting function is not meant to be used this way, not all permutations have the same probability.

For instance, consider the code below. It runs shuffle 1000000 times and counts appearances of all possible results:*/

/* 5.5.11 */


// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//Solution 
"use strict";

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
let getAverageAge = (users) => {
	return users.reduce((result, user) => result = result + user.age, 0) / users.length;
}
console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

/* 5.5.12 */
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
  /* your code */
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

//Solution

/*Let’s walk the array items:

For each item we’ll check if the resulting array already has that item.
If it is so, then ignore, otherwise add to results.*/
"use strict";

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
/*
The code works, but there’s a potential performance problem in it.

The method result.includes(str) internally walks the array result and compares each element against str to find the match.

So if there are 100 elements in result and no one matches str, then it will walk the whole result and do exactly 100 comparisons. And if result is large, like 10000, then there would be 10000 comparisons.

That’s not a problem by itself, because JavaScript engines are very fast, so walk 10000 array is a matter of microseconds.

But we do such test for each element of arr, in the for loop.

So if arr.length is 10000 we’ll have something like 10000*10000 = 100 millions of comparisons. That’s a lot.

So the solution is only good for small arrays.*/

//Further in the chapter Map, Set, WeakMap and WeakSet we’ll see how to optimize it.