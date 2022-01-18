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
state.update({y: 103}) // Partial: no need to provide `x`.
console.log(state.current) // Update Successful { x: 0, y: 103}


// --------------------------------
type Required<T> = {
  [key in keyof T]-?: T[key]
}

type PartialPoint = {x?: number, y?: number}
type RequiredPoint = Required<PartialPoint> // {x: number, y: number}

type CircleConfig = {
  color?: string,
  radius?: number
}

class Circle {
  // Required: Internally all members will always be present
  private config: Required<CircleConfig>

  constructor(config: CircleConfig){
    this.config = {
      color: config.color ?? 'green',
      radius: config.radius ?? 10
    }
  }

  draw() {
    console.log(
      'Drawing a circle.',
      'Color', this.config.color,
      'Radius', this.config.radius
    )
  }
}