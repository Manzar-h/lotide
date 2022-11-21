const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

/*
****Output****
✅✅✅Assertion Passed: 5 === 5
✅✅✅Assertion Passed: Hello === Hello
*/