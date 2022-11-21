const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);

/*
****Output****
🛑🛑🛑Assertion Failed: Lighthouse Labs !== Bootcamp
✅✅✅Assertion Passed: Bootcamp === Bootcamp
✅✅✅Assertion Passed: 1 === 1
🛑🛑🛑Assertion Failed: 1 !== 3
*/