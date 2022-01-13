// Typescript is structural type system
// Can assign to another typed variable that has the same structural type
type User = { id: string };
type Product = { id: string };

let user: User = { id: "123" };
let product: Product = { id: "456" };

user = product;
product = user;

///////////////////////////////////////
type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 1, y: 2 };
let point3D: Point3D = { x: 3, y: 4, z: 5 };

/**Extra info is OK */
point2D = point3D
const take2D = (point: Point2D) => {/**... */}
take2D(point3D)

/**Error: Missing Info */
point3D = point2D
const take3D = (point: Point3D) => {/**... */}
take3D(point2D)