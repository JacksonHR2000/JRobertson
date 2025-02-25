
// let answer = prompt("What is your age?")

// answer = parseInt(answer);
let answer2 = prompt("Enter number 2");
alert("Before bitshift: " + answer2)
alert("After bitshift: " + answer2)

answer2 = Number(answer2);

if (answer === 20) {
    alert("You are 20 years old! You passed in type: " + typeof(answer))
}
else {
    alert("you are NOT 20 years old!")
}

alert("Number2 = " + answer2);
let age = 22;

let sentence1 = "I love " + "chocolate"
let sentence2 = `${sentence1} and other stuff!`
let sentence3 = `${age > 21 ? "yeah!" : "Booo"} and other stuff`

console.log(sentence2);
console.log(sentence3);