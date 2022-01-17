export default {};
type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Circle = {
  radius: number;
};

type Shape = Square | Rectangle | Circle;

const isSquare = (shape: Shape): shape is Square => {
  return "size" in shape;
};

const isRectangle = (shape: Shape): shape is Rectangle => {
  return "width" in shape;
};

const isCircle = (shape: Shape): shape is Circle => {
  return "radius" in shape;
};

const area = (shape: Shape) => {
  if (isSquare(shape)) {
    return Math.pow(shape.size, 2);
  }

  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  if (isCircle(shape)) {
    return Math.PI * Math.pow(shape.radius, 2);
  }

  const _ensure: never = shape;
  return _ensure;
};
