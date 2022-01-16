export default {};
// type Point = {
//     x: number,
//     y: number
// }

// let point: Point;
// const initialize = (): Point => {
//     return {x: 0, y: 0}
// }
// point = initialize();
// console.log('After initialise', point.x, point.y)

// ---------------------------------------------------

type Point = {
  x: number;
  y: number;
};

let point: Point;
const initialize = () => {
  point = { x: 0, y: 0 };
};
initialize();
console.log("After initialize:", point!.x, point!.y);

// --------------------------------------------------
type Person = {
  name: string;
  email?: string | null;
};

const sendEmail = (email: string) => {
  console.log("Sent email to", email);
};

const ensureContactable = (person: Person) => {
  if (person.email) throw new Error(`Person ${person.name} is not contactable`);
};

const contact = (person: Person) => {
    ensureContactable(person);
    sendEmail(person.email!) // Trust developer, that email is always visible in person object.
}

contact({name: "Leo"})