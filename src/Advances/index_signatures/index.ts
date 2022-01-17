export default {};

type Dictionary = {
  [key: string]: boolean;
};

type Person = {
  displayName: string;
  email: string;
};

type PersonDictionary = {
  [username: string]: Person | undefined,
};

const persons: PersonDictionary = {
  jane: { displayName: "Jane", email: "jane@gmail.com" },
};

persons["john"] = { displayName: "John", email: "john@gmail.com" };

console.log(persons["john"])

delete persons["john"]

const results = persons["missing"]
console.log(results, results?.email);

