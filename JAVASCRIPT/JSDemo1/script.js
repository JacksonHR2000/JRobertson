// console.log("What is your age?");
// Variables
// Var - GENERALLY BAD. variables are always GLOBAL and can be accessed by the user
// -> Also causes a memory leak
// Let - Declares a variable of unknown type. Can be anything
// const - CONSTANT variables that cannot be redefined.

let dog = "woof";
{
    let dog = "meow";
    console.log("Inside: " + dog);
}

dog = 40;

console.log(dog);

// Anonymous function
let add = function(a, b) {
    return a + b;
};

// Fat arrow function
let add2 = (a, b) => {
    return a * b;
};

// Fat arrow with an implied return
const multiply1 = a => a * a;

// Fat arrow function with multiple
const area = (num1, num2 = 20) => num1 * num2

console.log(add(3, 6))
console.log(add2(3, 6));
console.log(multiply1(3, 6));
console.log("Area:", area(multiply1(20), 3));