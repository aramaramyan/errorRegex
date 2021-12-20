"use strict";

/* Complete the isPositive function below. It has one integer parameter a.
   If the value of a is positive, it must return the string YES. Otherwise,
   it must throw an Error according to the following rules:

   If a is 0, throw an Error with message = Zero Error.
   If a is negative, throw an Error with message = Negative Error. */

function isPositive(a) {
  if(a > 0) {
    return "YES";
  } else if(a === 0) {
    throw "Zero Error!";
  } else if(a < 0) {
    throw "Negative Error!";
  } else {
    throw "The argument of function must be an integer!"
  }
}

try {
  console.log(isPositive(9));      // YES
  console.log(isPositive(0));      // Zero Error!
  console.log(isPositive(-8));     // Negative Error!
  console.log(isPositive([1, 2])); // The argument of function must be an integer!
} catch(error) {
  console.log(error);
}