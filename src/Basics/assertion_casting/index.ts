let leet;

// Later
leet = "1337";

// Use as number
// #WRONG: Type Assertion is not Type casting
// const number = leet  as number;
// console.log(number === 1337); // false
// console.log(number);

// #RIGHT:
const number = Number(leet);
console.log(number === 1337); // true