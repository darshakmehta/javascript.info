 2.11.1 */

'use strict';
alert( null || 2 || undefined );//2

/* 2.11.2 */

'use strict';
alert( alert(1) || 2 || alert(3) );

//The answer: first 1, then 2.
/*
The call to alert does not return a value. Or, in other words, it returns undefined.
The first OR || evaluates it’s left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3).*/

/* 2.11.3 */

'use strict';
alert( 1 && null && 2 ); //null

/* 2.11.4 */

'use strict';
alert( alert(1) && alert(2));

//The answer: 1, and then undefined.

/*
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).
Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.
*/

/* 2.11.5 */

'use strict';
alert( null || 2 && 3 || 4 );

// The answer: 3.
// The precedence of AND && is higher than ||, so it executes first.

// The result of 2 && 3 = 3, so the expression becomes:
// null || 3 || 4
// Now the result is the first truthy value: 3.

/* 2.11.6 */

'use strict';
if(age >= 14 && age <= 90)

/* 2.11.7 */

'use strict';

if(!(age >= 14 && age <= 90))

if(age < 14 || age > 90)


/* 2.11.8 */

'use strict';
if (-1 || 0) alert( 'first' ); //return true alert yes
if (-1 && 0) alert( 'second' ); // returns false alert no
if (null || -1 && 1) alert( 'third' ); //returns 1 (true) so alert yes
// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
