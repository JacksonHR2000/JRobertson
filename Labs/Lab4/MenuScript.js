
const menu = [{
    item : "Green Beans",
    itemDesc : "Go great served with steak!",
    itemPrice : "$0.99",
    itemEffects : "Have slightly psychedelic properties",
    image: "./Assets/Menu-Green-Beans.webp",
    imageAlt: "Green Bean Photo"

},
{
    item : "Peanuts",
    itemDesc : "Your standard penuts. You love em, we love em!",
    itemPrice : "$17.99 (per 1/90th lb)",
    itemEffects : "Requires purchase of epi-pen",
    image: "./Assets/Menu-Penuts-Baseball.webp",
    imageAlt: "Peanut photo"
},
{
    item : "Snow Peas",
    itemDesc : "Totally normal Snow Peas. Don't investigate...",
    itemPrice : "FREE",
    itemEffects : "Absolutely none, we promise...",
    image: "./Assets/Menu-Snow-Peas.webp",
    imageAlt: "Snow Pea Photo"

},
{
    item : "Fried Honey Mesquite",
    itemDesc : "We don't know what these are",
    itemPrice : "$2.50 OBO",
    itemEffects : "Very mysterious",
    image: "./Assets/Menu-Honey-Mosquiet.webp",
    imageAlt: "Honey Mesquite Photo"

},
{
    item : "Spring Beans",
    itemDesc : "These beans help your web applications run better",
    itemPrice : "FREE",
    itemEffects : "Must have a PHD to comprehend.",
    image: "./Assets/Menu-Spring-Beans.webp",
    imageAlt: "Spring Beans Photo"

}]

const image = document.getElementById("carouselImage")
const item = document.getElementById("item")
const description = document.getElementById("description")
const price = document.getElementById("price")
const sideEffects = document.getElementById("sideEffects")

let selection = 0

let nextButton= document.getElementsByClassName("carousel-control-next")[0]
nextButton.addEventListener("click", () => {
    updateMenuItem(++selection);
})

let prevButton= document.getElementsByClassName("carousel-control-prev")[0]
prevButton.addEventListener("click", () => {
    updateMenuItem(--selection);
})

function updateMenuItem(menuSelect) {
    if (menuSelect > (menu.length - 1))
        selection = 0;
    if (menuSelect < 0)
        selection = 4
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    image.setAttribute("src", menu[selection].image)
    image.setAttribute("alt", menu[selection].imageAlt)
    item.innerHTML = menu[selection].item
    description.innerHTML = menu[selection].itemDesc
    price.innerHTML = `<strong>Price: </strong> ${menu[selection].itemPrice}`
    sideEffects.innerHTML = `<strong>Side Effects: </strong> ${menu[selection].itemEffects}`
}

