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
    line = input.map(input => input.trim()).join(" ");
  }
  return line;
};

console.log(formatCommandLine("hello")); // "hello"
console.log(formatCommandLine(["hello", "world"])); // "hello world"
console.log(formatCommandLine(123)); // Error


/**
 * Take a padding and add padding to the left
 * If padding is a string, add `padding` to the left of value
 * If padding is a number, add that number of spaces to the left of value
 */
const padLeft = (value: string, padding: unknown) => {
    if (typeof padding === 'string') {
        return padding + value;
    }

    if (typeof padding === 'number') {
        return Array(padding).join(' ') + value
    }

    throw new Error(`Expected number of string, but get: ${typeof padding}.`)
}
