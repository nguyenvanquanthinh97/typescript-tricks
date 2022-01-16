let notDefined: undefined = undefined;
let notPresent: null = null;

// class Point {
//     x: number;
//     y: number;
// }

// const center = new Point();
// center.x = 0;
// // center.y = 0;

// console.log(center.x, center.y); // 0, undefined

const logVowels = (value: string) => {
  console.log(value.match(/[aeiou]gi/));
};

logVowels("hello");
logVowels("sky");

console.log(null == null); // Of course
console.log(undefined == undefined); // Of course

console.log(undefined == null); // true

console.log(false == null); // false
console.log(0 == null); // false
console.log("" == null); // false

const decorate = (value: string | null | undefined) => {
  if (value == null) {
    return value;
  }
  return `--${value.trim()}--`;
};

console.log(decorate("Hello")) // --Hello--
console.log(decorate("Hello World")) // --Hello World--

console.log(decorate(null)); // null
console.log(decorate(undefined)); // undefined