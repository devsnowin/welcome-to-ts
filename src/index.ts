/** Array types */

const names = ["john", "mark", "janny"];

// Here the typescript knows the type of names
/**
 * const names: string[]
 * Array types
 */

let car = [
    2012,
    "Toyota",
    "Coralla"
];

const [year, make, model] = car;

// In this case, The typescript is not smart enough to know the types. If we look at the type of car.

/**
 * let car: (string | number)[] 
 * const names: string[] Array types
 */

// It's an combine of string and number

// solution:
let car2: [number, string, string] = [
    2012,
    "Toyota",
    "Coralla"
]

// car2 = ["Toyota", 2022, "Coralla"]  // ❌ Wrong convention
// car2 = [2022, "Toyota", "Coralla", "Mark"]; // ❌ Too many values 👇

// ❌ Error:
/**
 * Type '[number, string, string, string]' is not assignable to type '[number, string, string]'.
 * Source has 4 element(s) but target allows only 3.ts(2322)
 */


/** Read only array
 * 
 * We ca declare a read-only array 😲?
 * Yes, we can.
 */

const nums: readonly [number, number] = [22, 43];

nums.length;    // output: 2

// Now we can't mutate the array

// nums.push(25)   // ❌ Error: Property 'push' does not exist on type 'readonly [number, number]'.ts(2339).

// NOTE: we can't perform the array mutation methods after we declare an array as `readonly`.