type Point = {
  x: number;
  y: number;
  z: number;
};

type ReadOnly<T> = {
  readonly [Item in keyof T]: T[Item];
};

const center: ReadOnly<Point> = {
  x: 0,
  y: 0,
  z: 0,
};

function makeReadOnly<T>(object: T): ReadOnly<T> {
  return Object.freeze({ ...object });
}

const editablePoint = { x: 0, y: 0 };
editablePoint.x = 2;

const readonlyPoint = makeReadOnly({ x: 1, y: 1 });
readonlyPoint.x = 3; // Error
