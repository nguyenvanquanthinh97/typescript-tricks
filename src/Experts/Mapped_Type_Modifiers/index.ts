export default {};

type Point = {
  readonly x: number;
  y?: number;
};

type MappedType<T> = {
  +readonly [key in keyof T]-?: T[key];
};

type Result = MappedType<Point>;

// --------------------------------
type Partial<T> = {
    [key in keyof T]?: T[key]
}
class State<T extends Object> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, next };
  }
}

const state = new State({x: 0, y: 0})
state.update({y: 103})
console.log(state.current)
