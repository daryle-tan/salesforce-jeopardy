import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import nodemailer from "nodemailer"
import pkg from "pg"
import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const { Pool } = pkg

dotenv.config()

const app = express()

const { PORT, DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DATABASE_URL } =
  process.env

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

app.use(express.static(path.join(__dirname, "build")))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"))
// })

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  // max: 5,
  ssl: { rejectUnauthorized: false },
  // connectionTimeoutMillis: 20000,
  // idleTimeoutMillis: 20000,
  // allowExitOnIdle: false,
})
// const pool = new Pool({
//   user: "daryletan",
//   // host: "localhost",
//   host: DATABASE_URL,
//   database: "certforce",
//   password: pw,
//   port: 5432,
//   max: 5,
//   ssl: { rejectUnauthorized: false },
//   connectionTimeoutMillis: 20000,
//   idleTimeoutMillis: 20000,
//   allowExitOnIdle: false,
// })

function sendEmail({ name, email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    var mailOptions = {
      name: name,
      from: email,
      to: process.env.SMTP_MAIL,
      subject: subject,
      html: `
      <p>${name}</p>
      <p>${email}</p>
      <p>${subject}</p>
      <p>${message}</p>
      `,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
        return reject({ message: `An error has occurred` })
      }
      return resolve({ message: "Email sent successfully" })
    })
  })
}

app.get("/sendEmail", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message))
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
