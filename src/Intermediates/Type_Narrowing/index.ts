export default {};

// use 'typeof' if it is javascript primary type
/**
 *
 * @param input a command or an array or commands
 * @returns a single command line
 */
const formatCommandLine = (input: string | string[]) => {
  let line = "";
  if (typeof input === "string") {
    line = input.trim();
  } else {
    line = input.map((input) => input.trim()).join(" ");
  }
  return line;
};

console.log(formatCommandLine("hello")); // "hello"
console.log(formatCommandLine(["hello", "world"])); // "hello world"

// use 'instanceof'
class Cat {
  meow() {
    console.log("Meow!");
  }
}

class Dog {
  bark() {
    console.log("Bark!");
  }
}

type Animal = Cat | Dog;
const speak = (animal: Animal) => {
  if (animal instanceof Cat) {
    animal.meow();
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
};
speak(new Cat());

// use 'in'
type Square = {
  size: number;
};

type Rectangle = {
  height: number;
  width: number;
};

type Shape = Square | Rectangle;
const area = (shape: Shape) => {
  if ("size" in shape) {
    return Math.pow(shape.size, 2);
  }

  if ("width" in shape) {
    return shape.width * shape.height;
  }
};
console.log(area({ size: 5 }));
console.log(area({ height: 3, width: 5 }));
