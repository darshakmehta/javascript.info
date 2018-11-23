/* 4.4.1 */
"use strict";
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
//What is the result of this code?
// Error!
//Solution

/*

JavaScript does not assume a semicolon before a bracket (user.go)(), so it reads the code like:

let user = { go:... }(user.go)()

*/

/* 4.4.2 */
"use strict";

// In the code below we intend to call user.go() method 4 times in a row.
// But calls (1) and (2) works differently from (3) and (4). Why?

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

/*
To explain the behavior of (3) and (4) we need to recall that property accessors (dot or square brackets) return a value of the Reference Type.

Any operation on it except a method call (like assignment = or ||) turns it into an ordinary value, which does not carry the information allowing to set this.
*/


/* 4.4.3 */
"use strict";

// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?

/*
That’s because rules that set this do not look at object literals.

Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method.

And the object literal itself has no effect on this. The value of this is one for the whole function, code blocks and object literals do not affect it.

So ref: this actually takes current this of the function.
*/
// Here’s the opposite case:

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // John
// Now it works, because user.ref() is a method. And the value of this is set to the object before dot ..


/* 4.4.4 */

/*

Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

*/

"use strict";
let calculator = {
	read() {
		this.firstNumber = prompt("Enter first number", 0);
		this.secondNumber = prompt("Enter second number", 0);
		//To avoid typecasting later, save it as 
			// this.a = +prompt('a?', 0);
    		// this.b = +prompt('b?', 0);
	},
	sum() {
		return Number(this.firstNumber) + Number(this.secondNumber);
	},
	mul() {
		return Number(this.firstNumber) * Number(this.secondNumber);
	},
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


/* 4.4.5 */
"use strict";

// There’s a ladder object that allows to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
// Modify the code of up and down to make the calls chainable, like this:

ladder.up().up().down().showStep(); // 1
// Such approach is widely used across JavaScript libraries.

/*Solution*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};