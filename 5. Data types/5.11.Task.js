/* 5.11.1 */

// Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

//Solution 

"use strict";

let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.stringify(user);
let s = JSON.parse(json);

console.log(s);

/* 5.11.2 */

// In simple cases of circular references, we can exclude an offending property from serialization by its name.

// But sometimes there are many backreferences. And names may be used both in circular references and normal properties.

// Write replacer function to stringify everything, but remove properties that reference meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  /* your code */
}));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

//Solution 

"use strict";

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));
//Here we also need to test key=="" to exclude the first call where it is normal that value is meetup.