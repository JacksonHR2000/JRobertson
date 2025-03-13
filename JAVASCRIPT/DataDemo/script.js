// User completes form

// Add an event listener
// Retrieve data = names

let form = document.getElementsByTagName("form")[0]
form.addEventListener("submit", () => {
    event.preventDefault()
    let username = document.getElementById("username")
    let password = document.getElementById("password")
    let isMarried = document.querySelector('input[name="isMarried"]:checked')

    let submitObj = {
        username: username.value,
        password: password.value,
        isMarried: isMarried.value
    }
    let myStr = JSON.stringify(submitObj)
    // fetch(endpoint,
    //     {method: "POST"})
    //     .then()
    //     .then()
    //     .catch()

    console.log("Your input username: ", submitObj)
    console.log("Your new string, my lord", myStr)
    alert("Submitted")
})
// Build object using this data

// Do something - send to a database?