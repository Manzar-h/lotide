# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @minzi123/lotide`

**Require it:**

`const _ = require('@minzi123/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`:Take in two arrays and console.log an appropriate message to the console.

* `assertEqual()`: Compare the two values it takes in and print out a message telling us if they match or not.

* `assertObjectsEqual()`:Take in two objects and console.log an appropriate message to the console.

* `countLetters()`:Take in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `countOnly()`:Take in a collection of items and return counts for a specific subset of those items.

* `eqArrays()`:Takes in two arrays and returns true or false, based on a perfect match.

* `eqObjects()`:Take in two objects and returns true or false, based on a perfect match.

* `findKey()`:Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

* `findKeyByValue()`:Takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

* `head()`: Returns the first item in the array.

* `letterPositions()`:Return all the indices (zero-based positions) in the string where each character is found.

* `map()`: Will take in two arguments: 1)An array to map, 2)A callback function, and return a new array based on the results of the callback function.

* `middle()`:Take in an array and return the middle-most element(s) of the given array.

* `tail()`:return an array of all elements except first.

* `takeUntil()`:Return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

* `without()`: Return a subset of a given array, removing unwanted elements.