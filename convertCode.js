"use strict";

/* Convert the code using try...catch.

  function reverseString(s) {
    typeof s !== "string"
      ? console.log("s.split is not a function")
      : (s = s.split("").reverse().join(""));
    console.log(s);
  } */

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
    return s;
  } catch(error) {
    throw  error.message;
  }
}

console.log(reverseString("world")) // dlrow