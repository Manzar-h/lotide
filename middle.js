const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
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

const middle = function(array) {
  let arr = [];
  
  if (array.length <= 2) {
    return arr;
  } else if (array.length % 2 === 0) {
    arr = array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    arr =  [array[Math.floor(array.length / 2)]];
  }
  return arr;
};

//test cases
console.log(middle([]));
console.log(middle([1]));
console.log(middle([1,2]));

console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5]));

console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6]));


/*
****Output****
[]
[]
[]
[ 2 ]
[ 3 ]
[ 2, 3 ]
[ 3, 4 ]
*/