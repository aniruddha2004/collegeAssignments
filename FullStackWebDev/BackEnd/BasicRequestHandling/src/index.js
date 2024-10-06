const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get("/sum", (req, res) => {
    res.send(`3 + 5 = ${(3+5)}`)
})

app.get("/pro", (req, res) => {
    res.send(`3 * 5 = ${(3*5)}`)
})

app.get("/div", (req, res) => {
    res.send(`3 / 5 = ${(3/5)}`)
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})