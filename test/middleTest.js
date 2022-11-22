const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//test cases
console.log(middle([]));
console.log(middle([1]));
console.log(middle([1,2]));

console.log(assertArraysEqual(middle([1,2,3]), middle([1,2,3])));
console.log(assertArraysEqual(middle([1,2,3,4,5]), middle([1,3,3])));

console.log(assertArraysEqual(middle([1,2,4,5]), middle([1,3,2,4,3,6])));
console.log(assertArraysEqual(middle([1,2,6,5]), middle([1,3,2,4,3,6])));
console.log(middle([1,2,3,4,5,6]));


/*
****Output****
[]
[]
[]
✅✅✅ Assertion Passed: 2 === 2
undefined
✅✅✅ Assertion Passed: 3 === 3
undefined
✅✅✅ Assertion Passed: 2,4 === 2,4
undefined
🛑🛑🛑 Assertion Failed: 2,6 !== 2,4
undefined
[ 3, 4 ]
*/