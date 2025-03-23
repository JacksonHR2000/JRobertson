"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person1 = {
    fName: "Jack",
    lName: "notRobertson",
    getFullName: function () {
        return `${this.fName}${this.lName}`;
    },
    getAge: function (num, name) {
        return num * 10;
    }
};
console.log(person1);
let person2 = {
    fName: "FirstName",
    lName: "LastName",
    isMarried: true,
    children: ["Mike", "BillyBob"],
    getFullName: function () {
        return `${this.fName}${this.lName}`;
    }
};
console.log(person2);
