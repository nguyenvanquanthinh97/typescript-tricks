export default {}
const center = {
  x: 0,
  y: 0,
  z: 0,
};

type Point = typeof center;

const point: Point = {
  x: center.x + 1,
  y: center.y + 1,
  z: center.z + 1,
};

// ------------------------
const personResponse = {
  name: "John",
  email: "John@gmail.com",
  firstname: "John",
  lastname: "Doe",
};

type PersonResponse = typeof personResponse;
function processResponse(person: PersonResponse) {
  console.log("Full name:", person.firstname, person.lastname);
}
processResponse(personResponse)
