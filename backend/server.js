import express from "express"
import pg from "pg"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production"
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {}),
})

app.get("/api/categories", (req, res, next) => {
  pool
    .query("SELECT * FROM categories")
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
    .query("SELECT * FROM clues")
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
