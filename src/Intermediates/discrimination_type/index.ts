type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Square | Rectangle;
const area = (shape: Shape) => {
  if (shape.kind === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  }

  if (shape.kind === "square") {
    return Math.pow(shape.size, 2);
  }

  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
};
