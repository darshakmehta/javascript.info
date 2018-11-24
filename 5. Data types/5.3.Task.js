/* 5.3.1 */
// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";

//Solution
"use strict";
let ucFirst = (str) => {
	if(!str) return str; 
	let firstChar = str[0].toUpperCase();
	str = firstChar + str.slice(1);
	return str;
}

alert( (ucFirst("john") ));

/*

We can’t “replace” the first character, because strings in JavaScript are immutable.

But we can make a new string based on the existing one, with the uppercased first character:

let newStr = str[0].toUpperCase() + str.slice(1);
There’s a small problem though. If str is empty, then str[0] is undefined, so we’ll get an error.

There are two variants here:

Use str.charAt(0), as it always returns a string (maybe empty).
Add a test for an empty string.
Here’s the 2nd variant:

 function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); // John 

*/


/* 5.3.2 */
// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise `false.

// The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
//Solution
"use strict";

let checkSpam = (str) => {
  str = str.toLowerCase();
	if(~str.indexOf('viagra') || ~str.indexOf('xxx')) //lowerStr.includes('viagra') || lowerStr.includes('xxx')
		return true;
	return false;
}



/* 5.3.3 */

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"

//Solution

"use strict";
let truncate = (str, maxlength) => {
	if(str.length > maxlength) {
		return str.slice(0, maxlength - 1) + "...";
	}
	return str;
}
/*
The maximal length must be maxlength, so we need to cut it a little shorter, to give space for the ellipsis.

Note that there is actually a single unicode character for an ellipsis. That’s not three dots.

 function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
*/


/* 5.3.4 */

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

// The example:

alert( extractCurrencyValue('$120') === 120 ); // true

//Solution 

"use strict";

let extractCurrencyValue = (str) => {
	return +str.slice(1); ////TO extract numeric value convert string to number by + or Number()
}