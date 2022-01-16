export default {}

type Point2D = {
    x: number,
    y: number
}

type Point3D = Point2D & {
    z: number
}

type Person = {
    name: string
}

type Email = {
    email: string
}

type Phone = {
    phone: string
}

const contact = (details: Person & Email & Phone) => {
    console.log(`Dear ${details.name}.
    I hope you received our email at ${details.email}.
    We will call you at ${details.phone} shortly`);
}