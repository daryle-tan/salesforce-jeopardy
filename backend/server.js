import express from "express"
import bodyParser from "body-parser"
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"
import pkg from "pg"
const { Pool } = pkg

dotenv.config()

const app = express()
const { PORT, pw } = process.env

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

const pool = new Pool({
  user: "daryletan",
  host: "localhost",
  database: "certforce",
  password: pw,
  port: 5432,
  max: 5,
  connectionTimeoutMillis: 20000,
  idleTimeoutMillis: 20000,
  allowExitOnIdle: false,
})

app.get("/api/categories", (req, res, next) => {
  pool
    .query("SELECT * FROM categories;")
    .then((response) => {
      res.send(response.rows)
    })
    .catch(next)
})

app.get("/api/categories/:id", (req, res, next) => {
  const id = req.params.id
  pool
    .query("SELECT * FROM categories WHERE id = $1;", [id])
    .then((response) => {
      const asset = response.rows[0]
      if (asset) {
        res.send(asset)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(next)
})

app.get("/api/clues", (req, res, next) => {
  pool
    .query("SELECT * FROM clues;")
    .then((response) => {
      res.send(response.rows)
    })
    .catch(next)
})

app.get("/api/clues/:id", (req, res, next) => {
  const id = req.params.id
  pool
    .query("SELECT * FROM clues WHERE id = $1;", [id])
    .then((response) => {
      const asset = response.rows[0]
      if (asset) {
        res.send(asset)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(next)
})

app.use((err, req, res, next) => {
  console.log(err)
  return res
    .set("content-type", "text/plain")
    .status(500)
    .send("Internal Server Error")
})

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`)
})
