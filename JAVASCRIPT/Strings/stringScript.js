// Strings

// "hello"
// "hello'
// 'hello'
// These are all the same thing in Javascript

let greeting = 'hello';
console.log(greeting);
console.log("Re-assigning the variable to an int")
greeting = 21;
console.log(greeting);

let person = {
    fname: "JM",
    lname: "Pearson",
    age: 21,
    fullName: function() {
        console.log("full name: " + this.fname + " " + this.lname);
    }
}

console.log(person)
person.fullName();

// toUpperCase(), toLowerCase()
console.log(person.lname.toUpperCase());

let lname = "PeArS0n"
console.log("Does lname include P?: " + lname.includes("P"));

// Length
console.log("Length of lname: " + lname.length)

// Slicing
let lnameSlice = lname.slice(0, 4);
console.log(lnameSlice);