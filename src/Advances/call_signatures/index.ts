export default {};

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  debugName?: string;
};

const add: Add = (a: number, b: number, c?: number): number => {
  return a + b + (c ? c : 0);
};

add.debugName = "Additional Function";

// ---------------------------------------------------------
type PointCreator = {
  new (x: number, y: number): { x: number; y: number };
  new (x: number, y: number, z: number): { x: number; y: number; z: number };
};

const Point: PointCreator = class {
  constructor(public x: number, public y: number, public z: number = 0) {}
};
