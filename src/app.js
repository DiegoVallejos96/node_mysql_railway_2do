import express from "express";
import {pool} from "./db.js"
import {PORT} from "./config.js"

const app = express()



app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/ping', async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)

})

app.get('/create', async (req,res) => {
    const result = await pool.query('INSERT INTO users(name) VALUES ("John")')
    res.json(result)
})


app.listen(PORT)
console.log("Server on port", PORT)


