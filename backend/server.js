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

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`)
})
