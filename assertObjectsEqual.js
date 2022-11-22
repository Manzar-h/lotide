//take in two objects and comapre, message if equal or not
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Comparing 2 objects, if equal or not
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key].length !== object2[key].length) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
// Comparing 2 arrays, if equal or not
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = assertObjectsEqual;

//input
const a = { a: "1", b: "" };
const b = { b: "2", a: "1" };
assertObjectsEqual(a, b);
const c = { a: '1', b: 2 };
const d = { b: 2, a: '1' };
assertObjectsEqual(c, d);
/*
****Output****
🛑🛑🛑  Assertion Failed: { a: '1', b: '' } !== { b: '2', a: '1' }
✅✅✅  Assertion Passed: { a: '1', b: 2 }  === { b: 2, a: '1' }
*/