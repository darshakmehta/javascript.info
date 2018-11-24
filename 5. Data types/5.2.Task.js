 5.2.1 */

//Create a script that prompts the visitor to enter two numbers and then shows their sum.
"use strict";

let num1 = +prompt("Enter a number", 0);
let num2 = +prompt("Enter a number", 0);
alert( (num1 + num2) );


/* 5.2.2 */

//According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
// For instance:

 alert( 1.35.toFixed(1) ); // 1.4
// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

 alert( 6.35.toFixed(1) ); // 6.3
// How to round 6.35 the right way?

// Internally the decimal fraction 6.35 is an endless binary. As always in such cases, it is stored with a precision loss.

// Let’s see:

 alert( 6.35.toFixed(20) ); // 6.34999999999999964473
// The precision loss can cause both increase and decrease of a number. In this particular case the number becomes a tiny bit less, that’s why it rounded down.

// And what’s for 1.35?

 alert( 1.35.toFixed(20) ); // 1.35000000000000008882
// Here the precision loss made the number a little bit greater, so it rounded up.

// How can we fix the problem with 6.35 if we want it to be rounded the right way?

// We should bring it closer to an integer prior to rounding:

alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000

//Note that 63.5 has no precision loss at all. That’s because the decimal part 0.5 is actually 1/2. Fractions divided by powers of 2 are exactly represented in the binary system, now we can round it:

alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

/* 5.2.3 */

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.

// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

"use strict";
let readNumber = () => {
	let num = prompt("Enter a number", 0);
	//On cancel it gives 0
	
	if(num === null || num === '') return null;

	if(isFinite(num)) {
		return +num;
	}

	readNumber();
};

alert( `Read: ${readNumber()}` );

/* 5.2.4 */

// This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

//Solution

// That’s because i would never equal 10.

// Run it to see the real values of i:

 let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}
// None of them is exactly 10.

// Such things happen because of the precision losses when adding fractions like 0.2.

// Conclusion: evade equality checks when working with decimal fractions.

/* 5.2.5 */

// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// Examples of its work:
"use strict";

function random(min, max) {
	return min + Math.random() * (max - min);
}

alert( (random(1, 5)) );

/*We need to “map” all values from the interval 0…1 into values from min to max.

That can be done in two stages:

If we multiply a random number from 0…1 by max-min, then it the interval of possible values increases 0..1 to 0..max-min.
Now if we add min, the possible interval becomes from min to max.*/

/* 5.2.6 */
// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:
alert( random(1, 5) ); // 1
alert( random(1, 5) ); // 3
alert( random(1, 5) ); // 5

"use strict";

//Solution 1
function randomInteger(min, max) {
  // now rand is from  (min-0.5) to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );

//Solution 2
function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );

/* 5.2.7 