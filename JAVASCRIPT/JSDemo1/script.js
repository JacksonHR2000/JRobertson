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