/* 4.2.1 */

// What’s the output of the code below?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//Solution : Output is 1

/* 4.2.1 */

// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  // your code
}

delay(3000).then(() => alert('runs after 3 seconds'));

//Solution

function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 3000);
	});
}
delay(3000).then(() => alert('runs after 3 seconds'));

//Shorter way

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

// Please note that in this task resolve is called without arguments. 
//We don’t return any value from delay, just ensure the delay.

/* 4.2.3 */

//TODO