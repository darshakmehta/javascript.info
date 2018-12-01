/* 6.1.1 */

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.
// An example of the result:

function sumTo(n) { /*... your code ... */ }

alert( sumTo(100) ); // 5050
// P.S. Which solution variant is the fastest? The slowest? Why?

// P.P.S. Can we use recursion to count sumTo(100000)?

//Solution

"use strict";
let sumToFor = (n) => {
	let sum = 0;
	
	for(let i = 1; i <= n; i++) {
		sum += i;
	}
	
	return sum;
}
console.log(sumToFor(5));

let sumToRec = (n) => {
  if(n == 1) return 1;
  return n + sumToRec(n - 1);
}
console.log(sumToRec(5));

let sumToArith = (n) => {
	return (n * (n + 1)/2);
}
console.log(sumToArith(5));

/*P.S. Naturally, the formula is the fastest solution. It uses only 3 operations for any number n. The math helps!

The loop variant is the second in terms of speed. In both the recursive and the loop variant we sum the same numbers. But the recursion involves nested calls and execution stack management. That also takes resources, so it’s slower.

P.P.S. The standard describes a “tail call” optimization: if the recursive call is the very last one in the function (like in sumTo above), then the outer function will not need to resume the execution and we don’t need to remember its execution context. In that case sumTo(100000) is countable. But if your JavaScript engine does not support it, there will be an error: maximum stack size exceeded, because there’s usually a limitation on the total stack size.*/

/* 6.1.2 */

// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function factorial(n) that calculates n! using recursive calls.

alert( factorial(5) ); // 120
// P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

//Solution
"use strict"
let factorial = (n) => {
	if(n == 0 || n == 1) return n;

	return n * factorial(n - 1);
}

console.log(factorial(5));

/* 6.1.3 */
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

function fib(n) { /* your code */ }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.

//Solution 
"use strict";
let fib = (n) => {
	if(n <= 0) return -1;
	if(n <= 2) return 1;
	let a = 1, b = 1, c = 0;
	for(let i = 3; i <= n; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}

console.log(fib(8));

/* 6.1.4 */

// Output a single-linked list
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?

//Solution
//Loop based 
"use strict";
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let printList = (list) => {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }

}

printList(list);
/*
// Please note that we use a temporary variable tmp to walk over the list. Technically, we could use a function parameter list instead:

function printList(list) {

  while(list) {
    alert(list.value);
    list = list.next;
  }

}*/
/*…But that would be unwise. In the future we may need to extend a function, do something else with the list. If we change list, then we loose such ability.

Talking about good variable names, list here is the list itself. The first element of it. And it should remain like that. That’s clear and reliable.

From the other side, the role of tmp is exclusively a list traversal, like i in the for loop.*/

//Recursive


"use strict";
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let printListRec = (list) => {
	let temp = list;

	console.log(temp.value);
	if(temp.next != null) {
		printListRec(temp.next);
	}
}

printListRec(list);

/*Now what’s better?

Technically, the loop is more effective. These two variants do the same, but the loop does not spend resources for nested function calls.

From the other side, the recursive variant is shorter and sometimes easier to understand.*/

/* 6.1.5 */

//Loop Reverse
"use strict";
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let printListReverse = (list) => {
  let temp = list;
  let result = [];
  while (temp) {
    result.push(temp.value);
    temp = temp.next;
  }
  
  for(let i = result.length - 1; i >= 0; i--)
    console.log(result[i]);
}

printListReverse(list);

//Recursion Reverse
"use strict";
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let printListRecReverse = (list) => {
	let temp = list;

	if(temp.next != null) {
		printListRecReverse(temp.next);
	}
	console.log(temp.value);
}

printListRecReverse(list);

/*Please note that the recursive solution actually does exactly the same: it follows the list, remembers the items in the chain of nested calls (in the execution context stack), and then outputs them.*/