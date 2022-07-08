// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// kata1
// const stringToNumber = function (str) {
//   return Number(str);
// };
// console.log(stringToNumber("1234"), 1234);
// console.log(stringToNumber("605"), 605);
// console.log(stringToNumber("1405"), 1405);
// console.log(stringToNumber("-7"), -7);

//kata2
//my solution
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}

//higher voted solutions

// as ternary operator
function makeNegative(num) {
  return num < 0 ? num : -num;
}

//using Math.abs
function makeNegative(num) {
  return -Math.abs(num);
}

console.log(makeNegative(-42));

