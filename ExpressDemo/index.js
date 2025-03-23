const express = require('express')
const app = express()
const port = process.env.port||3000
console.log(process.env)

// app.get("/",(request:Request<P,ResBody,ReqBody,ReqQuery,LocalsObj>, response:Response<ResBody, LocalsObj>): void => {
//     resonse.send("My first server!!!")
// })

app.get('/', function (req, res) {
    res.send("Welcome to the website!")
})

// As long as your methods are different you can use the same route!
app.post("/", ()=>{

})

app.delete("/", ()=>{


})

app.put("/", ()=>{

})
app.get('test', function (req, res) {
    res.send('This is the test page')
})

app.get('/hacked', function (req, res) {
    res.json({"Hello, hacker": "you discovered my hidden path"})
})

app.listen(3000, ()=>{
    console.log(`Express demo is running on port 3000`)
})