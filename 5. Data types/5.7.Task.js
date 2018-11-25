 5.7.1 */

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
  /* your code */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
// P.S. Here strings are used, but can be values of any type.

// P.P.S. Use Set to store unique values

// Solution 

"use strict";

function unique(arr) {
  return Array.from(new Set(arr)); 
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O

/* 5.7.2 */

// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Write a function aclean(arr) that returns an array cleaned from anagrams.

// For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// From every anagram group should remain only one word, no matter which one.

//Solution
"use strict";

let aclean = (arr) => {
  let resultArr = [];
  let set = new Set();
	for(let word of arr) {
	  let charArr = word.toLowerCase().split('').sort().join('');
	  if(!set.has(charArr)) {
	    resultArr.push(word);
	    set.add(charArr);
	  }
	}
	return resultArr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

//Another Solution => Using Map
//Another Solution => Using Object

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Array.from(Object.values(obj));
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

/* 5.7.3 */

// We want to get an array of map.keys() and go on working with it (apart from the map itself).

// But there’s a problem:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: numbers.push is not a function
keys.push("more");
// Why? How can we fix the code to make keys.push work?

//Solution

// That’s because map.keys() returns an iterable, but not an array.

// We can convert it into an array using Array.from:

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more


/* 5.7.4 */

// There’s an array of messages:

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
// Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.

// Now, which data structure you could use to store information whether the message “have been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.

// P.S. When a message is removed from messages, it should disappear from your structure as well.

// P.P.S. We shouldn’t modify message objects directly. If they are managed by someone else’s code, then adding extra properties to them may have bad consequences.

//Solution

// The sane choice here is a WeakSet:

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)

// The WeakSet allows to store a set of messages and easily check for the existance of a message in it.

// It cleans up itself automatically. The tradeoff is that we can’t iterate over it. We can’t get “all read messages” directly. But we can do it by iterating over all messages and filtering those that are in the set.

// P.S. Adding a property of our own to each message may be dangerous if messages are managed by someone else’s code, but we can make it a symbol to evade conflicts.

// Like this:

// the symbolic property is only known to our code
let isRead = Symbol("isRead");
messages[0][isRead] = true;
// Now even if someone else’s code uses for..in loop for message properties, our secret flag won’t 

/* 5.7.5 */

// There’s an array of messages as in the previous task. The situation is similar.

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
// The question now is: which data structure you’d suggest to store the information: “when the message was read?”.

// In the previous task we only needed to store the “yes/no” fact. Now we need to store the date and it, once again, should disappear if the message is gone.

//Solution

// To store a date, we can use WeakMap:

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
// Date object we'll study later