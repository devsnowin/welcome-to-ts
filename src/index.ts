/** Index signature */

const x: {[k: string]: string} = {}

// Valid signature
x.foo = "foo"

// ❌ Invalid signature
// x.foo = 20

// const users = {
//     mark: {name: 'mark', age: 19},
//     kevin: {name: 'kevin', age: 28},
//     doe: {name: 'doe', age: 20},
// }

// added index signature to it

const users: {
    [k:string]: {
        name: string,
        age: number
    }
} = {
    mark: {name: 'mark', age: 19},
    kevin: {name: 'kevin', age: 28},
    doe: {name: 'doe', age: 20},
};

users.snowin;

// Now look at the type:
/**
    users[string]: {
        name: string;
        age: number;
    }
 */