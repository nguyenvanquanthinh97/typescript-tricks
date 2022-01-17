export default {};
type Person = {
  name: string;
  dateOfBirth?: Date;
};

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return;
  throw new Error(`Expect value type Date, but got ${value}`);
}

const loadPerson = (): Person | undefined => {
  return { name: "Leo", dateOfBirth: new Date(Date.now()) } as Person;
};

const person = loadPerson();
assert(person != null, "Could not load person");
console.log(person.name);

assertDate(person.dateOfBirth)
console.log(person.dateOfBirth.toISOString())