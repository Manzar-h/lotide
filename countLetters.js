const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") { // Spaces not counted
      if (result[letter]) { // increasing number for already counted letter
        result[letter] += 1;
      } else { // First count of letter
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;

console.log(countLetters('LHL'));
console.log(countLetters(' LLL  HHH  '));
console.log(countLetters("lighthouse in the house"));

/*
****Output****
{ L: 2, H: 1 }
{ L: 3, H: 3 }
{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
*/