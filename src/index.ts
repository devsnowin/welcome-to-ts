const dog: string = "Tommy";

dog;

let age = 20;

// age = "20"    // Type Error ❌

export const WAIT = Math.floor(Math.random() * 500) +  500;

let startTime = new Date();
let endTime: Date;

setTimeout(() => {
    // endTime = 0; // 🐞 Type 'number' is not assignable to type 'Date'.
    startTime = new Date();
}, WAIT)
