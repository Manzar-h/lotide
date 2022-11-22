const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  const keysOfObject = Object.keys(object);//Array of all objects keys
  let final;
  for (let key of keysOfObject) {
    if (callback(object[key])) {
      final = key;
      break; //find the first key and exit the loop
    }
   
  }
  return final;
};

module.exports = findKey;

// first test case: matches
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

//second test case: not matches
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "noma");

//3rd test case: no key is found, return undefined.
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), "noma");

/*
****Output***
✅✅✅Assertion Passed: noma === noma
🛑🛑🛑Assertion Failed: Akaleri !== noma
🛑🛑🛑Assertion Failed: undefined !== noma
*/