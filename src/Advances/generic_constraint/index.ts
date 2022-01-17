type NameFields = {firstname: string, lastname: string};
function addFullName<T extends NameFields>(obj: T): T & {fullname: string} {
    return {
        ...obj,
        fullname: `${obj.firstname} ${obj.lastname}`
    }
}

const john = addFullName({
    email: 'john@gmail.com',
    firstname: 'john',
    lastname: 'anderson'
})

console.log(john.email);
console.log(john.fullname);

const jane = addFullName({firstname: 'jane'}) // Error missing property lastname