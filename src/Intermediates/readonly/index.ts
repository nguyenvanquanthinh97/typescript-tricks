export default {}
type Point = {
  readonly x: number;
  y: number;
};

const point: Point = { x: 0, y: 0 };

// Variable assignment
point = { x: 1, y: 1 }; // Error

// Properties assignment
point.x = 2; // Error
point.y = 2;

// Property Read
console.log(`${point.x} ${point.y}`)

class Animal {
    public readonly name: string;
    constructor(name: string) {
        this.name = name
    }
}

const sheep = new Animal('sheep')
sheep.name = "Leo" // Error