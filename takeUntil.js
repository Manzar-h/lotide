const takeUntil = function(array, callback) {
  let results = [];
  for (let item in array) {
    if (callback(array[item]) === true) {
      break;
    } else {
      results.push(array[item]);
    }
  } return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
/*
****Output****
[ 1, 2, 5, 7, 2 ]
---
[ "I've", 'been', 'to', 'Hollywood' ]
*/
const eqArrays = function(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

//Test Cases:
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results1, [ "I've", 'been', 'to', 'Hollywood' ]);
assertArraysEqual(takeUntil(["bread", "egg", "butter"], item => item), ["bread", "egg"]);
assertArraysEqual(takeUntil(["bread", "egg", "butter"], item => item), ["bread", "egg", "butter"]);
assertArraysEqual(takeUntil(["bread", "egg", "butter"], item => item), ["bread", "egg", "butter", "pancake"]);

/*
****Output****
✅✅✅ Assertion Passed: 1,2,5,7,2 === 1,2,5,7,2
✅✅✅ Assertion Passed: I've,been,to,Hollywood === I've,been,to,Hollywood
🛑🛑🛑 Assertion Failed: 1,2,5,7,2 !== I've,been,to,Hollywood
🛑🛑🛑 Assertion Failed: bread,egg,butter !== bread,egg
✅✅✅ Assertion Passed: bread,egg,butter === bread,egg,butter
🛑🛑🛑 Assertion Failed: bread,egg,butter !== bread,egg,butter,pancake
*/