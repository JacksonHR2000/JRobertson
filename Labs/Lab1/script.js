// Lab 1 - Create and run various Javascript projects
const menu = `Welcome to lab 1! Select a program below to run\n
    1 - Dynamic Age Calculator
    2 - Simple Interest Calculator
    3 - Favorite Color Selector
    4 - Event Countdown with Date Object
    5 - Temperature Classifier
    6 - Student Array Operations
    7 - Grade Classifications
    8 - Shopping List Operations
    9 - Weekday Detector
    10 - How Long Until Graduation
    \n             ***0 OR ENTER TO EXIT***\n`;

selectProgram()

function selectProgram() {
    let userChoice = -1;
    while (userChoice != 0) {
        userChoice = Number(prompt(menu + "Please make a selection: "));
        switch (userChoice) {
            case 1:
                calculateAge();
                break;
            case 2:
                calculateSimpleInterest()
                break;
            case 3:
                let myColorArr = ["Blue", "Green", "Yellow"];
                addColor((myColorArr))
                alert("Your new list of colors\n[" + myColorArr +"]")
                break;

            case 4:
                let eventDate = prompt("Input the date of your event\n *Must be entered as 'YYYY-MM-DD'");
                console.log("There are ", calculateDaysUntil(eventDate), "until your event!")
                break;

            case 5:
                classifyTemperature()
                break;

            case 6:
                // Task 6 [DONE] - Student Array Operations
                let myStudentArr = [["Alice", 20], ["Bob", 22], ["Charlie", 18]];

                let updateStudentArr = () => {
                    student = prompt("Which student would you like to update?")
                    studentFound = false;
                    age = prompt("What should " + student + "'s new age be?")
                    if (typeof age === 'number') {
                        console.log("Invalid age. Nothing updated!")
                        return -1;
                    }
                    for (let i = 0; i < myStudentArr.length; i++)
                        if (myStudentArr[i][0].toLowerCase() == student.toLowerCase()) {
                            myStudentArr[i][1] = age;
                            studentFound = true;
                        }
                    if (studentFound == false) {
                        console.log("Student not found. Nothing updated!")
                        return -1
                    }

                }
                // Print the current student array
                console.log("Pre-updated student array: " + myStudentArr)
                updateStudentArr() == -1 ? console.log("Error") : console.log("Student array updated")
                console.log("Updated student array: " + myStudentArr)
                break;

            case 7:
                classifyGrade();
                break;

            case 8:
                // Task 8 [DONE] - Shopping List Operations
                let myShoppingListArr = ["Eggs", "Butter", "Flour"];
                let myAddedItem = (myArr = myShoppingListArr, itemToAdd) => {
                    myShoppingListArr.push(itemToAdd);
                };
                myAddedItem(null, prompt("Your current shopping cart:\n[" + myShoppingListArr + "]\nWhat item would you like to add to your shopping cart? "));
                alert("Check the console for your result!")
                console.log("Your updated shopping cart:\n[" + myShoppingListArr + "]");
                break;

            case 9:
                // Task 9 [DONE] - Calculate the day of the week. Pull the day from the Date class and then append the word
                // day to the end of it.
                let myDate = Date()
                console.log("Today is: " + myDate.toString().slice(0, myDate.toString().indexOf(" ")) + "day")
                break;

            case 10:
                // Task 10 [DONE] - Use fat arrow function to determine today's date
                const todayDate = () => {
                    let calcDate = new Date()
                    monthArr = ["january", "February", "March", "April", "May", "June", "July",
                                "August", "September", "October", "November", "December"]
                    returnStr = "today is: " +
                        calcDate.getFullYear() + ", " +
                        monthArr[calcDate.getMonth()] + " " +
                        calcDate.getDate();

                    // Run some logic to append the ending marks to the date
                    if (calcDate.getDate == 11 || calcDate.getDate == 12 || calcDate.getDate == 13)
                        returnStr += "th"
                    else if (calcDate.getDate() % 10 == 1)
                        returnStr += "st"
                    else if (calcDate.getDate() % 10 == 2)
                        returnStr += "nd"
                    else if (calcDate.getDate() % 10 == 3)
                        returnStr += "rd"
                    else

                        returnStr += "th";

                    return returnStr
                }

                console.log("Today is: " + todayDate())
                console.log("You have: " + calculateDaysUntil("2025-05-17"), "until graduation")
                break;
        }
    }
    alert("Exiting program. Refresh page to restart");
}

