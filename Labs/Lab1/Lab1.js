// Lab 1 - Create and run various Javascript projects

selectProgram()

function printSelectProgram() {
    console.log("Welcome to lab 1. Select a program below to run")
    console.log("1 - Dynamic Age Calculator")
    console.log("2 - Simple Interest Calculator")
    console.log("3 - Favorite Color Selector")
    console.log("4 - Event Countdown with Date Object")
    console.log("5 - Temperature Classifier")
    console.log("6 - Student Array Operations")
    console.log("7 - Grade Classifications")
    console.log("8 - Shopping List Operations")
    console.log("9 - Weekday Detector")
    console.log("10 - How Long Until Graduation")
    console.log("           0 TO EXIT           ")
}

function selectProgram() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question('Please enter your input: ', (input) => {
        console.log(`You entered: ${input}`);
        readline.close();
    });
    let userChoice = -1;
    while (userChoice != 0) {
        printSelectProgram()
    }
}