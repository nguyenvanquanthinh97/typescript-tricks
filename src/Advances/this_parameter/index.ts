function double(this: {value: number}) {
    this.value = this.value * 2;
}

const valid = {
    value: 10,
    double
}

valid.double();
console.log(valid.value)

const invalid = {
    valeu: 5,
    double
}

invalid.double();