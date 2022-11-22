const assert = require('chai').assert;

const assertEqual = require('../assertEqual');
const head = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
});

describe("#head", () => {
  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

describe("#head", () => {
it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});
});

it("returns '8' for ['8']", () => {
  assert.strictEqual(head(['8']), '8'); 
});

/*
****Output****
   ✔ returns '8' for ['8']
  #head
    ✔ returns 5 for [5, 6, 7]

  #head
    ✔ returns Hello for [Hello, Lighthouse, Labs]

  #head
    ✔ returns '5' for ['5']


  4 passing (3ms)
*/