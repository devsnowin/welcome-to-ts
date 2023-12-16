/** Types in class */

class Person {

    // Static fields
    static foo = "foo";
    static #uuid = 100; // private field
    static #generateId() {return this.#uuid++}  // private field
    
    name: string
    age: number
    email: string
    id = Person.#generateId();   // static member

    static {
        console.log("I am static block, I ran before the constructor!");
    }

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        console.log("I am constructor, I ran after the static block! \n");
    }

    sayHi(times: number) {
        return `${'Hi,'.repeat(times)} ${this.name}!`
    }
}

let u1 = new Person("snowin", 22, "snowin@gmail.com");

// u1.getProfile() // ❌ Error: `getprofile` does not exist on the type Person


/** Class Method types */
const greetU1 = u1.sayHi(2);
console.log(greetU1);
// Hi,Hi, snowin!

/** Static field & members */
console.log(Person.foo)
// 101

console.log(new Person("mark", 19, "mark@gmail.com"));
// Person { id: 101, name: 'mark', age: 19, email: 'mark@gmail.com' }

console.log(new Person("jane", 32, "jane@gmail.com"));
// Person { id: 102, name: 'jane', age: 32, email: 'jane@gmail.com' }

/** STATIC BLOCKS
 * 
 * static blocks are new to javascript.
 * 
 * It actually initialized when the class get initilized.
 * Runs before constructor.
 * Used to generate and get some pre-required data.
 * 
 */


/** Private:
 * --------------------
 * In JS, the `#` or `private` keyword tells us that the field is private.
 * 
 * Note: The private keyword is limited to the TS ecosystem. It means that if the TS code is complied, the private fields can still be accessed. But by using the '#', which is a javascript way of declaring private fields, we ensure that the field is private even after compliance.
*/
