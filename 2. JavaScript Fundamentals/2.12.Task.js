/* 2.12.1 */

'use strict';
//What is the last value alerted by this code? Why?
let i = 3;

while (i) {
  alert( i-- );
}
//Answer: 1

/* 2.12.2 */

'use strict';
// For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

// The prefix form ++i:
let i = 0;
while (++i < 5) alert( i ); //From 1 to 4

//The postfix form i++
let i = 0;
while (i++ < 5) alert( i ); //From 1 to 5

/* 2.12.3 */

'use strict';
// For each loop write down which values it is going to show. Then compare with the answer.

// Both loops alert same values or not?

//The postfix form:
for (let i = 0; i < 5; i++) alert( i );// 0 to 4
//The prefix form:
for (let i = 0; i < 5; ++i) alert( i ); // 0 to 4


/* 2.12.4 */

'use strict';
for(let i = 2; i <= 10; i++) if(i % 2 == 0) alert(i);

/* 2.12.5 */

'use strict';
//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
//Rewrite
let i = 0;
while(i < 3) {
	alert( `number ${i}!`);
	i++;
}

/* 2.12.6 */

'use strict';
let number;
do {
number = prompt('Input a number greater than 100',0);
//if(number == null) break; (moved to while second condition)
}while(number <= 100 && num)

/* 2.12.7 */

'use strict';
nextPrime: for(let i = 2; i < n; i++) {
	for(let j = 2; j <= Math.sqrt(i); j++) {
		if(i % j == 0) continue nextPrime;
	}
	alert(i);
}