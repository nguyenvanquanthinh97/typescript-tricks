export default {}
// readonly array
function reverseSorted(input: readonly number[]): number[] {
  return input.slice().sort().reverse();
}

const start = [1, 2, 3, 4, 5];
const result = reverseSorted(start);

console.log(start);
console.log(result);

// readonly tuple
type Point = readonly [number, number];

function move(point: Point, x: number, y: number): Point {
    return [point[0] + x, point[1] + y]
}

const point: Point = [0, 0]
const movedPoint = move(point, 10, 10);

console.log(point)
console.log(movedPoint)