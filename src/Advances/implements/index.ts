export default {}

type Animal = {
    name: string,
    voice(): string
}

const log = (animal: Animal) => {
    console.log(`Animal ${animal.name}: ${animal.voice()}`)
}

class Cat implements Animal {
    constructor(public name: string) {}
    voice() {
        return "Meow"
    }
}

class Dog implements Animal {
    constructor(public name: string) {}
    voice(): string {
        return "Bark"
    }
}