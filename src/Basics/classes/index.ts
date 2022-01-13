class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`)
    }
}

class Bird extends Animal {
    public fly(distance: number): void {
        console.log(`${this.name} flied ${distance} meters.`)
    }
}

const bird = new Bird("Leo")
bird.fly(3)