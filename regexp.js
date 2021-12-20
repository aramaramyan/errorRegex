"use strict";

/* 1. Matching Whitespaces:
      Match	1.   abc	        To be completed
      Match	2.	abc	          To be completed
      Match	3.           abc	To be completed
      Skip	4.abc */

const RegExp1 = /\d\.\s+abc/

console.log("Task 1: ", RegExp1.test("1.   abc"));         // true
console.log("Task 1: ", RegExp1.test("2.  abc"));          // true
console.log("Task 1: ", RegExp1.test("3.           abc")); // true
console.log("Task 1: ", RegExp1.test("4.abc"));            // false


/* 2. Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:

      Exactly 4 or 6 characters.
      Only numerical characters (0-9).
      No whitespace. */

const myRegExp = /^[\S]{4}$|^[\S]{6}$/;

console.log("Task 2: ", myRegExp.test("1234"));   // true
console.log("Task 2: ", myRegExp.test("45135"));  // false
console.log("Task 2: ", myRegExp.test("89abc1")); // false
console.log("Task 2: ", myRegExp.test("900876")); // true
console.log("Task 2: ", myRegExp.test(" 4983"));  // false