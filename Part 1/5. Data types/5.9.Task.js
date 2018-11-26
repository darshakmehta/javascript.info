/* 5.9.1 */

// We have an object:

let user = {
  name: "John",
  years: 30
};
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

// The values after the assignment should be:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//Solution


let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;


console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

/* 5.9.2 */

// There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.


//Solution

"use strict";

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let topSalary = (salaries) => {
  if(salaries == null) return null;
  let maxSalary = 0;
  let topPaidPerson = '';
  for(let [key, value] of Object.entries(salaries)) {
    if(value > maxSalary) {
      maxSalary = value;
      topPaidPerson = key;
    } else if(value == maxSalary) {
      /* Send array of topPaidPerson */
    }
  }
  return topPaidPerson;
}

console.log(topSalary(salaries));