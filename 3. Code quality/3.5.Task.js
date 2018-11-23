// What’s wrong in the test of pow below?

it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

//Solution

describe("pow", () => {

	it("5 raise to 1 equals 5", () => {
		assert.equal(pow(5, 1), 5);
	});

	//Also we can isolate a single test and run it in standalone mode by writing it.only instead of it:
	//Mocha will run only this block
	it.only("5 raise to 2 equals 25", () => {
		assert.equal(pow(5, 2), 25);
	});

	it("5 raise to 3 equals 125", () => {
		assert.equal(pow(5, 3), 125);
	});
});