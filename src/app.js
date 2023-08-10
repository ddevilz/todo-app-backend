const express = require('express')
const todo = require('./routes/todo.routes.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (_req, res) => {
    return res.send(
        "Hey there Devashish here - API"
    )
})

app.use("/api", todo)

app.all("*", (_req, res) => {
    return res.status(400).json({
        success: false,
        message: "Route not found"
    })
})

module.exports = app;