// Task 1 [DONE] - Dynamic Age Calculator
function calculateAge() {
    let currYear = 2025;
    let birthYear = prompt("Enter your birth year")
    if (birthYear < 1900) {
        alert("You were not born before 1900. TRY AGAIN!")
        calculateAge()
    }
    alert("Check the console for your result!")
    console.log("You are ", currYear - birthYear, "years old!... \n(Unless you lied to me about your birth year)");
}

// Task 2 [DONE] - Simple Interest Calculator
function calculateSimpleInterest() {
    let principal = prompt("How much money did you borrow?\nEnter only the amount, no '$' sign")
    let rate = prompt("What is your interest rate?\nEnter only the amount, no '%' sign")
    let time = prompt("How many years is your loan for?")

    alert("Check the console for your result!")
    console.log("You owe $", (principal * rate * time)/100, "in interest on this loan.");
}

// Task 3 [DONE] - Favorite Color Search
function addColor(colorsArr) {
    colorsArr.unshift(prompt("Your current list of colors:\n[" + colorsArr + "]\nEnter a color to add to this array"));
}

// Task 4 [DONE] - Number of days till an event
function calculateDaysUntil(eventDate) {

    // Begin stupid logic to check the date

    dateValuesObj = {
        Year: parseInt(eventDate.slice(0, 4)),
        Month: parseInt(eventDate.slice(5, 7)) - 1,
        Day: parseInt(eventDate.slice(8, 10))
    }
    testDate = new Date(eventDate)

    // Run some data validation tests to ensure date format is accurate. This could be more efficient...
    // Will need to explore date validation more. This took a long time to tune and is unnecessarily redundant.
    eventDate.length === 10 ?   // Check that the string is length 10
        numDashes = (eventDate) =>  eventDate.split("-") === 2 : console.log("Invalid date format entered");
    if (!isNaN(testDate) && testDate.toString() !== 'Invalid Date') {

        todayDate = new Date();
        castedDate = new Date(dateValuesObj.Year, dateValuesObj.Month, dateValuesObj.Day)


        const timeDiff = Math.abs(castedDate.getTime() - todayDate.getTime());
        const numDaysTillEvent = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        return numDaysTillEvent
    }
    else
        console.log("Invalid date format entered")
}

// Task 5 [DONE] - Temperature Classifier
function classifyTemperature(tempInput) {
    C = prompt("What is the current temperature in C?")
    Fahrenheit = (C * (9/5)) + 32
    tempClassification = "";

    console.log("Fahrenheit temperature is: " + Fahrenheit);
    if (Fahrenheit > 100)
        tempClassification = "Hot!";
    else if (Fahrenheit >= 80)
        tempClassification = "Warm";
    else if (Fahrenheit <= 40)
        tempClassification = "Cold";
    else
        tempClassification = "Chilly"

    console.log("The temperature is: " + tempClassification);
}

// Task 7 [DONE] - Grade Classification
function classifyGrade() {
    userGrade = prompt("Input your grade (100-0)")
    let lettergrade = (userGrade <= 100 && userGrade >= 0)
        ? (userGrade >= 90) ? "A"
            : (userGrade >= 80) ? "B"
                : (userGrade >= 70) ? "C"
                    : (userGrade > 60) ? "D" : "Fail"   // Final condition
        :"Invalid input";

console.log(lettergrade);
}
