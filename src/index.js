import express from "express"
import { createPool } from "mysql2/promise"
import { config } from "dotenv"
config()

const app = express()

const pool = createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DB,
    port: process.env.MYSQLDB_PORT,
})

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/ping", async (req, res) => {
    const result = await pool.query("SELECT NOW()")
    res.json(result[0])
})

app.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log("Server is running on port", process.env.NODE_DOCKER_PORT)
})
