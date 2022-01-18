type Point = {
    x: number,
    y: number,
    z: number
}

type ReadOnly<T> = {
    readonly [Item in keyof T]: T[Item]
}

const center: ReadOnly<Point> = {
    x: 0,
    y: 0,
    z: 0
}