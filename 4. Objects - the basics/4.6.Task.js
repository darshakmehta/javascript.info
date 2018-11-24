/* 4.6.1 */
// Is it possible to create functions A and B such as new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
// If it is, then provide an example of their code.

// Yes, it’s possible.

// If a function returns an object then new returns it instead of this.

// So they can, for instance, return the same externally defined object obj:

"use strict";
 let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

/* 4.6.2 */

// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
//Solution
"use strict";
function Calculator() {
	this.read = () => {
		this.firstNumber = +prompt("Enter first number", 0);
		this.secondNumber = +prompt("Enter second number", 0);
	},
	this.sum = () => {
		return this.firstNumber + this.secondNumber;
	},
	this.mul = () => {
		return this.firstNumber * this.secondNumber;
	}
}


/* 4.6.3 */

// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values

//Solution

"use strict";
function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = () => {
		this.value += +prompt("Enter number", 0);
	}
}

let accumulator = new Accumulator(1);
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values