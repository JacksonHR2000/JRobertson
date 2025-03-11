//alert("Your script.js file is running")

let myFood = document.getElementById("fruit")
console.log(myFood)

// Change color loop
function delayedLoop(i) {
    if (i < 10000) {
        setTimeout(function()
        {
            changeColor(myFood, i % 10);
            delayedLoop(i + 1);
        }, 80);
    }
}
delayedLoop(0); // Start the loop
// End change color loop

let foods = document.getElementsByClassName("breakfast");
// :HTMLCollectionOf<Element>
console.log(foods)

let foodsByTag = document.getElementsByTagName("li");
console.log(foodsByTag)

let food4 = document.querySelector('#fruit')
console.log("food4", food4)

let results = document.querySelectorAll("h1")
console.log("food5", results[results.length -1 ])

document.querySelector("ul").innerHTML

let firstLi = document.querySelectorAll("li")

let answer = document.querySelector("a").getAttribute("href")
console.log(answer)
document.querySelector("a").setAttribute("href", "https://www.amazon.com")

// Change the href for the costco tag
answer = document.querySelector("a").getAttribute("href")
console.log(answer)

// Affect the website's button functions
// Grab ALL the buttons from the website.
let buttons = document.getElementsByTagName("button")
// Target the first button and add a listener to give us an alert when clicked
// Could change the buttons[0] to buttons[1] to hit the 2nd button on the page.
buttons[0].addEventListener("click", () => {
    alert("clicked")
})
buttons[1].addEventListener("click", () => {
    alert("You've clicked me too!")
})

function changeColor(element, num) {

    switch(num) {
        case 1:
            element.style.color="red"
            break;
        case 2:
            element.style.color="blue"
            break;
        case 3:
            element.style.color="green"
            break
        case 4:
            element.style.color="yellow"
        case 5:
            element.style.color="red"
            break;
        case 6:
            element.style.color="blue"
            break;
        case 7:
            element.style.color="green"
            break
        case 8:
            element.style.color="yellow"
            break;
        case 9:
            element.style.color="purple"
            break
        case 10:
            element.style.color="orange"

    }
}