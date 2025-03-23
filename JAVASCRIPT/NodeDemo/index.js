const catMe = require("cat-me")
const yesNo = require("yes-no-words")
const yesNoWords = require("yes-no-words");
const pokemon = require("pokemon");

let pokedex = [{"name" : "null", "attack": 0}]

for(let i = 0; i < 5; i++) {
    let newChar = {
        "name" : pokemon.random(),
        "attack" : Math.trunc(Math.random(100) * 100)
    }
    pokedex[i] = newChar
}

// Need an array

// Need to create a random attack value between 10-100
// Each Pokemon needs a name and attack
// Pokemon = {name:value, attack:value}

console.log(pokedex)
