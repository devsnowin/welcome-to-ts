function add(num1: number, num2: number) {
    return num1 + num2;
};

add(20, 43);

/**
 * Here the functions takes two values and returns the sum of those values.
 * 
 * NOTE: Typescript knows the return even if we didn't declare.
 * 
 * This may helpful in certain but it also cause some problems in some case.
 * 
 * Let's look at it!
 */

function sub(num1: number, num2: number) {
    if (Math.random() > 0.5) {
        return num1 - num2;
    }
}

const result = sub(20, -20)
// console.log(result.toExponential());  // ❌ this may cause error result is `undefined`.

/**
 Here, In the above code the function may return `undefined`. So, it depends on the use case. When to use types and when not.
*/ 
