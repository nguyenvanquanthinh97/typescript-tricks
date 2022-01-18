export default {}

// type IsArray<T> = 
//     T extends Array<any>
//     ? 'array'
//     : 'other';

type IsArray<T> =
    T extends Array<infer Member>
    ? Member
    : T

type WithArray = IsArray<string[]>
type WithNoArray = IsArray<number>

// -------------------------------
function createPerson(firstname: string, lastname: string) {
    return {
        firstname,
        lastname,
        fullname: `${firstname} ${lastname}`
    }
}

type ReturnType<T> = 
    T extends (...args: any) => infer R
    ? R
    : never

function logPerson(person: ReturnType<typeof createPerson>) {
    console.log(
        'Person:',
        person.firstname,
        person.lastname,
        person.fullname
    )
}