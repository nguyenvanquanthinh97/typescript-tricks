function sum(...values: number[]): number {
    return values.reduce((total, value) => total = total + value, 0)
}

type Add = (a: number, b: number) => number;

let add: Add;

add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(1, 2))
