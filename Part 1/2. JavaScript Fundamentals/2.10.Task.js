/* 2.10.1 */

if ("0") {
  alert( 'Hello' );
}


//Will alert? Yes

/* 2.10.2 */

let javaScriptName = prompt("What's the official name of JavaScript?", "");

if(javaScriptName == "ECMAScript") {
	alert("Right!");
} else {
	alert("You don't know ECMAScript!");
}


/* 2.10.3 */

"use strict";

let number = prompt("Enter a number",'');
if(number > 0) {
	alert(1);
} else if(number < 0) {
	alert(-1);
} else {
	alert(0);
}

/* 2.10.4 */

let username = prompt("Who's there?", "");

if(username == "Admin") {
	var password = prompt("Password?","XXX");
	if(password == "" || password == null) {
		alert('Canceled.');
	} else if(password == "TheMaster") {
		alert("Welcome!");
	} else {
		alert("Wrong password");
	}
} else if(username == null) {
	alert("Canceled.");
} else {
	alert("I don't know you");
}

/* 2.10.5 */

"use strict";

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let result = (a + b < 4) ? 'Below' : 'Over';

/* 2.10.6 */

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message = (login == 'Employee') ? 'Hello' : 
			  (login == 'Director') ? 'Greetings' : 
			  (login == '') ? 'No login' : '';
