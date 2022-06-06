const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
   res.send("<h1>Welcome to my first sever hommies 😄</h1>")
})

app.get('/contact', (req, res) =>{
    res.send("<h1>Contact me please! 😄</h1>")
 })
 app.get('/about', (req, res)=>{
    res.send("<h1> Hey my name is Marquis and I like to code. </h1>")
 })
 app.get('/hobbies', (req, res)=>{
    res.send("<h1> I watch WHOOOO </h1>")
 })

app.listen(port, ()=> {
    console.log("The server started on the port " + port)
})