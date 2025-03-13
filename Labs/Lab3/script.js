// Consume an API (Get data from an already existing API)
// Free or credentials

// All breeds
// https://dog.ceo/api/breeds/list/all

// Random breed
// https://dog.ceo/api/breeds/image/random

// By breed
// https://dog.ceo/api/breed/hound/images

// const BASEURL = "https://dog.ceo/api"
// let route = "breed/image/random"
// let endpoint = `${BASEURL}/${route}`

let dogPhotosArr = []
let currDogDisplay = 0

let buttonGenDog= document.getElementById("generateDogBtn")
buttonGenDog.addEventListener("click", () => {
    let dogChoice = document.getElementById("selectedBreed").value;
    if((dogChoice !== "Null")) {
     // if(dogChoice) {
        dogPhotosArr = [] // Reset the array
        for (let i = 0; i < 10; i++) {
            const BASEURL = "https://dog.ceo/api/breed"
            let route = `${document.getElementById("selectedBreed").value}/images/random`
            let endpoint = `${BASEURL}/${route}`

            fetch(endpoint)
                .then(data => {
                    if (data.ok) {
                        let result = data.json()
                        return result
                    } else
                        throw Error("Jack broke it!!!!!")
                })
                .then(parseData => {
                    document.getElementById("dogImg").setAttribute("src", dogPhotosArr[currDogDisplay])
                    dogPhotosArr.push(parseData.message)
                })
                .catch(error => {
                    console.log(error)
                })
        }
     }
})

let nextDogBtn= document.getElementById("nextDogBtn")
nextDogBtn.addEventListener("click", () => {
    if (currDogDisplay == dogPhotosArr.length - 1) {
        currDogDisplay = 0; // If we overran the array
        document.getElementById("dogImg").setAttribute("src", dogPhotosArr[currDogDisplay])
        // document.getElementById("dogNotification").setAttribute()
    }
    else
        document.getElementById("dogImg").setAttribute("src", dogPhotosArr[++currDogDisplay])
})

let previousDogBtn= document.getElementById("previousDogBtn")
previousDogBtn.addEventListener("click", () => {
    if (currDogDisplay == 0) {
        currDogDisplay = dogPhotosArr.length - 1; // If we overran the array
        document.getElementById("dogImg").setAttribute("src", dogPhotosArr[currDogDisplay])
    }
    else
        document.getElementById("dogImg").setAttribute("src", dogPhotosArr[--currDogDisplay])
})
// Fetch skeleton
// Utilize endpoint

function delayedLoop(i) {
    if (i < 10000) {
        setTimeout(function()
        {
            changeColor(document.getElementById("myHeader"), i % 10);
            delayedLoop(i + 1);
        }, 80);
    }
}

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