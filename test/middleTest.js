const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const assert = require('chai').assert;

describe('#middle', () => {
  it("Odd Numbers Test: returns [2] for [1, 2, 3]", () =>{
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

describe('#middle', () => {
  it("2 Odd Numbers arrays with differnt length but with same middle will return true", () =>{
    assert.deepEqual(middle([1, 2, 3]), middle([-1, 1, 2, 4, 5]));
  });
});

//edge Cases:
describe('#middle', () => {
  it("returns [] for empty array", () =>{
    assert.deepEqual(middle([]), []);
  });
});

describe('#middle', () => {
  it("returns [] of array with one element", () =>{
    assert.deepEqual(middle([1]), []);
  });
});

describe('#middle', () => {
  it("returns [] of array with two element", () =>{
    assert.deepEqual(middle([1, 2]), []);
  });
});

/*Output 
#middle
    ✔ Odd Numbers Test: returns [2] for [1, 2, 3]

  #middle
    ✔ 2 Odd Numbers arrays with differnt length but with same middle will return true

  #middle
    ✔ returns [] for empty array

  #middle
    ✔ returns [] of array with one element

  #middle
    ✔ returns [] of array with two element


  5 passing (3ms)
  */