/* 5.4.1 */
// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?

//Answer: 4

//That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.


/* 5.4.2 */

// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// The array in the process:

// Jazz, Blues
// Jazz, Bues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

//Solution 
"use strict";
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length - 1 / 2)] = "Classics";
alert( (styles.shift() );
styles.unshift("Rap", "Reggae");



/* 5.4.3 */

// What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

//Answer:

/*The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.

So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array:

 let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // "a","b",function
The array has 3 values: initially it had two, plus the function.*/


/* 5.4.4 */

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

//Solution
"use strict";
let arr = [];
let sumInput = () => {
	let sum = 0;
	do {
		let num = prompt("Enter a number", 0);
		if(num == null || num == '' || !isFinite(num)) break;
		arr.push(Number(num));
		sum += Number(num);
	}while(true);
	console.log(arr);
	return sum;
}

console.log(sumInput());
/* 5.4.5 */

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

getMaxSubSum([-1, 2, 3, -9]) = 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (take all)
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0
// Please try to think of a fast solution: O(n2) or even O(n) if you can.

//Solution
"use strict";

let getMaxSubSum = (arr) => {
	let maxSoFar = -Infinity;
	let currMax = 0;

	for(let i = 0; i < arr.length; i++) {
		currMax = currMax + arr[i];
		if(currMax < arr[i]) {
			currMax = arr[i];
		}
		maxSoFar = Math.max(maxSoFar, currMax);
	}
	return maxSoFar;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
