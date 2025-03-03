let numbers = [1, 2, 3];

// Append to the end of an array
numbers.push(5);
popped = numbers.unshift(.1, .2)
console.log(numbers);
console.log(popped)

let names = ["Dan", "Connor", "Abhi", "Ethan", "Josh"]
// name.forEach(el => {
//     console.log(`${el}'s`);
// })

let addOwnership = names.map(function (num) {
    return num + "'s";
})

console.log("Doubled Names: " + addOwnership);

let newNumbers = [2, 3, 4]
let newArray = newNumbers.filter(function(kittyCat) {
    return kittyCat % 2 === 0
})
console.log(newArray)

let numbersArr = [10, 1, 100, 3, 34, 11]
numbersArr.sort(function(a, b) {
    return a-b
})

let numbersArr2 = [10, 1, 100, 3, 35, 11]
console.log(numbersArr2)

let person = {
    family: ["Skylar", "Walt Jr", "Holly"],
    city: "Albuquerque",
    smart: true,
    associates: {
        friend: "jesse",
        enemy: "Gus",
    },
    hobbies: "Cooking",
    };
console.log(person["family"][1])