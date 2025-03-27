"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monsterTypes_1 = require("./models/monsterTypes");
const Monster1 = {
    firstName: "Zorg",
    age: 500,
    type: "Undead",
    moreInfo: "Only has 1 eye. The first eye was lost in the goblin-conflict of '006"
};
const Monster2 = {
    firstName: "blobbo",
    age: 3,
    type: monsterTypes_1.MonsterType.Blob,
    moreInfo: "Absorbs everything in sight"
};
const Monster3 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    type: "Human",
    moreInfo: "Researches monsters"
};
const Monster4 = {
    firstName: "Mega",
    lastName: "Monster",
    age: 280,
    type: "Undead",
    moreInfo: "The final boss",
    powerLevel: 28000000
};
const myMonsters = [Monster1, Monster2, Monster4];
const monsterTuple = ["String", 1000, "Undead"];
console.log(Monster1);
console.log(Monster4);
console.log(myMonsters);
