// Consume an API (Get data from an already existing API)
// Free or credentials

// All breeds
// https://dog.ceo/api/breeds/list/all

// Random breed
// https://dog.ceo/api/breeds/image/random

// By breed
// https://dog.ceo/api/breed/hound/images

const BASEURL = "https://dog.ceo/api"
let route = "breeds/image/random"
let endpoint = `${BASEURL}/${route}`

let button= document.getElementsByTagName("button")
button[0].addEventListener("click", () => {
    fetch(endpoint)
        .then(data => {
            if(data.ok) {
                let result = data.json()
                return result
            }
            else
                throw Error("Jack broke it!!!!!")
        })
        .then(parseData => {
            document.getElementById("dogImg").setAttribute("src", parseData.message)
        })
        .catch(error => {
            console.log(error)
        })
})
// Fetch skeleton
// Utilize endpoint