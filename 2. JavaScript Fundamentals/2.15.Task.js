/* 2.15.1 */

"use strict";

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

//Replace Function Expressions with arrow functions in the code:

let ask = (question, yes, no) => {
	if(confirm(question)) yes();
	else no();
};

ask("Do you agree?",
	() => alert("You agreed."),
	() => alert("You canceled the execution."));