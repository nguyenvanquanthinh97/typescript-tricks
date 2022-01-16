export default {};
const fail = (message: string): never => {
  throw new Error("Always throw errors here");
};

const sing = (): never => {
  while (true) {
    console.log("This will loop infinite");
  }
};

/////////////////////////////////////////////
// User never to ensure all cases are handled in codebase
type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  kind: "circle";
  radius: number;
};

type Shape = Square | Rectangle | Circle;
const area = (shape: Shape): number => {
  if (shape.kind === "square") {
    return Math.pow(shape.size, 2);
  }

  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }

  if (shape.kind === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  }
  const _ensureAllCasesAreHandled: never = shape;
  return _ensureAllCasesAreHandled
};
