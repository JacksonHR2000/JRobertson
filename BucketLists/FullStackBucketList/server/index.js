// SERVER
// **********
// Foundation
// **********
const express = require("express") // create an instance of our application
const app = express()
const cors = require("cors")

// The logger will help us with routing and parameters
const logger = require("morgan")

const {bucketlist} = require("./mockData");
app.use(logger("dev"))

// Add a body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
const port = process.env.PORT || 3000;  // What "station" port are we listening on for commands?


// ********
// Handlers
// ********
// Need our verb and our route
app.get("/", (req, res) => {
    console.log("hello")
    res.redirect("/redirect")
})

app.get("/redirect", (req, res) => {
    res.send("You have been diverted")
})

// Parameters
app.get("/api/bucket/:id", (req, res) => {
    res.send(`Variable route with parameter: ${req.params.id}`)
})


// READ Route
app.get("/api/bucket", (req, res) => {
    res.json(bucketlist)
})

app.get("api/bucket/:id", (req, res) => {

})

// CREATE Data Route
let newid = 4;

app.post("/api/bucket", (req, res) => {
    // What's our goal? - Add something to the database
    let newData = {
        id: newid++,
        description: req.body.description,
        isComplete: false,
    }
    bucketlist.push(newData)
    let receipt = newData
    res.json(receipt)
})

// DELETE Data route
app.delete("/api/bucket/:id", (req, res) => {
    let reqId = Number(req.params.id)

    let bucketIndex = bucketlist.findIndex((element) => {
        return element.id === reqId
    })

    let removedObj = bucketIndex !== -1 ? bucketlist.splice(bucketIndex, 1) : "Index not found"

    // Pretending this came from the Db
    let receipt = removedObj
    res.json(receipt)
})

// UPDATE data route
app.put("/api/bucket/:id", (req, res) => {
    let reqId = Number(req.params.id)

    let bucketItem = bucketlist.find((element) => {
        return element.id === reqId
    })
    // The above function returns a single JSON entry of type bucketlist
    // {
    //     id: 1,
    //     description: "Learn postresSQL!!",
    //     isComplete: false,
    // }

    let removedObj = bucketItem ? bucketItem.isComplete = !bucketItem.isComplete
        : "Index not found"

    // Pretending this came from the Db
    let receipt = removedObj
    res.json(receipt)


})

// ********
// Listener
// ********
app.listen(port, () => {
    console.log(`Bucketlist server running on port ${port}`)
})
