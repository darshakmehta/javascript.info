/* 4.1.1 */
/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/
"use strict";

const user = {};
user.name = "John";
user.surnmae = "Smith";
user.name = "Pete";
delete user.name;

/* 4.1.2 */

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
"use strict";
const isEmpty = (obj) => {
	for(let key in obj) {
		return false;
	}
	return true;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false


/* 4.1.3 */
"use strict";

//Is it possible to change an object declared with const? What do you think?

const user = {
  name: "John"
};

// does it work?
//Answer: YES

/* 4.1.4 */
"use strict";

// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

//Answer
let sum = 0;
for(let prop in salaries) {
	sum += Number(salaries[prop]);
}
alert(sum);

/* 4.1.5 */
"use strict";

//Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

//For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
//Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

//P.S. Use typeof to check for a number here.

//Answer
let multiplyNumeric = (menu) => {
	for(let item in menu) {
		if(typeof menu[item] === "number") {
			menu[item] *= 2;
		}
	}
}



