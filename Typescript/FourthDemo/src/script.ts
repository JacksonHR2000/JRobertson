
// Javascript objects
import{Person} from "./Person"

let person1:Person = {
    fName: "Jack",
    lName: "notRobertson",
    getFullName: function() {
        return `${this.fName}${this.lName}`
    },
    getAge: function(num:number, name:string){
    return num*10
}
}

console.log(person1)
// Create a second person
// Children with -2 names
// getAge is optional

let person2:Person = {
    fName: "FirstName",
    lName: "LastName",
    isMarried: true,
    children:["Mike", "BillyBob"],
    getFullName: function() {
        return `${this.fName}${this.lName}`

    }

}

console.log(person2)