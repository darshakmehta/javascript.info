/* 2.14.1 */
"use strict";

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

	function checkAge(age) {
	  if (age > 18) {
	    return true;
	  } else {
	    // ...
	    return confirm('Did parents allow you?');
	  }
	}

//Will the function work differently if else is removed?

	function checkAge(age) {
	  if (age > 18) {
	    return true;
	  }
	  // ...
	  return confirm('Did parents allow you?');
	}

//Is there any difference in the behavior of these two variants?
//Answer: No

/* 2.14.2 */
"use strict";

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||
//Answer

function checkAge(age) {
	return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}

function checkAge(age) {
	return (age > 18) || confirm('Do you have your parents permission to access this page?');
}

/* 2.14.3 */
"use strict";

function min(a, b) {
	return a < b ? a : b;
}

/* 2.14.4 */
"use strict";
/* My */
function pow(x, n) {
	let result = 1;
	for(let i = 1; i <= n; i++)
		result *= x;
	return result;
}

/* Theirs - Better */
function pow(x, n) {
	let result = x;
	for(let i = 1; i < n; i++)
		result *= x;
	return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported,
    use an integer greater than 0`);
} else {
  alert(pow(x, n));
}