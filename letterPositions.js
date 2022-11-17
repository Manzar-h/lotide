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

const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]; // get the letter at position i
    if (letter !== ' ') {
      if (!Array.isArray(result[letter])) {
        // The array within the letter does not exist in the result
        result[letter] = [i];
      } else {
        result[letter].push(i);
      }
    }
  }
  return result;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello").e);
/*
****Output****
{
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]
}
*/

assertArraysEqual(letterPositions("hello").e, [1]);