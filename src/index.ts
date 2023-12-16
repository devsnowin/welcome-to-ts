/** Structural and Nominal Typings */

// Structural typings
/**
 * Focuses on the structure of types.
 * Allows for more flexibility and polymorphism.
 * Enables duck typing, where compatibility is based on having certain  properties/methods rather than a specific type.
 */

interface Point {
    x: number,
    y: number
};

function showPoint(point: Point)  {
    console.log(`X: ${point.x}, Y: ${point.y}`);
}

const point = {x: 20, y: 43, z: 98};
showPoint(point);   // Even it recevies an extra value. It did not throw an error.


/**
 * 
 * Nominal Typing:
 * 
 * Focuses on the name or explicit declaration of types.
 * Provides stronger type checking and avoids accidental compatibility
 * between unrelated types.
 * Requires explicit type declarations to establish compatibility.
 * 
 */

class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

function petSound(animal: Dog | Cat): void {
    // animal.bark()    //❌ Error: 'bark' is not a member of 'Dog | Cat'.
    
    // solution:
    if (animal instanceof Dog) {
        animal.bark();
    }
    if (animal instanceof Cat) {
        animal.meow();
    }
}

/**
 * ---------------- 
 * Extra:
 * ----------------
 * 
 * typeof vs instancesof
 * 
 * `typeof` is used to determine the data type of a variable or expression.
 * 
 * `instanceof` is used to check if an object is an instance of a particular class or 
 * constructor.
 * 
 */
